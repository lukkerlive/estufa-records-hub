import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";

import { useI18n, pick } from "@/lib/i18n";
import { about, PITCH_URL } from "@/data/estufa";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Estufa Records" },
      {
        name: "description",
        content:
          "Estufa Records: gravadora independente de música eletrônica fundada em 2018 em Florianópolis. Conheça nossa história, quem somos e nosso pitch.",
      },
      { property: "og:title", content: "About — Estufa Records" },
      { property: "og:description", content: "História e quem somos da Estufa Records." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t, lang } = useI18n();

  return (
    <div className="mx-auto max-w-4xl px-5 py-14">
      <p className="label-mono text-est-yellow">{t("about_kicker")}</p>
      <h1 className="mt-3 text-5xl font-bold uppercase sm:text-6xl">{t("about_title")}</h1>
      <div className="rule-primaries mt-6 max-w-md" />

      <section className="mt-10">
        <h2 className="label-mono text-est-red">{t("about_who_label")}</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed">{pick(about.intro, lang)}</p>
      </section>

      <section className="panel mt-10 grid gap-6 p-6 sm:grid-cols-2">
        <div>
          <p className="label-mono text-muted-foreground">Estufa Records</p>
          <p className="mt-2 text-3xl font-bold uppercase">{about.founded}</p>
          <p className="label-mono mt-2 text-est-yellow">{pick(about.origin, lang)}</p>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <p className="label-mono text-muted-foreground">{t("about_history_label")}</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {pick(about.history, lang)}
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="label-mono text-est-red">{t("about_pillars_label")}</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {about.pillars.map((pillar) => (
            <div key={pillar.title.pt} className="panel p-5">
              <h3 className="text-lg font-bold uppercase">{pick(pillar.title, lang)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{pick(pillar.text, lang)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="panel mt-10 flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="label-mono text-est-red">Pitch Estufa Rec</p>
          <p className="mt-2 text-sm text-muted-foreground">{pick(about.pitchLabel, lang)}</p>
        </div>
        <a
          href={PITCH_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-flat bg-est-red text-est-sand"
        >
          {t("about_pitch_cta")} <ExternalLink className="size-3" />
        </a>
      </section>

      <p className="mt-10 text-sm text-muted-foreground">
        <Link to="/artists" className="text-est-yellow hover:underline">
          {t("nav_artists")}
        </Link>{" "}
        ·{" "}
        <Link to="/cena" className="text-est-yellow hover:underline">
          {t("nav_cena")}
        </Link>
      </p>
    </div>
  );
}
