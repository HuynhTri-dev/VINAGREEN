/**
 * @name ImagePlaceholder.tsx
 * @description Smart image placeholder box with photography recommendation and aspect ratio
 */

import React from "react";
import { Camera, Sparkles, Image as ImageIcon } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ImagePlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  aspectRatio?: "16/9" | "4/3" | "1/1" | "21/9";
  title: string;
  recommendedSubject: string;
  tag?: string;
  lighting?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  aspectRatio = "16/9",
  title,
  recommendedSubject,
  tag = "Gợi Ý Ảnh Thực Tế",
  lighting = "Ánh sáng tự nhiên, chân thực",
  className,
  ...props
}) => {
  const aspectStyles = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "21/9": "aspect-[21/9]",
  };

  return (
    <div
      className={twMerge(
        clsx(
          "w-full rounded-3xl bg-surface-container-low border-2 border-dashed border-primary-container/30 hover:border-secondary-moss transition-all relative overflow-hidden flex flex-col justify-between p-6 group",
          aspectStyles[aspectRatio],
          className
        )
      )}
      {...props}
    >
      {/* Background Soft Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary-container/10 via-transparent to-transparent pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between relative z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-moss/15 text-secondary-moss text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          {tag}
        </span>
        <span className="text-xs font-mono text-outline font-semibold bg-surface-container px-2.5 py-0.5 rounded-full">
          Ratio: {aspectRatio}
        </span>
      </div>

      {/* Center Icon */}
      <div className="flex flex-col items-center justify-center text-center my-auto py-4 relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-surface-container-high text-primary-forest flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-primary-forest group-hover:text-white transition-all duration-300">
          <Camera className="w-7 h-7" />
        </div>
        <h4 className="font-display font-bold text-lg text-primary-forest mt-3">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-on-surface-variant max-w-md mt-1.5 leading-relaxed font-normal">
          <strong className="text-primary-forest">Nội dung đề xuất:</strong>{" "}
          {recommendedSubject}
        </p>
      </div>

      {/* Bottom Footer Note */}
      <div className="pt-3 border-t border-surface-container-highest/60 flex items-center justify-between text-[11px] text-outline relative z-10">
        <span className="flex items-center gap-1">
          <ImageIcon className="w-3.5 h-3.5 text-secondary-moss" />
          {lighting}
        </span>
        <span className="font-mono italic">Placeholder Box</span>
      </div>
    </div>
  );
};
