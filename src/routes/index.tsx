import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Newspaper, Radio, Send, Users } from "lucide-react";

import bgAsset from "@/assets/estufa-bg.webp.asset.json";
import logoRedAsset from "@/assets/estufa-logo-red.jpg.asset.json";
import { CoverArt } from "@/components/CoverArt";
import { SocialLinks } from "@/components/SocialLinks";
import { useI18n, type TranslationKey } from "@/lib/i18n";
import {
  CONTACT_EMAIL,
  SPOTIFY_PLAYLIST_ID,
  beatportUrl,
  releases,
  socialLinks,
  spotifyUrl,
} from "@/data/estufa";

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

  const coverRow = (dup: number, ariaHidden: boolean) => (
    <div key={dup} aria-hidden={ariaHidden} className="flex shrink-0">
      {releases.map((release) => (
        <div key={`${dup}-${release.title}`} className="w-56 shrink-0 pr-4 sm:w-64">
          <a
            href={beatportUrl(release) ?? spotifyUrl(release)}
            target="_blank"
            rel="noreferrer"
            className="group block border border-border bg-card transition-colors hover:bg-secondary"
          >
            <CoverArt
              variant={release.art}
              cover={release.cover}
              title={release.title}
              artists={release.artists}
              className="block w-full border-b border-border"
            />
            <div className="p-2.5">
              <p className="truncate text-xs font-bold uppercase group-hover:text-est-yellow">
                {release.title}
              </p>
              <p className="truncate text-[11px] text-muted-foreground">{release.artists}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );

  const embed = `https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}?utm_source=generator&theme=0`;

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

      {/* Capas dos releases grandes, rodando em carrossel horizontal */}
      <section className="border-b border-border bg-est-ink">
        <div className="mx-auto flex max-w-7xl flex-wrap items-baseline justify-between gap-2 px-5 pt-8">
          <h2 className="text-3xl font-bold uppercase text-est-sand">{t("releases_label")}</h2>
          <span className="label-mono text-est-sand">{t("brand")}</span>
        </div>
        <div className="mt-6 overflow-hidden border-t border-border py-8">
          <div className="marquee-track flex w-max">
            {coverRow(0, false)}
            {coverRow(1, true)}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-12 px-5 py-14">
        <section>
          <h2 className="label-mono text-est-yellow">{t("concept_label")}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed">{t("concept_text")}</p>
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
                <span className="mt-2 block text-sm text-muted-foreground">{t(item.descKey)}</span>
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

      {/* Playlist oficial, na base da home perto do rodapé */}
      <section className="border-t border-border bg-est-ink py-14">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-3xl font-bold uppercase text-est-sand">{t("playlist_label")}</h2>
            <span className="label-mono text-est-sand">{t("playlist_sub")}</span>
          </div>
          <div className="rule-primaries mt-4 max-w-md" />
          <iframe
            title="Estufa Records — playlist oficial"
            src={embed}
            width="100%"
            height="352"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="mt-6 block w-full border border-border"
          />
        </div>
      </section>
    </div>
  );
}
