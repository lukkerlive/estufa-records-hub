import { releases } from "@/data/estufa";

export function ReleasesPanel() {
  return (
    <aside className="glow-ring rounded-lg border border-border bg-card p-5 lg:sticky lg:top-24">
      <div className="flex items-baseline justify-between border-b border-border pb-3">
        <h2 className="text-xl font-semibold">Releases</h2>
        <span className="label-mono text-primary">catálogo</span>
      </div>
      <ol className="mt-2 divide-y divide-border/70">
        {releases.map((release) => (
          <li key={release.catalog}>
            <a
              href={`mailto:estufarec@gmail.com?subject=${release.catalog}`}
              className="flex items-center gap-4 py-3 transition-colors hover:bg-secondary/60"
            >
              <span className="label-mono w-14 shrink-0 text-primary">{release.catalog}</span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium">{release.title}</span>
                <span className="block truncate text-xs text-muted-foreground">
                  {release.artist} · {release.genre}
                </span>
              </span>
              <span className="label-mono text-muted-foreground">{release.year}</span>
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}
