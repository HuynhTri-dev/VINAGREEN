/**
 * @name Navbar.tsx
 * @description Global navigation bar with 4-page routing, ThemeToggle, and mobile responsiveness
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sprout, Menu, X, PhoneCall, Bot, Globe } from "lucide-react";
import { Container, Button } from "@/design-system";
import { ThemeToggle } from "./ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const NAV_ITEMS = [
  { key: "nav.home", href: "/" },
  { key: "nav.product", href: "/product" },
  { key: "nav.about", href: "/about-us" },
  { key: "nav.journey", href: "/journey" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-surface-container-highest backdrop-glass-organic transition-colors">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-primary-forest text-white flex items-center justify-center shadow-3d-forest group-hover:scale-105 transition-transform">
              <Sprout className="w-6 h-6 text-[#C1EE7C]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-2xl tracking-tight text-primary-forest leading-none">
                ViNar
              </span>
              <span className="text-[10px] font-bold text-tertiary-timber tracking-wider uppercase mt-0.5">
                VinaGreen Circular
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold transition-all relative py-1 ${isActive
                    ? "text-primary-forest dark:text-secondary-moss font-bold"
                    : "text-on-surface-variant hover:text-primary-forest"
                    }`}
                >
                  {t(item.key)}
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-0 h-0.5 bg-secondary-moss rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-3">
            {/* Language Switch */}
            <button
              onClick={toggleLang}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-xs font-bold text-deep-ink border border-surface-container-highest transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-secondary-moss" />
              <span>{lang}</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <ThemeToggle />

            {/* Hotline Direct CTA */}
            <a
              href="tel:18006828"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold border border-secondary-moss/30 hover:scale-105 transition-all shadow-xs"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>1800 6828</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Mở danh mục điều hướng"
              className="lg:hidden w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-5 border-t border-surface-container-highest space-y-3 bg-surface-container-lowest/95 backdrop-blur-md rounded-b-3xl px-4 shadow-xl">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${isActive
                    ? "bg-primary-forest text-white"
                    : "text-deep-ink hover:bg-surface-container"
                    }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-surface-container-highest flex items-center justify-between">
              <button
                onClick={toggleLang}
                className="flex items-center gap-2 text-xs font-bold text-primary-forest"
              >
                <Globe className="w-4 h-4 text-secondary-moss" />
                <span>Ngôn ngữ: {lang}</span>
              </button>
              <a
                href="tel:18006828"
                className="flex items-center gap-1.5 text-xs font-bold text-secondary-moss font-mono"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Hotline: 1800 6828</span>
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
