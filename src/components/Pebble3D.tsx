/**
 * @name Pebble3D.tsx
 * @description 3D organic tactile pebble block featuring directional extrusion shadows
 */

import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface Pebble3DProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "forest" | "sprout" | "timber" | "surface";
  shape?: "egg" | "bean" | "rounded-xl";
  icon?: React.ReactNode;
  title: string;
  metric?: string;
  subtitle?: string;
}

/**
 * 3D Organic Extruded Pebble Component
 * Mimics tactile biopolymer pellets and organic soil capsules with physical depth
 */
export const Pebble3D: React.FC<Pebble3DProps> = ({
  variant = "forest",
  shape = "egg",
  icon,
  title,
  metric,
  subtitle,
  className,
  children,
  ...props
}) => {
  const variantStyles = {
    forest: "bg-primary-forest text-white shadow-3d-forest border-t border-white/25",
    sprout: "bg-secondary-moss text-deep-ink shadow-3d-sprout border-t border-white/30",
    timber: "bg-tertiary-timber text-white shadow-3d-timber border-t border-white/20",
    surface: "bg-surface-container-lowest text-on-surface shadow-3d-surface border border-surface-container-highest",
  };

  const shapeStyles = {
    egg: "rounded-[2.5rem] p-7 sm:p-8",
    bean: "rounded-[3rem] p-8",
    "rounded-xl": "rounded-3xl p-6 sm:p-8",
  };

  return (
    <div
      className={twMerge(
        clsx(
          "relative overflow-hidden cursor-pointer select-none",
          variantStyles[variant],
          shapeStyles[shape],
          className
        )
      )}
      {...props}
    >
      {/* Light sheen reflection across top curve */}
      <div className="absolute top-0 inset-x-4 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-[2.5rem] pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
        <div className="flex items-center justify-between">
          {icon && (
            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
              {icon}
            </div>
          )}
          {metric && (
            <span className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight">
              {metric}
            </span>
          )}
        </div>

        <div>
          <h3 className="font-display font-bold text-xl leading-snug">{title}</h3>
          {subtitle && (
            <p className="text-sm opacity-85 mt-1 leading-relaxed">{subtitle}</p>
          )}
        </div>

        {children}
      </div>
    </div>
  );
};
