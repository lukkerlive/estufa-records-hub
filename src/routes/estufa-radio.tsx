import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";

import { CoverArt } from "@/components/CoverArt";
import { radioShows, soundcloudSearchUrl, CONTACT_EMAIL } from "@/data/estufa";

export const Route = createFileRoute("/estufa-radio")({
  head: () => ({
    meta: [
      { title: "Estufa Radio — mixes da gravadora" },
      {
        name: "description",
        content: "Estufa Radio: série de mixes da Estufa Records com residentes e convidados.",
      },
      { property: "og:title", content: "Estufa Radio" },
      { property: "og:description", content: "Série de mixes da Estufa Records." },
    ],
  }),
  component: RadioPage,
});

function soundcloudEmbed(url: string) {
  return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23d9c79a&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&visual=false`;
}

function RadioPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-14">
      <p className="label-mono text-est-yellow">Série de mixes</p>
      <h1 className="mt-3 text-5xl font-bold uppercase sm:text-6xl">Estufa Radio</h1>
      <div className="rule-primaries mt-6 max-w-md" />
      <p className="mt-6 max-w-xl text-muted-foreground">
        Sessões gravadas por residentes e convidados da gravadora. House, minimal, electro e techno.
      </p>

      <ul className="mt-10 grid gap-4 lg:grid-cols-2">
        {radioShows.map((show, i) => (
          <li key={show.episode} className="panel">
            <div className="flex items-stretch">
              <div className="w-24 shrink-0 border-r border-border">
                <CoverArt variant={i + 2} title={show.episode} className="block h-full w-full" />
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
                  src={soundcloudEmbed(show.soundcloudUrl)}
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
                  Ouvir no SoundCloud <ExternalLink className="size-3" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm text-muted-foreground">
        Quer apresentar um episódio? Escreva para{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-est-yellow hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </div>
  );
}
