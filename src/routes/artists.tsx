import { createFileRoute } from "@tanstack/react-router";
import { Instagram } from "lucide-react";

import { SocialLinks } from "@/components/SocialLinks";
import { useI18n } from "@/lib/i18n";
import { artists, releases, CONTACT_EMAIL, type SocialLink } from "@/data/estufa";

export const Route = createFileRoute("/artists")({
  head: () => ({
    meta: [
      { title: "Artists — Estufa Records" },
      {
        name: "description",
        content:
          "Artistas da Estufa Records: Noizzed, César Leme, Lapax, Auxtin e outros nomes do catálogo house, minimal, electro e techno.",
      },
      { property: "og:title", content: "Artists — Estufa Records" },
      { property: "og:description", content: "Os artistas do catálogo da Estufa Records." },
    ],
  }),
  component: ArtistsPage,
});

function ArtistsPage() {
  const { t } = useI18n();

  const releaseIndex = new Map(releases.map((r, i) => [r.title, i]));
  const ordered = [...artists].sort((a, b) => {
    const recentA = Math.min(
      ...a.releases.map((title) => releaseIndex.get(title) ?? Number.MAX_SAFE_INTEGER),
    );
    const recentB = Math.min(
      ...b.releases.map((title) => releaseIndex.get(title) ?? Number.MAX_SAFE_INTEGER),
    );
    return recentA - recentB;
  });

  return (
    <div className="mx-auto max-w-7xl px-5 py-14">
      <p className="label-mono text-est-yellow">{t("artists_kicker")}</p>
      <h1 className="mt-3 text-5xl font-bold uppercase sm:text-6xl">{t("artists_title")}</h1>
      <div className="rule-primaries mt-6 max-w-md" />
      <p className="mt-6 max-w-xl text-muted-foreground">{t("artists_desc")}</p>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ordered.map((artist) => {
          const artistLinks = artist.socials
            ? Object.entries(artist.socials)
                .filter((entry): entry is [string, string] => Boolean(entry[1]))
                .map(([platform, href]) => ({
                  label: platform,
                  href,
                  platform: platform as SocialLink["platform"],
                }))
            : [];
          return (
            <li key={artist.name} className="panel overflow-hidden">
              <img
                src={artist.photo}
                alt={`Foto de ${artist.name}`}
                loading="lazy"
                className="block aspect-square w-full object-cover"
              />
              <div className="p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-bold uppercase">{artist.name}</h2>
                  {artist.socials?.instagram && (
                    <a
                      href={artist.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Instagram de ${artist.name}`}
                      className="text-est-yellow transition-colors hover:text-est-red"
                    >
                      <Instagram className="size-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
                {artistLinks.length > 0 && (
                  <SocialLinks
                    links={artistLinks}
                    size="sm"
                    className="mt-3 flex flex-wrap gap-2"
                  />
                )}
                <p className="label-mono mt-4 text-muted-foreground">
                  {t("artists_releases_label")}
                </p>
                <ul className="mt-2 space-y-1 text-sm">
                  {artist.releases.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="mt-10 text-sm text-muted-foreground">
        {t("artists_cta")}{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-est-yellow hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </div>
  );
}
