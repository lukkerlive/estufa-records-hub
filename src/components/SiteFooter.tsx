import { CONTACT_EMAIL } from "@/data/estufa";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-card">
      <div className="rule-primaries" />
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="label-mono text-muted-foreground">Florianópolis · SC · Brasil</p>
        <a href={`mailto:${CONTACT_EMAIL}`} className="label-mono text-est-yellow hover:underline">
          {CONTACT_EMAIL}
        </a>
        <p className="label-mono text-muted-foreground">© Estufa Records</p>
      </div>
    </footer>
  );
}
