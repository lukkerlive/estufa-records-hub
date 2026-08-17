import { createFileRoute } from "@tanstack/react-router";

import { radioShows, CONTACT_EMAIL } from "@/data/estufa";

export const Route = createFileRoute("/estufa-radio")({
  head: () => ({
    meta: [
      { title: "Estufa Radio — mixes e episódios" },
      {
        name: "description",
        content: "Estufa Radio: série de mixes da gravadora com residentes e convidados.",
      },
      { property: "og:title", content: "Estufa Radio" },
      { property: "og:description", content: "Série de mixes da Estufa Records." },
    ],
  }),
  component: RadioPage,
});

function RadioPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16">
      <p className="label-mono text-primary">Série de mixes</p>
      <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Estufa Radio</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Sessões gravadas por residentes e convidados. Um episódio novo sempre que a estufa aquece.
      </p>

      <ul className="mt-10 divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
        {radioShows.map((show) => (
          <li key={show.episode} className="flex flex-wrap items-center gap-3 p-5">
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-medium">{show.episode}</h2>
              <p className="text-sm text-muted-foreground">
                {show.host} · {show.focus}
              </p>
            </div>
            <span className="label-mono text-primary">{show.duration}</span>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-sm text-muted-foreground">
        Quer apresentar um episódio? Escreva para{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </div>
  );
}
