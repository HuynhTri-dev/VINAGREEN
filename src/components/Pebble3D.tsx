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
  category?: string;
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
  category,
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
          "relative overflow-hidden cursor-pointer select-none transition-all duration-300 hover:-translate-y-1",
          variantStyles[variant],
          shapeStyles[shape],
          className
        )
      )}
      {...props}
    >
      {/* Light sheen reflection across top curve */}
      <div className="absolute top-0 inset-x-4 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-[2.5rem] pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-between h-full space-y-5">
        {/* Top Header Row: Icon & Metric/Badge */}
        <div className="flex items-center justify-between gap-3">
          {icon && (
            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center shrink-0 shadow-inner">
              {icon}
            </div>
          )}
          {metric && (
            <span className="font-mono font-bold text-xs sm:text-sm px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 tracking-wide shrink-0">
              {metric}
            </span>
          )}
        </div>

        {/* Content Body */}
        <div className="space-y-2">
          {category && (
            <span className="inline-block text-[11px] font-mono font-extrabold uppercase tracking-widest opacity-80">
              {category}
            </span>
          )}
          <h3 className="font-display font-bold text-xl sm:text-2xl leading-snug">{title}</h3>
          {subtitle && (
            <p className="text-xs sm:text-sm opacity-90 leading-relaxed pt-1">{subtitle}</p>
          )}
        </div>

        {children}
      </div>
    </div>
  );
};
