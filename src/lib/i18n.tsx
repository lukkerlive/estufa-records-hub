import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

import { translations } from "./translations";

export type Lang = "pt" | "en";

export type TranslationKey = keyof (typeof translations)["pt"];

type I18nContextValue = {
  lang: Lang;
  t: (key: TranslationKey) => string;
  setLang: (lang: Lang) => void;
};

const STORAGE_KEY = "estufa-lang";

const LanguageContext = createContext<I18nContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "pt" || stored === "en") {
        setLangState(stored);
      }
    } catch {
      // SSR / storage indisponível — mantém o padrão pt.
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignora falhas de storage
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, t: (key) => translations[lang][key], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return ctx;
}

/** Seleciona o valor do idioma ativo em objetos { pt, en }. */
export function pick<T>(value: { pt: T; en: T }, lang: Lang): T {
  return value[lang];
}
