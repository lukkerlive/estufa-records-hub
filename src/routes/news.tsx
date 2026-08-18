import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";

import { useI18n, pick, type TranslationKey } from "@/lib/i18n";
import { news, type NewsItem } from "@/data/estufa";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — Estufa Records" },
      {
        name: "description",
        content:
          "News da Estufa Records: mentoria Sebrae TXM Methods, imprensa e novidades da gravadora.",
      },
      { property: "og:title", content: "News — Estufa Records" },
      { property: "og:description", content: "Novidades e imprensa da Estufa Records." },
    ],
  }),
  component: NewsPage,
});

const categoryKeys: Record<NewsItem["category"], TranslationKey> = {
  mentoria: "news_category_mentoria",
  imprensa: "news_category_imprensa",
  programa: "news_category_programa",
  parceria: "news_category_parceria",
};

function NewsPage() {
  const { t, lang } = useI18n();
  const highlight = news.filter((n) => n.highlight);
  const rest = news.filter((n) => !n.highlight);

  return (
    <div className="mx-auto max-w-4xl px-5 py-14">
      <p className="label-mono text-est-yellow">{t("news_kicker")}</p>
      <h1 className="mt-3 text-5xl font-bold uppercase sm:text-6xl">{t("news_title")}</h1>
      <div className="rule-primaries mt-6 max-w-md" />
      <p className="mt-6 max-w-xl text-muted-foreground">{t("news_desc")}</p>

      {highlight.map((item) => (
        <section key={item.id} className="panel mt-10 border-t-4 border-t-est-red p-6">
          <span className="label-mono border border-border px-2 py-1 text-est-yellow">
            {t(categoryKeys[item.category])}
          </span>
          <h2 className="mt-4 text-2xl font-bold uppercase">{pick(item.title, lang)}</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">{pick(item.summary, lang)}</p>
        </section>
      ))}

      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        {rest.map((item) => (
          <article key={item.id} className="panel flex flex-col gap-3 p-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="label-mono border border-border px-2 py-1 text-est-red">
                {t(categoryKeys[item.category])}
              </span>
              {item.date && <span className="label-mono text-muted-foreground">{item.date}</span>}
            </div>
            <h3 className="text-lg font-bold uppercase">{pick(item.title, lang)}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {pick(item.summary, lang)}
            </p>
            {item.sourceUrl && (
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="label-mono mt-auto inline-flex items-center gap-1 text-est-yellow hover:underline"
              >
                {item.sourceLabel ?? "Fonte"} <ExternalLink className="size-3" />
              </a>
            )}
          </article>
        ))}
      </section>

      <p className="mt-10 text-sm text-muted-foreground">
        <Link to="/about" className="text-est-yellow hover:underline">
          {t("nav_about")}
        </Link>{" "}
        ·{" "}
        <Link to="/eventos" className="text-est-yellow hover:underline">
          {t("nav_events")}
        </Link>
      </p>
    </div>
  );
}
