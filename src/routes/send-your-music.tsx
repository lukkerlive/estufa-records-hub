import { createFileRoute } from "@tanstack/react-router";

import { CONTACT_EMAIL } from "@/data/estufa";

export const Route = createFileRoute("/send-your-music")({
  head: () => ({
    meta: [
      { title: "Send your music — Estufa Records" },
      {
        name: "description",
        content: "Envie sua demo para a Estufa Records: link ou arquivo em wav ou mp3 320 kbps.",
      },
      { property: "og:title", content: "Send your music — Estufa Records" },
      { property: "og:description", content: "Como enviar demos para a Estufa Records." },
    ],
  }),
  component: SendMusicPage,
});

const steps = [
  "Finalize a faixa (mix e master) antes de enviar.",
  "Exporte em wav ou mp3 320 kbps.",
  "Envie link (WeTransfer, Dropbox, SoundCloud privado) ou arquivo por email.",
  "Inclua nome do artista, cidade e uma breve bio.",
];

function SendMusicPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="label-mono text-primary">Demos</p>
      <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Send your music</h1>
      <p className="mt-4 text-muted-foreground">
        Ouvimos tudo que chega, mas respondemos apenas o que se encaixa no catálogo. Retorno em até
        quatro semanas.
      </p>

      <ol className="mt-10 space-y-4">
        {steps.map((step, i) => (
          <li key={step} className="flex gap-4 rounded-lg border border-border bg-card p-5">
            <span className="label-mono text-primary">0{i + 1}</span>
            <span className="text-sm">{step}</span>
          </li>
        ))}
      </ol>

      <div className="glow-ring mt-10 rounded-lg border border-border bg-card p-6 text-center">
        <p className="label-mono text-muted-foreground">Envie para</p>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=Demo`}
          className="mt-2 block text-2xl font-semibold text-primary hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </div>
  );
}
