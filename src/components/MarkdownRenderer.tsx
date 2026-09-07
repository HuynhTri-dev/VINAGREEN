/**
 * @name MarkdownRenderer.tsx
 * @description Zero-dependency, rich Markdown renderer component for VINAGREEN Chatbot.
 * Supports bold, italic, bullet lists, numbered lists, blockquotes, headers, inline code, and Markdown tables.
 */

import React from "react";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

/** Helper to render inline formatting: bold, italic, inline code */
function renderInline(text: string): React.ReactNode[] {
  // Regex to match **bold**, *italic*, and `code`
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-primary-forest">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return (
        <em key={index} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }
    if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
      return (
        <code
          key={index}
          className="px-1.5 py-0.5 rounded bg-surface-container-high font-mono text-xs text-primary-forest"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  className = "",
}) => {
  if (!content) return null;

  // Split into lines
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // 1. Table Detection (| col1 | col2 |)
    if (trimmed.startsWith("|") && trimmed.endsWith("|") && i + 1 < lines.length) {
      const nextLine = lines[i + 1]?.trim() || "";
      if (nextLine.includes("---") || nextLine.includes("|:")) {
        const tableLines: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith("|")) {
          tableLines.push(lines[i].trim());
          i++;
        }

        const headerRow = tableLines[0]
          .split("|")
          .filter((c) => c.trim() !== "")
          .map((c) => c.trim());

        const bodyRows = tableLines.slice(2).map((row) =>
          row
            .split("|")
            .filter((c) => c.trim() !== "")
            .map((c) => c.trim())
        );

        elements.push(
          <div key={`table-${i}`} className="my-2.5 overflow-x-auto rounded-xl border border-surface-container-highest shadow-xs">
            <table className="w-full text-xs text-left border-collapse bg-surface-container-lowest">
              <thead>
                <tr className="bg-primary-forest text-white">
                  {headerRow.map((cell, hIdx) => (
                    <th key={hIdx} className="px-3 py-2 font-bold border-b border-white/20">
                      {renderInline(cell)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-highest">
                {bodyRows.map((row, rIdx) => (
                  <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-surface" : "bg-surface-container-low"}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-3 py-2 text-deep-ink">
                        {renderInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        continue;
      }
    }

    // 2. Headers (# Header, ## Header, ### Header)
    if (trimmed.startsWith("### ")) {
      elements.push(
        <h4 key={`h3-${i}`} className="font-bold text-sm text-primary-forest mt-2 mb-1">
          {renderInline(trimmed.replace(/^###\s+/, ""))}
        </h4>
      );
      i++;
      continue;
    }
    if (trimmed.startsWith("## ") || trimmed.startsWith("# ")) {
      elements.push(
        <h3 key={`h2-${i}`} className="font-extrabold text-base text-primary-forest mt-2.5 mb-1 border-b border-surface-container-highest pb-1">
          {renderInline(trimmed.replace(/^#+\s+/, ""))}
        </h3>
      );
      i++;
      continue;
    }

    // 3. Bullet list (- item or * item)
    if (/^[\-*]\s+/.test(trimmed)) {
      const listItems: string[] = [];
      while (i < lines.length && /^[\-*]\s+/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^[\-*]\s+/, ""));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc list-inside space-y-1 my-1.5 text-deep-ink">
          {listItems.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // 4. Numbered list (1. item)
    if (/^\d+\.\s+/.test(trimmed)) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^\d+\.\s+/, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal list-inside space-y-1 my-1.5 text-deep-ink">
          {listItems.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {renderInline(item)}
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // 5. Blockquote (> quote)
    if (trimmed.startsWith(">")) {
      elements.push(
        <blockquote key={`quote-${i}`} className="border-l-3 border-primary-forest pl-3 py-1 my-1.5 italic text-on-surface-variant bg-surface-container-low/50 rounded-r-lg text-xs">
          {renderInline(trimmed.replace(/^>\s*/, ""))}
        </blockquote>
      );
      i++;
      continue;
    }

    // 6. Empty line
    if (!trimmed) {
      elements.push(<div key={`blank-${i}`} className="h-1.5" />);
      i++;
      continue;
    }

    // 7. Regular paragraph
    elements.push(
      <p key={`p-${i}`} className="my-1 leading-relaxed text-deep-ink">
        {renderInline(trimmed)}
      </p>
    );
    i++;
  }

  return <div className={`space-y-0.5 text-sm ${className}`}>{elements}</div>;
};
