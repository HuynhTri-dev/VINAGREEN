/**
 * @name ChatbotWidget.tsx
 * @description Lightweight REST + SSE Streaming AI Chatbot Widget for VINAGREEN.
 *   - Real-time SSE token-by-token streaming (typewriter effect).
 *   - Rich Markdown rendering (tables, bold, italic, lists, blockquotes) via MarkdownRenderer.
 *   - 0 idle cost (No persistent WebSocket audio sessions).
 *   - Interactive dosage cards & quick suggestion chips.
 */

"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  PhoneCall,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/design-system";
import { MarkdownRenderer } from "../MarkdownRenderer";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const QUICK_SUGGESTION_CHIPS = [
  { label: "🌱 Liều lượng Sầu riêng", prompt: "Tính liều lượng AgriGel cho 1 hecta sầu riêng" },
  { label: "☕ Liều lượng Cà phê", prompt: "Tư vấn giữ ẩm cho cây cà phê đất đỏ bazan" },
  { label: "💧 Chống mặn BioBandage", prompt: "BioBandage có chịu được nước mặn 3‰ không?" },
  { label: "📦 Nhận mẫu thử miễn phí", prompt: "Tôi muốn đăng ký nhận gói mẫu thử AgriGel" },
  { label: "📞 Gặp kỹ sư nông học", prompt: "Cho tôi số điện thoại chuyên viên phụ trách vùng" },
];

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  isDosageCard?: boolean;
  dosageData?: {
    crop: string;
    area: number;
    kgNeeded: string;
    waterSaved: string;
  };
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "Kính chào bà con và quý đối tác! Tôi là Trợ Lý Nông Vụ ViNar. Tôi có thể hỗ trợ tính toán liều lượng viên nén ngậm nước AgriGel, tư vấn kỹ thuật chống hạn mặn hoặc kết nối gửi mẫu thử nghiệm tận vườn.",
      timestamp: "Vừa xong",
    },
  ]);
  const [isAgentTyping, setIsAgentTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // ---- Helper: Check if bot text should include dosage card ----------------

  const checkDosageCard = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes("sầu riêng") && (lower.includes("liều") || lower.includes("kg") || lower.includes("hecta"))) {
      return {
        isDosageCard: true,
        dosageData: {
          crop: "Sầu riêng kinh doanh",
          area: 1,
          kgNeeded: "45 – 50 kg AgriGel",
          waterSaved: "40% – 42%",
        },
      };
    }
    if (lower.includes("cà phê") && (lower.includes("liều") || lower.includes("kg") || lower.includes("hecta"))) {
      return {
        isDosageCard: true,
        dosageData: {
          crop: "Cà phê vối Tây Nguyên",
          area: 1,
          kgNeeded: "40 – 45 kg AgriGel",
          waterSaved: "38% – 41%",
        },
      };
    }
    return {};
  };

  // ---- Send Message Handler (SSE Streaming) -------------------------------

  const handleSendMessage = useCallback(
    async (textToSend?: string) => {
      const text = (textToSend ?? inputMessage).trim();
      if (!text || isAgentTyping) return;

      const userMsgId = Date.now().toString();
      const botMsgId = (Date.now() + 1).toString();

      const userMsg: Message = {
        id: userMsgId,
        sender: "user",
        text,
        timestamp: "Vừa xong",
      };

      // Add user message & empty bot placeholder for streaming
      const updatedMessages = [...messages, userMsg];
      setMessages((prev) => [
        ...prev,
        userMsg,
        {
          id: botMsgId,
          sender: "bot",
          text: "",
          timestamp: "Vừa xong",
        },
      ]);

      if (!textToSend) setInputMessage("");
      setIsAgentTyping(true);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: updatedMessages.map((m) => ({
              role: m.sender === "user" ? "user" : "assistant",
              content: m.text,
            })),
          }),
        });

        if (!response.ok || !response.body) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let accumulatedText = "";
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith(":")) continue;

            if (trimmed === "data: [DONE]") break;

            if (trimmed.startsWith("data: ")) {
              try {
                const jsonStr = trimmed.slice(6);
                const parsed = JSON.parse(jsonStr);
                if (parsed.text) {
                  accumulatedText += parsed.text;

                  // Update bot message stream text in real-time
                  setMessages((prev) =>
                    prev.map((msg) =>
                      msg.id === botMsgId
                        ? {
                          ...msg,
                          text: accumulatedText,
                          ...checkDosageCard(accumulatedText),
                        }
                        : msg
                    )
                  );
                }
              } catch {
                // Ignore parse errors for partial chunks
              }
            }
          }
        }
      } catch (error) {
        console.error("[ChatbotWidget] Error streaming message:", error);
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === botMsgId
              ? {
                ...msg,
                text: "Dạ thưa bà con, kết nối mạng tạm thời bị gián đoạn. Bà con có thể gọi trực tiếp Tổng đài Kỹ thuật Nông học miễn cước 1800 6828 để gặp kỹ sư tư vấn ngay ạ!",
              }
              : msg
          )
        );
      } finally {
        setIsAgentTyping(false);
      }
    },
    [inputMessage, isAgentTyping, messages]
  );

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isAgentTyping]);

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2.5 px-5 py-3 rounded-full bg-surface-container-lowest text-primary-forest shadow-3d-surface border border-surface-container-highest hover:scale-105 transition-all text-xs font-bold select-none cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <span>Hỏi Trợ Lý Nông Vụ ViNar</span>
          </button>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Mở khung chat trợ lý nông vụ"
          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${isOpen
              ? "bg-surface-container-high text-deep-ink shadow-md"
              : "bg-primary-forest text-white shadow-3d-forest hover:scale-110"
            }`}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="relative">
              <MessageSquare className="w-7 h-7 text-[#bbefc0]" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-white" />
            </div>
          )}
        </button>
      </div>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="fixed inset-x-4 bottom-24 sm:inset-auto sm:bottom-24 sm:right-6 sm:w-[440px] h-[600px] max-h-[85vh] z-50 rounded-[2.5rem] bg-surface-container-lowest border border-surface-container-highest shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300">
          {/* Header */}
          <div className="p-4 sm:p-5 bg-primary-forest text-white flex items-center justify-between shadow-md shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1e482b] border border-white/20 flex items-center justify-center shadow-inner">
                <Bot className="w-6 h-6 text-[#bbefc0]" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base leading-tight">
                  Trợ Lý Nông Vụ ViNar
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-[#a0d3a5] mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span>Trực tuyến 24/7 · AI Gemma 4 (31B)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="tel:18006828"
                title="Gọi hotline miễn cước"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#bbefc0]" />
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Hotline Strip */}
          <div className="bg-secondary-container/80 dark:bg-surface-container px-4 py-1.5 flex items-center justify-between text-[11px] text-on-secondary-container font-semibold border-b border-secondary-moss/20">
            <span>Tổng đài miễn cước nông vụ:</span>
            <a href="tel:18006828" className="font-mono font-extrabold text-primary-forest underline">
              1800 6828
            </a>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-surface text-deep-ink">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-primary-forest text-white flex items-center justify-center shrink-0 text-xs font-bold mt-1">
                    VN
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-sm leading-relaxed shadow-sm ${msg.sender === "user"
                      ? "bg-primary-forest text-white rounded-tr-sm"
                      : "bg-surface-container-lowest text-deep-ink border border-surface-container-highest rounded-tl-sm"
                    }`}
                >
                  {/* Markdown Renderer for AI and User text */}
                  {msg.sender === "bot" ? (
                    msg.text ? (
                      <MarkdownRenderer content={msg.text} />
                    ) : (
                      <div className="flex items-center gap-1.5 py-1">
                        <span className="w-2 h-2 rounded-full bg-green-600 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-2 h-2 rounded-full bg-green-600 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-2 h-2 rounded-full bg-green-600 animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    )
                  ) : (
                    <p className="whitespace-pre-line">{msg.text}</p>
                  )}

                  {/* Interactive Dosage Card */}
                  {msg.isDosageCard && msg.dosageData && (
                    <div className="mt-3 p-3.5 rounded-xl bg-surface-container border border-surface-container-highest space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary-forest">
                        <span>{msg.dosageData.crop}</span>
                        <span className="text-secondary-moss">Khuyến nghị</span>
                      </div>
                      <div className="text-xl font-display font-extrabold text-primary-forest">
                        {msg.dosageData.kgNeeded}
                      </div>
                      <div className="text-xs text-on-surface-variant font-medium">
                        💧 Tiết kiệm: <strong>{msg.dosageData.waterSaved}</strong>
                      </div>
                      <div className="pt-2">
                        <Button
                          variant="secondary"
                          size="sm"
                          className="w-full text-xs h-9 min-h-0"
                          onClick={() => handleSendMessage("Tôi muốn nhận mẫu thử cho liều lượng này")}
                        >
                          Nhận Gói Thử Nghiệm 500g
                        </Button>
                      </div>
                    </div>
                  )}

                  <span className="block text-[10px] opacity-60 text-right mt-1">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="p-2.5 bg-surface-container-low border-t border-surface-container-highest overflow-x-auto flex gap-2 no-scrollbar">
            {QUICK_SUGGESTION_CHIPS.map((chip, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(chip.prompt)}
                disabled={isAgentTyping}
                className="shrink-0 px-3 py-1 rounded-full bg-surface-container-lowest hover:bg-surface-container text-xs font-semibold text-deep-ink border border-surface-container-highest transition-colors shadow-xs cursor-pointer disabled:opacity-50"
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-surface-container-lowest border-t border-surface-container-highest flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Nhập câu hỏi nông vụ hoặc loại cây..."
              disabled={isAgentTyping}
              className="flex-1 h-11 px-4 bg-surface-container-low rounded-full border border-surface-container-highest text-sm text-deep-ink focus:outline-none focus:border-primary-forest focus:ring-1 focus:ring-primary-forest disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isAgentTyping}
              className="w-11 h-11 rounded-full bg-primary-forest text-white disabled:opacity-40 flex items-center justify-center shrink-0 hover:bg-primary transition-colors cursor-pointer shadow-sm"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
