/**
 * @name Container.tsx
 * @description Standard layout container bounding content to max 76rem (1216px) with responsive gutters
 */

import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

/**
 * Bio-Organic Layout Container
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  size = "default",
  className,
  ...props
}) => {
  const sizeStyles = {
    narrow: "max-w-4xl",
    default: "max-w-[76rem]", // 1216px
    wide: "max-w-[90rem]",
  };

  return (
    <div
      className={twMerge(
        clsx("w-full mx-auto px-4 sm:px-6 lg:px-8", sizeStyles[size], className)
      )}
      {...props}
    >
      {children}
    </div>
  );
};
