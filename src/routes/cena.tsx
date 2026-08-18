import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, Instagram } from "lucide-react";

import { useI18n, pick, type TranslationKey } from "@/lib/i18n";
import { events, news, type EventItem, type NewsItem } from "@/data/estufa";

export const Route = createFileRoute("/cena")({
  head: () => ({
    meta: [
      { title: "Cena — Estufa Records" },
      {
        name: "description",
        content:
          "Eventos, workshops, masterclasses, imprensa e novidades da Estufa Records — o que estamos fazendo na cena.",
      },
      { property: "og:title", content: "Cena — Estufa Records" },
      { property: "og:description", content: "Agenda e novidades da Estufa Records." },
    ],
  }),
  component: CenaPage,
});

const typeKeys: Record<EventItem["type"], TranslationKey> = {
  workshop: "events_type_workshop",
  masterclass: "events_type_masterclass",
  showcase: "events_type_showcase",
  party: "events_type_party",
};

const categoryKeys: Record<NewsItem["category"], TranslationKey> = {
  mentoria: "news_category_mentoria",
  imprensa: "news_category_imprensa",
  programa: "news_category_programa",
  parceria: "news_category_parceria",
};

function CenaPage() {
  const { t, lang } = useI18n();
  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");
  const highlight = news.filter((n) => n.highlight);
  const rest = news.filter((n) => !n.highlight);

  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <p className="label-mono text-est-yellow">{t("cena_kicker")}</p>
      <h1 className="mt-3 text-5xl font-bold uppercase sm:text-6xl">{t("cena_title")}</h1>
      <div className="rule-primaries mt-6 max-w-md" />
      <p className="mt-6 max-w-xl text-muted-foreground">{t("cena_desc")}</p>

      <section className="mt-10">
        <h2 className="label-mono text-est-red">{t("events_upcoming")}</h2>
        {upcoming.length === 0 ? (
          <div className="panel mt-4 p-6">
            <p className="text-sm text-muted-foreground">{t("events_upcoming_none")}</p>
          </div>
        ) : (
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {upcoming.map((event) => (
              <EventCard key={event.id} event={event} t={t} lang={lang} />
            ))}
          </ul>
        )}
      </section>

      <section className="mt-12">
        <h2 className="label-mono text-est-red">{t("events_past")}</h2>
        <ul className="mt-4 space-y-4">
          {past.map((event) => (
            <EventCard key={event.id} event={event} t={t} lang={lang} />
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="label-mono text-est-red">{t("news_title")}</h2>

        {highlight.map((item) => (
          <article key={item.id} className="panel mt-4 border-t-4 border-t-est-red p-6">
            <span className="label-mono border border-border px-2 py-1 text-est-yellow">
              {t(categoryKeys[item.category])}
            </span>
            <h3 className="mt-4 text-2xl font-bold uppercase">{pick(item.title, lang)}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{pick(item.summary, lang)}</p>
          </article>
        ))}

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
        </div>
      </section>

      <p className="mt-10 text-sm text-muted-foreground">
        <Link to="/about" className="text-est-yellow hover:underline">
          {t("nav_about")}
        </Link>{" "}
        ·{" "}
        <Link to="/estufa-radio" className="text-est-yellow hover:underline">
          {t("nav_radio")}
        </Link>
      </p>
    </div>
  );
}

function EventCard({
  event,
  t,
  lang,
}: {
  event: EventItem;
  t: (k: TranslationKey) => string;
  lang: "pt" | "en";
}) {
  return (
    <li className="panel p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="label-mono text-est-yellow">{event.date}</span>
        <span className="label-mono border border-border px-2 py-1">{t(typeKeys[event.type])}</span>
      </div>
      <h3 className="mt-3 text-xl font-bold uppercase">{pick(event.title, lang)}</h3>
      <p className="label-mono mt-2 text-muted-foreground">
        {pick(event.city, lang)}
        {event.venue ? ` · ${event.venue}` : ""}
      </p>
      {event.photos && event.photos.length > 0 && (
        <div
          className={`mt-4 grid gap-2 ${event.photos.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}
        >
          {event.photos.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${pick(event.title, lang)} — foto ${i + 1}`}
              loading="lazy"
              className="aspect-[4/3] w-full border border-border object-cover"
            />
          ))}
        </div>
      )}
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {pick(event.description, lang)}
      </p>
      {event.partners && event.partners.length > 0 && (
        <p className="mt-3 text-sm text-muted-foreground">
          <span className="label-mono text-foreground">·</span> {event.partners.join(" · ")}
        </p>
      )}
      {event.instagramUrl && (
        <a
          href={event.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="label-mono mt-4 inline-flex items-center gap-2 text-est-yellow hover:underline"
        >
          <Instagram className="size-4" aria-hidden="true" />
          {t("events_photos")}
        </a>
      )}
    </li>
  );
}
