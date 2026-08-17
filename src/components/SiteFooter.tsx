import { CONTACT_EMAIL } from "@/data/estufa";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p className="label-mono">Florianópolis · SC · Brasil</p>
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
          {CONTACT_EMAIL}
        </a>
        <p className="label-mono">© Estufa Records</p>
      </div>
    </footer>
  );
}
