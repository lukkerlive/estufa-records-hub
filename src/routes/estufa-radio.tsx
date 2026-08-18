import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";

import { BeatportIcon } from "@/components/BeatportIcon";
import { CoverArt } from "@/components/CoverArt";
import { soundcloudEmbedUrl } from "@/lib/soundcloud";
import { useI18n } from "@/lib/i18n";
import {
  beatportUrl,
  releases,
  radioShows,
  soundcloudSearchUrl,
  spotifyEmbedUrl,
  spotifyUrl,
  CONTACT_EMAIL,
} from "@/data/estufa";

export const Route = createFileRoute("/estufa-radio")({
  head: () => ({
    meta: [
      { title: "Estufa Radio — mixes da gravadora" },
      {
        name: "description",
        content:
          "Estufa Radio: série de mixes da Estufa Records com residentes e convidados, além dos lançamentos oficiais.",
      },
      { property: "og:title", content: "Estufa Radio" },
      { property: "og:description", content: "Série de mixes e lançamentos da Estufa Records." },
    ],
  }),
  component: RadioPage,
});

function RadioPage() {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-7xl px-5 py-14">
      <p className="label-mono text-est-yellow">{t("radio_kicker")}</p>
      <h1 className="mt-3 text-5xl font-bold uppercase sm:text-6xl">{t("radio_title")}</h1>
      <div className="rule-primaries mt-6 max-w-md" />
      <p className="mt-6 max-w-xl text-muted-foreground">{t("radio_desc")}</p>

      <section className="mt-10">
        <h2 className="label-mono text-est-red">{t("radio_sets")}</h2>
        <ul className="mt-4 grid gap-4 lg:grid-cols-2">
          {radioShows.map((show) => (
            <li key={show.episode} className="panel">
              <div className="flex items-stretch">
                <div className="w-24 shrink-0 border-r border-border">
                  <CoverArt
                    variant={1}
                    cover={show.cover}
                    title={show.episode}
                    className="block h-full w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-1 p-5">
                  <h2 className="text-lg font-bold uppercase">{show.episode}</h2>
                  <p className="text-sm text-muted-foreground">{show.host}</p>
                  <p className="label-mono mt-2 text-est-yellow">
                    {show.focus} · {show.duration}
                  </p>
                </div>
              </div>
              <div className="border-t border-border p-4">
                {show.soundcloudUrl ? (
                  <iframe
                    title={`SoundCloud — ${show.episode}`}
                    src={soundcloudEmbedUrl(show.soundcloudUrl)}
                    width="100%"
                    height="120"
                    loading="lazy"
                    allow="autoplay"
                    className="block w-full border border-border"
                  />
                ) : (
                  <a
                    href={soundcloudSearchUrl(show)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-flat w-full justify-center bg-est-red text-est-sand"
                  >
                    {t("radio_listen")} <ExternalLink className="size-3" />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Lançamentos oficiais com capas + player Spotify quando disponível */}
      <section className="mt-14">
        <h2 className="label-mono text-est-red">{t("radio_releases")}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {releases.map((release) => (
            <article key={`${release.title}-${release.catalog}`} className="panel overflow-hidden">
              <CoverArt
                variant={release.art}
                cover={release.cover}
                title={release.title}
                artists={release.artists}
                className="block w-full border-b border-border"
              />
              <div className="p-4">
                <h3 className="truncate text-sm font-bold uppercase">{release.title}</h3>
                <p className="truncate text-xs text-muted-foreground">{release.artists}</p>
                <div className="mt-3 flex gap-2">
                  <a
                    href={spotifyUrl(release)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-flat flex-1 justify-center bg-est-green text-est-sand"
                  >
                    Spotify <ExternalLink className="size-3" />
                  </a>
                  <a
                    href={beatportUrl(release)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-flat flex-1 justify-center bg-est-yellow text-est-ink"
                  >
                    <BeatportIcon className="size-4" /> Beatport
                  </a>
                </div>
              </div>
              {spotifyEmbedUrl(release) && (
                <div className="border-t border-border p-4">
                  <iframe
                    title={`Spotify — ${release.title}`}
                    src={spotifyEmbedUrl(release)!}
                    width="100%"
                    height={
                      release.spotifyType === "album" || release.spotifyType === "playlist"
                        ? 152
                        : 80
                    }
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    className="block w-full border border-border"
                  />
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <p className="mt-10 text-sm text-muted-foreground">
        {t("radio_host_cta")}{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-est-yellow hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </div>
  );
}
