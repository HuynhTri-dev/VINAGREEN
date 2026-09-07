/**
 * @name ThemeToggle.tsx
 * @description Theme switch component toggling between Light and Dark mode
 */

"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("vinagreen-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (stored === "dark" || (!stored && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("vinagreen-theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("vinagreen-theme", "dark");
      setIsDark(true);
    }
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center opacity-0" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Chuyển đổi giao diện sáng/tối"
      className="relative w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-high border border-surface-container-highest flex items-center justify-center text-on-surface transition-all duration-200 cursor-pointer shadow-sm hover:scale-105"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-amber-400 transition-transform rotate-0" />
      ) : (
        <Moon className="w-5 h-5 text-primary-forest transition-transform rotate-0" />
      )}
    </button>
  );
};
