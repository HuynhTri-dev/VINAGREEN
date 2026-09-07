/**
 * @name Card.tsx
 * @description Sculpted organic container card with warm surface tiers and botanical shadows
 */

import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  tier?: "base" | "floating" | "tinted";
  rounded?: "default" | "lg" | "xl";
  hoverEffect?: boolean;
}

/**
 * Bio-Organic Sculpted Card Component
 */
export const Card: React.FC<CardProps> = ({
  children,
  tier = "floating",
  rounded = "lg",
  hoverEffect = false,
  className,
  ...props
}) => {
  const baseStyles = "transition-all duration-300 relative overflow-hidden";

  const tierStyles = {
    base: "bg-surface-container-low border border-surface-container-high/60",
    floating:
      "bg-white shadow-[0_16px_36px_-8px_rgba(46,92,56,0.12),0_4px_12px_rgba(123,75,40,0.05)] border border-surface-container-high/40",
    tinted: "bg-surface-container border border-surface-container-highest/60",
  };

  const roundedStyles = {
    default: "rounded-2xl",
    lg: "rounded-[2rem]",
    xl: "rounded-[3rem]",
  };

  const hoverStyles = hoverEffect
    ? "hover:shadow-[0_20px_40px_-10px_rgba(46,92,56,0.18)] hover:-translate-y-1"
    : "";

  return (
    <div
      className={twMerge(
        clsx(
          baseStyles,
          tierStyles[tier],
          roundedStyles[rounded],
          hoverStyles,
          "p-6 sm:p-8",
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
