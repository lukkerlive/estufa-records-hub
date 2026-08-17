import { createFileRoute, Link } from "@tanstack/react-router";

import heroImage from "@/assets/estufa-hero.jpg";
import { ReleasesPanel } from "@/components/ReleasesPanel";
import { CONTACT_EMAIL } from "@/data/estufa";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Estufa Records — house, minimal, electro, techno" },
      {
        name: "description",
        content:
          "Estufa Records é uma gravadora independente de música eletrônica de Florianópolis: house, minimal, electro e techno.",
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

const links = [
  { to: "/artists", label: "Artists", desc: "Espécies raras do casting" },
  { to: "/estufa-radio", label: "Estufa Radio", desc: "Mixes e episódios" },
  { to: "/send-your-music", label: "Send your music", desc: "Envie sua demo" },
] as const;

function Index() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={heroImage}
          alt="Estufa industrial à noite com plantas em silhueta e luz verde"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="fog-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:py-32">
          <p className="label-mono text-primary">Florianópolis · desde 2018</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.95] sm:text-7xl">
            Estufa de
            <br />
            espécies raras
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Gravadora independente de música eletrônica trabalhando nos subgêneros house, minimal,
            electro e techno.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/send-your-music"
              className="label-mono rounded-sm bg-primary px-5 py-3 text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send your music
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="label-mono rounded-sm border border-border px-5 py-3 text-foreground transition-colors hover:bg-secondary"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_380px]">
        <div className="space-y-10">
          <section>
            <h2 className="label-mono text-primary">Nosso conceito</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A Estufa cultiva som em ambiente controlado: cada release nasce de um processo lento,
              com foco em texturas úmidas, grooves longos e maquinário analógico. Um catálogo pequeno
              e cuidado, feito para pistas escuras.
            </p>
          </section>

          <section className="grid gap-4 sm:grid-cols-3">
            {links.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary"
              >
                <span className="label-mono text-muted-foreground group-hover:text-primary">
                  {item.label}
                </span>
                <span className="mt-3 block text-sm text-muted-foreground">{item.desc}</span>
              </Link>
            ))}
          </section>

          <section className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-2xl font-semibold">FAQ</h2>
            <dl className="mt-5 space-y-5 text-sm">
              <div>
                <dt className="font-medium">Como devo enviar minha música?</dt>
                <dd className="mt-1 text-muted-foreground">
                  Link ou arquivo, através do email {CONTACT_EMAIL}.
                </dd>
              </div>
              <div>
                <dt className="font-medium">Em que formato?</dt>
                <dd className="mt-1 text-muted-foreground">320 kbps, wav ou mp3.</dd>
              </div>
              <div>
                <dt className="font-medium">Se minha música não estiver concluída, devo enviar?</dt>
                <dd className="mt-1 text-muted-foreground">
                  Sugerimos concluir a criação antes de enviar para análise da gravadora.
                </dd>
              </div>
            </dl>
          </section>
        </div>

        <ReleasesPanel />
      </div>
    </div>
  );
}
