import { createFileRoute } from "@tanstack/react-router";

import { artists, CONTACT_EMAIL } from "@/data/estufa";

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

const colors = ["bg-est-red", "bg-est-blue", "bg-est-yellow", "bg-est-green"];

function ArtistsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-14">
      <p className="label-mono text-est-yellow">Casting</p>
      <h1 className="mt-3 text-5xl font-bold uppercase sm:text-6xl">Artists</h1>
      <div className="rule-primaries mt-6 max-w-md" />
      <p className="mt-6 max-w-xl text-muted-foreground">
        Espécies raras cultivadas na estufa — produtores e DJs presentes no catálogo da gravadora.
      </p>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {artists.map((artist, i) => (
          <li key={artist.name} className="panel p-5">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-xl font-bold uppercase">{artist.name}</h2>
              <span className={`size-6 shrink-0 border-2 border-foreground ${colors[i % colors.length]}`} />
            </div>
            <p className="label-mono mt-4 text-muted-foreground">Releases</p>
            <ul className="mt-2 space-y-1 text-sm">
              {artist.releases.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm text-muted-foreground">
        Quer fazer parte do casting? Envie sua demo para{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-est-yellow hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </div>
  );
}
