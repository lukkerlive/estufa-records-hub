import { createFileRoute } from "@tanstack/react-router";

import { artists } from "@/data/estufa";

export const Route = createFileRoute("/artists")({
  head: () => ({
    meta: [
      { title: "Artists — Estufa Records" },
      {
        name: "description",
        content: "Os artistas da Estufa Records: house, minimal, electro e techno do Brasil.",
      },
      { property: "og:title", content: "Artists — Estufa Records" },
      { property: "og:description", content: "Casting da gravadora Estufa Records." },
    ],
  }),
  component: ArtistsPage,
});

function ArtistsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16">
      <p className="label-mono text-primary">Casting</p>
      <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Artists</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Espécies raras cultivadas na estufa — produtores e DJs do catálogo.
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {artists.map((artist) => (
          <li
            key={artist.name}
            className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary"
          >
            <h2 className="text-lg font-semibold">{artist.name}</h2>
            <p className="label-mono mt-1 text-primary">{artist.style}</p>
            <p className="mt-3 text-sm text-muted-foreground">{artist.bio}</p>
            <p className="label-mono mt-4 text-muted-foreground">{artist.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
