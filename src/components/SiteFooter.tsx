import { SocialLinks } from "@/components/SocialLinks";
import { CONTACT_EMAIL, socialLinks } from "@/data/estufa";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-card">
      <div className="rule-primaries" />
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3">
          <p className="label-mono text-muted-foreground">Florianópolis · SC · Brasil</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="label-mono text-est-yellow hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
        <SocialLinks links={socialLinks} className="flex flex-wrap gap-2" />
        <p className="label-mono text-muted-foreground">© Estufa Records</p>
      </div>
    </footer>
  );
}
