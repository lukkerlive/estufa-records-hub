import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home", color: "hover:bg-est-red hover:text-est-sand" },
  { to: "/artists", label: "Artists", color: "hover:bg-est-blue hover:text-est-sand" },
  { to: "/estufa-radio", label: "Estufa Radio", color: "hover:bg-est-green hover:text-est-sand" },
  { to: "/send-your-music", label: "Send your music", color: "hover:bg-est-yellow hover:text-est-ink" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="rule-primaries" />
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid size-8 shrink-0 grid-cols-2 grid-rows-2 border border-border">
            <span className="bg-est-red" />
            <span className="bg-est-yellow" />
            <span className="bg-est-blue" />
            <span className="bg-est-green" />
          </span>
          <span className="text-xl font-bold uppercase leading-none tracking-tight">
            Estufa <span className="text-est-yellow">Records</span>
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-2">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className={`label-mono border border-border px-3 py-2 transition-colors ${item.color}`}
              activeProps={{ className: "bg-foreground text-est-ink" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
