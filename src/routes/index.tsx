import { createFileRoute, Link } from "@tanstack/react-router";

import { CoverArt } from "@/components/CoverArt";
import { ReleasesPanel } from "@/components/ReleasesPanel";
import { CONTACT_EMAIL, releases } from "@/data/estufa";

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
        content: "Releases, artistas, Estufa Radio e envio de demos. House, minimal, electro e techno.",
      },
    ],
  }),
  component: Index,
});

const pages = [
  { to: "/artists", label: "Artists", desc: "Casting da gravadora", color: "bg-est-blue" },
  { to: "/estufa-radio", label: "Estufa Radio", desc: "Mixes e episódios", color: "bg-est-green" },
  { to: "/send-your-music", label: "Send your music", desc: "Envie sua demo", color: "bg-est-yellow" },
] as const;

function Index() {
  const featured = releases.slice(0, 4);

  return (
    <div>
      {/* Hero geométrico no estilo das capas da Estufa */}
      <section className="relative overflow-hidden border-b border-border bg-est-ink">
        <svg
          viewBox="0 0 1200 500"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
        >
          <rect width="1200" height="500" fill="var(--est-ink)" />
          <path d="M0 500 L0 250 L260 120 L520 500Z" fill="var(--est-blue)" />
          <path d="M760 500 L900 140 L1040 500Z" fill="var(--est-green)" />
          <rect x="1000" y="60" width="200" height="200" fill="var(--est-red)" />
          <circle cx="1100" cy="160" r="58" fill="var(--est-yellow)" />
          <path d="M420 500 L700 300 L760 500Z" fill="var(--est-sand)" opacity="0.9" />
          <rect x="300" y="40" width="26" height="460" fill="var(--est-yellow)" />
        </svg>
        <div className="absolute inset-0 bg-est-ink/55" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:py-32">
          <p className="label-mono text-est-yellow">Florianópolis · SC · Brasil</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold uppercase leading-[0.9] sm:text-7xl">
            Estufa de
            <br />
            espécies raras
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg">
            Gravadora independente de música eletrônica que trabalha nos subgêneros{" "}
            <span className="text-est-yellow">house, minimal, electro</span> e{" "}
            <span className="text-est-yellow">techno</span>.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/send-your-music" className="btn-flat bg-est-red text-est-sand">
              Send your music
            </Link>
            <Link to="/artists" className="btn-flat bg-est-sand text-est-ink">
              Artists
            </Link>
            <Link to="/estufa-radio" className="btn-flat bg-est-green text-est-sand">
              Estufa Radio
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1fr_400px]">
        <div className="space-y-12">
          <section>
            <h2 className="label-mono text-est-yellow">Nosso conceito</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed">
              A Estufa é uma gravadora independente de música eletrônica. Ambiente controlado, catálogo
              cultivado com calma: arquitetura, paisagem e cores primárias em cada release.
            </p>
          </section>

          <section>
            <div className="flex items-baseline justify-between">
              <h2 className="text-3xl font-bold uppercase">Destaques</h2>
              <span className="label-mono text-muted-foreground">Estufa Records</span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {featured.map((release) => (
                <article key={release.title} className="panel">
                  <CoverArt
                    variant={release.art}
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

          <section className="grid gap-4 sm:grid-cols-3">
            {pages.map((item) => (
              <Link key={item.to} to={item.to} className="panel group p-5">
                <span className={`block size-8 border border-border ${item.color}`} />
                <span className="label-mono mt-4 block group-hover:text-est-yellow">{item.label}</span>
                <span className="mt-2 block text-sm text-muted-foreground">{item.desc}</span>
              </Link>
            ))}
          </section>

          <section className="panel p-6">
            <h2 className="text-2xl font-bold uppercase">Contato</h2>
            <p className="mt-3 text-sm text-muted-foreground">demos / infos</p>
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
