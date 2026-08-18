import { Link } from "@tanstack/react-router";

import markAsset from "@/assets/estufa-mark.png.asset.json";
import { useI18n, type Lang } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/i18n";

const nav: { to: string; labelKey: TranslationKey; color: string }[] = [
  { to: "/", labelKey: "nav_home", color: "hover:bg-est-red hover:text-est-sand" },
  { to: "/about", labelKey: "nav_about", color: "hover:bg-est-blue hover:text-est-sand" },
  { to: "/artists", labelKey: "nav_artists", color: "hover:bg-est-blue hover:text-est-sand" },
  { to: "/estufa-radio", labelKey: "nav_radio", color: "hover:bg-est-green hover:text-est-sand" },
  { to: "/cena", labelKey: "nav_cena", color: "hover:bg-est-yellow hover:text-est-ink" },
  { to: "/send-your-music", labelKey: "nav_send", color: "hover:bg-est-yellow hover:text-est-ink" },
];

function LanguageToggle() {
  const { lang, setLang } = useI18n();
  const toggle = () => setLang(lang === "pt" ? "en" : "pt");
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Mudar idioma / change language"
      className="label-mono border border-border px-3 py-2 transition-colors hover:bg-foreground hover:text-est-ink"
    >
      {lang === "pt" ? "PT" : "EN"}
    </button>
  );
}

export function SiteHeader() {
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="rule-primaries" />
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={markAsset.url}
            alt="Símbolo da Estufa Records"
            width={36}
            height={36}
            className="size-9 shrink-0"
          />
          <span className="label-mono text-base leading-none text-foreground">{t("brand")}</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-2">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className={`label-mono border border-border px-3 py-2 transition-colors ${item.color}`}
              activeProps={{ className: "bg-foreground text-est-ink" }}
            >
              {t(item.labelKey)}
            </Link>
          ))}
          <LanguageToggle />
        </nav>
      </div>
    </header>
  );
}
