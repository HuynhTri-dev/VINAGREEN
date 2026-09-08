"use client";

import React, { createContext, useContext, useState } from "react";
import vi from "@/i18n/dictionaries/vi.json";
import en from "@/i18n/dictionaries/en.json";

type Language = "VI" | "EN";

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
}

const dictionaries: Record<Language, any> = { VI: vi, EN: en };

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("VI");

  const toggleLang = () => {
    setLang((prev) => (prev === "VI" ? "EN" : "VI"));
  };

  const t = (key: string) => {
    const keys = key.split(".");
    let value: any = dictionaries[lang];
    for (const k of keys) {
      if (value === undefined) return key;
      value = value[k];
    }
    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
