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
  { color: "bg-est-red", text: "Conclua a criação da faixa antes de enviar para análise." },
  { color: "bg-est-yellow", text: "Exporte em 320 kbps, wav ou mp3." },
  { color: "bg-est-blue", text: "Envie link ou arquivo por email." },
  { color: "bg-est-green", text: "Inclua nome do artista, cidade e uma breve bio." },
];

const faq = [
  { q: "Como devo enviar minha música?", a: `Link ou arquivo, através do email ${CONTACT_EMAIL}.` },
  { q: "Em que formato devo enviar minha música?", a: "320 kbps, wav ou mp3." },
  {
    q: "Se minha música não estiver concluída, devo enviar?",
    a: "Sugerimos que conclua a criação pra depois enviar para análise da gravadora.",
  },
];

function SendMusicPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <p className="label-mono text-est-yellow">Demos</p>
      <h1 className="mt-3 text-5xl font-bold uppercase sm:text-6xl">Send your music</h1>
      <div className="rule-primaries mt-6 max-w-md" />

      <ol className="mt-10 space-y-4">
        {steps.map((step, i) => (
          <li key={step.text} className="panel flex items-center gap-4 p-5">
            <span
              className={`flex size-10 shrink-0 items-center justify-center border border-border text-sm font-bold text-est-ink ${step.color}`}
            >
              0{i + 1}
            </span>
            <span className="text-sm">{step.text}</span>
          </li>
        ))}
      </ol>

      <div className="panel mt-10 p-6 text-center">
        <p className="label-mono text-muted-foreground">demos / infos</p>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=Demo`}
          className="mt-3 block break-all text-2xl font-bold text-est-yellow hover:underline sm:text-3xl"
        >
          {CONTACT_EMAIL}
        </a>
      </div>

      <section className="mt-14">
        <h2 className="text-3xl font-bold uppercase">FAQ</h2>
        <dl className="mt-6 space-y-5">
          {faq.map((item) => (
            <div key={item.q} className="border-l-2 border-est-green pl-4">
              <dt className="font-bold">{item.q}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
