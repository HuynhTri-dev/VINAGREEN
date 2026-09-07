/**
 * @name Badge.tsx
 * @description Pill-shaped contextual badges for eco tags, metrics, and biotech markers
 */

import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "eco" | "timber" | "moss" | "neutral" | "primary";
  size?: "sm" | "md";
  icon?: React.ReactNode;
}

/**
 * Bio-Organic Pill Badge Component
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "eco",
  size = "md",
  icon,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-semibold rounded-full tracking-wide";

  const variantStyles = {
    eco: "bg-[#E4ECC8] text-primary-forest",
    timber: "bg-[#F0E5DC] text-tertiary-timber",
    moss: "bg-[#C1EE7C] text-[#486D01]",
    neutral: "bg-surface-container text-deep-ink",
    primary: "bg-primary-forest text-white",
  };

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs gap-1",
    md: "px-3.5 py-1 text-sm gap-1.5",
  };

  return (
    <span
      className={twMerge(
        clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
