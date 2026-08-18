import { createFileRoute } from "@tanstack/react-router";

import { useI18n, pick, type TranslationKey } from "@/lib/i18n";
import { events, type EventItem } from "@/data/estufa";

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Eventos — Estufa Records" },
      {
        name: "description",
        content:
          "Workshops, masterclasses e showcases da Estufa Records — os que já fizemos e os próximos.",
      },
      { property: "og:title", content: "Eventos — Estufa Records" },
      { property: "og:description", content: "Agenda de eventos da Estufa Records." },
    ],
  }),
  component: EventsPage,
});

const typeKeys: Record<EventItem["type"], TranslationKey> = {
  workshop: "events_type_workshop",
  masterclass: "events_type_masterclass",
  showcase: "events_type_showcase",
  party: "events_type_party",
};

function EventsPage() {
  const { t, lang } = useI18n();
  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <p className="label-mono text-est-yellow">{t("events_kicker")}</p>
      <h1 className="mt-3 text-5xl font-bold uppercase sm:text-6xl">{t("events_title")}</h1>
      <div className="rule-primaries mt-6 max-w-md" />
      <p className="mt-6 max-w-xl text-muted-foreground">{t("events_desc")}</p>

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
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {pick(event.description, lang)}
      </p>
      {event.partners && event.partners.length > 0 && (
        <p className="mt-3 text-sm text-muted-foreground">
          <span className="label-mono text-foreground">·</span> {event.partners.join(" · ")}
        </p>
      )}
    </li>
  );
}
