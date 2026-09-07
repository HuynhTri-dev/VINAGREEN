/**
 * @name Button.tsx
 * @description Ergonomic pill button component following Bio-Organic Modernism guidelines
 */

import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

/**
 * Bio-Organic Pill Button Component
 * Features minimum 48px touch targets for outdoor/farmer accessibility
 * and botanical elevation shadows on hover.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "left",
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-semibold rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantStyles = {
      primary:
        "bg-primary-container text-white hover:bg-primary shadow-sm hover:shadow-[0_12px_24px_-6px_rgba(46,92,56,0.25)] hover:-translate-y-0.5 active:translate-y-0 focus:ring-primary-container",
      secondary:
        "bg-secondary-moss text-deep-ink hover:bg-[#729938] shadow-sm hover:shadow-[0_12px_24px_-6px_rgba(130,172,66,0.3)] hover:-translate-y-0.5 active:translate-y-0 focus:ring-secondary-moss",
      outline:
        "border-[1.5px] border-primary-container text-primary-container bg-transparent hover:bg-primary-container/10 focus:ring-primary-container",
      ghost:
        "text-primary-container bg-transparent hover:bg-primary-container/10 focus:ring-primary-container",
    };

    const sizeStyles = {
      sm: "min-h-[40px] px-4 py-1.5 text-sm gap-1.5",
      md: "min-h-[48px] px-6 py-2.5 text-base gap-2",
      lg: "min-h-[56px] px-8 py-3 text-lg gap-2.5",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={twMerge(
          clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)
        )}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className="shrink-0">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="shrink-0">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
