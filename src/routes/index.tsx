import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Newspaper, Radio, Send, Users } from "lucide-react";

import bgAsset from "@/assets/estufa-bg.webp.asset.json";
import logoRedAsset from "@/assets/estufa-logo-red.jpg.asset.json";
import { CoverArt } from "@/components/CoverArt";
import { ReleasesPanel } from "@/components/ReleasesPanel";
import { SocialLinks } from "@/components/SocialLinks";
import { useI18n, type TranslationKey } from "@/lib/i18n";
import { CONTACT_EMAIL, releases, socialLinks } from "@/data/estufa";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Estufa Records — house, minimal, electro, techno" },
      {
        name: "description",
        content:
          "Estufa Records: gravadora independente de música eletrônica de Florianópolis, nos subgêneros house, minimal, electro e techno.",
      },
      { property: "og:title", content: "Estufa Records — gravadora independente" },
      {
        property: "og:description",
        content:
          "Releases, artistas, Estufa Radio, eventos e envio de demos. House, minimal, electro e techno.",
      },
    ],
  }),
  component: Index,
});

const pages: {
  to: string;
  labelKey: TranslationKey;
  descKey: TranslationKey;
  icon: typeof Users;
}[] = [
  { to: "/artists", labelKey: "nav_artists", descKey: "pages_artists_desc", icon: Users },
  { to: "/estufa-radio", labelKey: "nav_radio", descKey: "pages_radio_desc", icon: Radio },
  { to: "/eventos", labelKey: "nav_events", descKey: "pages_events_desc", icon: CalendarDays },
  { to: "/send-your-music", labelKey: "nav_send", descKey: "pages_send_desc", icon: Send },
  { to: "/news", labelKey: "nav_news", descKey: "pages_news_desc", icon: Newspaper },
];

function Index() {
  const { t } = useI18n();
  const featured = releases.slice(0, 4);

  return (
    <div>
      {/* Hero com a arte oficial da Estufa Records */}
      <section className="relative overflow-hidden border-b border-border bg-est-ink">
        <img
          src={bgAsset.url}
          alt="Arte geométrica da Estufa Records: volumes vermelho, verde e amarelo sob céu azul"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-est-ink/45" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 sm:py-28 lg:flex-row lg:items-center">
          <div className="flex-1">
            <p className="label-mono text-est-sand">{t("hero_city")}</p>
            <h1 className="mt-4 max-w-2xl text-5xl font-bold uppercase leading-[0.9] text-est-sand sm:text-7xl">
              {t("hero_title_a")}
              <br />
              {t("hero_title_b")}
            </h1>
            <p className="mt-6 max-w-xl text-base text-est-sand sm:text-lg">{t("hero_subtitle")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/send-your-music" className="btn-flat bg-est-red text-est-sand">
                {t("hero_cta_send")}
              </Link>
              <Link to="/artists" className="btn-flat bg-est-sand text-est-ink">
                {t("hero_cta_artists")}
              </Link>
              <Link to="/estufa-radio" className="btn-flat bg-est-green text-est-sand">
                {t("hero_cta_radio")}
              </Link>
            </div>
            <SocialLinks
              links={socialLinks}
              className="mt-10 flex flex-wrap gap-2"
              iconClassName="size-4"
            />
          </div>
          <img
            src={logoRedAsset.url}
            alt="Logo da Estufa Records"
            width={320}
            height={320}
            className="w-40 self-start border border-border sm:w-56 lg:w-72"
          />
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1fr_400px]">
        <div className="space-y-12">
          <section>
            <h2 className="label-mono text-est-yellow">{t("concept_label")}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed">{t("concept_text")}</p>
          </section>

          <section>
            <div className="flex items-baseline justify-between">
              <h2 className="text-3xl font-bold uppercase">{t("featured_label")}</h2>
              <span className="label-mono text-muted-foreground">{t("brand")}</span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {featured.map((release) => (
                <article key={release.title} className="panel">
                  <CoverArt
                    variant={release.art}
                    cover={release.cover}
                    title={release.title}
                    artists={release.artists}
                    className="block w-full border-b border-border"
                  />
                  <div className="p-3">
                    <h3 className="truncate text-sm font-bold uppercase">{release.title}</h3>
                    <p className="truncate text-xs text-muted-foreground">{release.artists}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pages.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.to} to={item.to} className="panel group p-5">
                  <span className="flex size-8 items-center justify-center border border-border text-est-red">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="label-mono mt-4 block group-hover:text-est-yellow">
                    {t(item.labelKey)}
                  </span>
                  <span className="mt-2 block text-sm text-muted-foreground">
                    {t(item.descKey)}
                  </span>
                </Link>
              );
            })}
          </section>

          <section className="panel p-6">
            <h2 className="text-2xl font-bold uppercase">{t("contact_label")}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{t("contact_sub")}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-2 block break-all text-xl font-bold text-est-yellow hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </section>
        </div>

        <ReleasesPanel />
      </div>
    </div>
  );
}
