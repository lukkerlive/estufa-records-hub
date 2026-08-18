import { Link } from "@tanstack/react-router";

import { SocialLinks } from "@/components/SocialLinks";
import { useI18n, type TranslationKey } from "@/lib/i18n";
import { CONTACT_EMAIL, socialLinks } from "@/data/estufa";

const involved: { to: string; labelKey: TranslationKey }[] = [
  { to: "/send-your-music", labelKey: "nav_send" },
  { to: "/eventos", labelKey: "nav_events" },
  { to: "/artists", labelKey: "nav_artists" },
  { to: "/news", labelKey: "nav_news" },
];

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="mt-16 border-t border-border bg-card">
      <div className="rule-primaries" />
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-3">
        <div className="flex flex-col gap-3">
          <p className="label-mono text-muted-foreground">Estufa Records</p>
          <p className="label-mono text-muted-foreground">Florianópolis · SC · Brasil</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="label-mono text-est-yellow hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <p className="label-mono text-est-red">Get Involved</p>
          {involved.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="label-mono text-muted-foreground hover:text-foreground"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <p className="label-mono text-est-red">Ouça / Listen</p>
          <SocialLinks links={socialLinks} className="flex flex-wrap gap-2" />
        </div>
      </div>
      <div className="border-t border-border px-5 py-4 text-center">
        <p className="label-mono text-muted-foreground">© Estufa Records</p>
      </div>
    </footer>
  );
}
