import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useI18n } from "@/lib/i18n";
import { CONTACT_EMAIL } from "@/data/estufa";

export const Route = createFileRoute("/send-your-music")({
  head: () => ({
    meta: [
      { title: "Send your music — Estufa Records" },
      {
        name: "description",
        content: "Envie sua demo para a Estufa Records: link privado em wav ou mp3 320 kbps.",
      },
      { property: "og:title", content: "Send your music — Estufa Records" },
      { property: "og:description", content: "Como enviar demos para a Estufa Records." },
    ],
  }),
  component: SendMusicPage,
});

const faq = {
  pt: [
    {
      q: "Como devo enviar minha música?",
      a: "Envie um link privado para ouvir (SoundCloud, Dropbox ou WeTransfer) através do formulário ou do email. Não enviamos anexos por email.",
    },
    {
      q: "Em que formato devo enviar?",
      a: "Preferimos 320 kbps (mp3) ou WAV. Após a seleção, pediremos o arquivo final com a melhor qualidade.",
    },
    {
      q: "A faixa precisa estar concluída?",
      a: "Sim. Enviamos apenas demos finais — sem WIPs, loops ou rascunhos. A faixa deve estar completamente arranjada, mixada e pré-masterizada.",
    },
    {
      q: "A faixa pode já estar lançada ou enviada a outras gravadoras?",
      a: "Não. Oferecemos seleção de faixas originais, inéditas e em exclusividade para a Estufa. Se não houver resposta em 2 a 4 semanas, você fica livre para enviar a outros selos.",
    },
    {
      q: "Em quanto tempo respondem?",
      a: "Normalmente respondemos em até 2 a 4 semanas. Se não houver interesse, nem sempre é possível responder a cada envio — mas ouvimos tudo.",
    },
    {
      q: "Aceitam bootlegs, mashups ou remixes com samples?",
      a: "Não. Apenas trabalho 100% original e sem samples não autorizados — você precisa ter todos os direitos sobre a faixa.",
    },
    {
      q: "Quantas faixas posso enviar?",
      a: "De 1 a 2 por vez. Enviar muitas faixas de uma só vez costuma fazer sua demo ser ignorada.",
    },
    {
      q: "Meu gênero se encaixa na Estufa?",
      a: "Trabalhamos com house, minimal, electro e techno. Estude nosso catálogo antes de enviar e veja se sua música conversa com o som da estufa.",
    },
  ],
  en: [
    {
      q: "How should I send my music?",
      a: "Send a private streaming link (SoundCloud, Dropbox or WeTransfer) through the form or email. We don't accept email attachments.",
    },
    {
      q: "What format should I send?",
      a: "We prefer 320 kbps (mp3) or WAV. After selection, we'll ask for the final file at the highest quality.",
    },
    {
      q: "Does the track need to be finished?",
      a: "Yes. We only consider finished demos — no WIPs, loops or sketches. The track must be fully arranged, mixed and pre-mastered.",
    },
    {
      q: "Can the track already be released or sent to other labels?",
      a: "No. We select original, unreleased tracks offered exclusively to Estufa. If there's no reply within 2 to 4 weeks, you're free to send it elsewhere.",
    },
    {
      q: "How long until I hear back?",
      a: "We usually reply within 2 to 4 weeks. If we're not interested, we can't always answer every submission — but we listen to everything.",
    },
    {
      q: "Do you accept bootlegs, mashups or sampled remixes?",
      a: "No. Only 100% original work with no unauthorized samples — you must own all rights to the track.",
    },
    {
      q: "How many tracks can I send?",
      a: "One or two at a time. Sending many tracks at once is a sure way to get your demo overlooked.",
    },
    {
      q: "Does my genre fit Estufa?",
      a: "We work with house, minimal, electro and techno. Study our catalog first to see if your music speaks the greenhouse's language.",
    },
  ],
} as const;

const steps = [
  { key: "send_step_1" as const, color: "bg-est-red" },
  { key: "send_step_2" as const, color: "bg-est-yellow" },
  { key: "send_step_3" as const, color: "bg-est-blue" },
  { key: "send_step_4" as const, color: "bg-est-green" },
];

const schema = z.object({
  name: z.string().min(1),
  email: z.string().min(1).email(),
  city: z.string().optional(),
  genre: z.string().optional(),
  social: z.string().optional(),
  message: z.string().optional(),
  exclusive: z.boolean().refine((v) => v === true),
});

type FormValues = z.infer<typeof schema>;

function DemoForm() {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { exclusive: false } });

  const onSubmit = async (values: FormValues) => {
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/estufarec@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Demo — ${values.name}`,
          _template: "table",
          name: values.name,
          email: values.email,
          city: values.city ?? "",
          genre: values.genre ?? "",
          link: values.social ?? "",
          message: values.message ?? "",
          exclusive: values.exclusive ? "sim" : "não",
        }),
      });
      const data = await res.json();
      if (data.success === "true" || data.success === true) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const input =
    "w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="label-mono text-muted-foreground">{t("send_form_name")}</span>
          <input {...register("name")} className={`mt-2 ${input}`} />
          {errors.name && <span className="mt-1 block text-xs text-est-red">*</span>}
        </label>
        <label className="block">
          <span className="label-mono text-muted-foreground">{t("send_form_email")}</span>
          <input type="email" {...register("email")} className={`mt-2 ${input}`} />
          {errors.email && <span className="mt-1 block text-xs text-est-red">*</span>}
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="label-mono text-muted-foreground">{t("send_form_city")}</span>
          <input {...register("city")} className={`mt-2 ${input}`} />
        </label>
        <label className="block">
          <span className="label-mono text-muted-foreground">{t("send_form_genre")}</span>
          <input {...register("genre")} className={`mt-2 ${input}`} placeholder="house, techno…" />
        </label>
      </div>
      <label className="block">
        <span className="label-mono text-muted-foreground">{t("send_form_social")}</span>
        <input
          {...register("social")}
          className={`mt-2 ${input}`}
          placeholder={t("send_form_social_placeholder")}
        />
      </label>
      <label className="block">
        <span className="label-mono text-muted-foreground">{t("send_form_message")}</span>
        <textarea {...register("message")} rows={4} className={`mt-2 ${input}`} />
      </label>
      <label className="flex items-start gap-3 text-sm">
        <input type="checkbox" {...register("exclusive")} className="mt-1 size-4" />
        <span>{t("send_form_consent_exclusive")}</span>
      </label>
      {errors.exclusive && (
        <p className="text-xs text-est-red">* {t("send_form_consent_exclusive")}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-flat w-full justify-center bg-est-red text-est-sand disabled:opacity-50"
      >
        {status === "sending" ? t("send_form_sending") : t("send_form_submit")}
      </button>

      {status === "success" && (
        <p className="border border-est-green p-3 text-sm text-est-green">
          {t("send_form_success_title")} {t("send_form_success_body")}
        </p>
      )}
      {status === "error" && (
        <p className="border border-est-red p-3 text-sm text-est-red">{t("send_form_error")}</p>
      )}
    </form>
  );
}

function SendMusicPage() {
  const { t, lang } = useI18n();

  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <p className="label-mono text-est-yellow">{t("send_kicker")}</p>
      <h1 className="mt-3 text-5xl font-bold uppercase sm:text-6xl">{t("send_title")}</h1>
      <div className="rule-primaries mt-6 max-w-md" />
      <p className="mt-6 max-w-xl text-muted-foreground">{t("send_subtitle")}</p>

      <section className="mt-10">
        <h2 className="label-mono text-est-red">{t("send_steps_title")}</h2>
        <ol className="mt-4 space-y-4">
          {steps.map((step, i) => (
            <li key={step.key} className="panel flex items-center gap-4 p-5">
              <span
                className={`flex size-10 shrink-0 items-center justify-center border border-border text-sm font-bold text-est-ink ${step.color}`}
              >
                0{i + 1}
              </span>
              <span className="text-sm">{t(step.key)}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="panel mt-10 p-6">
        <h2 className="text-2xl font-bold uppercase">{t("send_form_title")}</h2>
        <DemoForm />
      </section>

      <div className="panel mt-6 p-6 text-center">
        <p className="label-mono text-muted-foreground">{t("contact_sub")}</p>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=Demo`}
          className="mt-3 block break-all text-2xl font-bold text-est-yellow hover:underline sm:text-3xl"
        >
          {CONTACT_EMAIL}
        </a>
      </div>

      <section className="mt-14">
        <h2 className="text-3xl font-bold uppercase">{t("send_faq_title")}</h2>
        <dl className="mt-6 space-y-5">
          {faq[lang].map((item) => (
            <details key={item.q} className="border-l-2 border-est-red pl-4">
              <summary className="cursor-pointer font-bold">{item.q}</summary>
              <dd className="mt-2 text-sm text-muted-foreground">{item.a}</dd>
            </details>
          ))}
        </dl>
      </section>
    </div>
  );
}
