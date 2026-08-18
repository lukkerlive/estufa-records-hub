import { CoverArt } from "@/components/CoverArt";
import { releases } from "@/data/estufa";

const swatches = ["bg-est-red", "bg-est-yellow", "bg-est-blue", "bg-est-green"];

export function ReleasesPanel() {
  return (
    <aside className="panel lg:sticky lg:top-24">
      <div className="rule-primaries" />
      <div className="flex items-baseline justify-between border-b border-border px-5 py-4">
        <h2 className="text-2xl font-bold uppercase tracking-tight">Releases</h2>
        <span className="label-mono text-est-yellow">Últimos lançamentos</span>
      </div>
      <ol className="max-h-[36rem] divide-y divide-border overflow-y-auto">
        {releases.map((release, i) => (
          <li key={`${release.title}-${i}`}>
            <a
              href={`mailto:estufarec@gmail.com?subject=${encodeURIComponent(release.title)}`}
              className="group flex items-center gap-4 px-4 py-3 transition-colors hover:bg-secondary"
            >
              <span className="w-14 shrink-0 border border-border">
                <CoverArt
                  variant={release.art}
                  title={release.title}
                  artists={release.artists}
                  className="block h-full w-full"
                />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-bold uppercase">{release.title}</span>
                <span className="block truncate text-xs text-muted-foreground">{release.artists}</span>
              </span>
              <span
                className={`size-3 shrink-0 ${swatches[i % swatches.length]} opacity-70 transition-opacity group-hover:opacity-100`}
              />
            </a>
          </li>
        ))}
      </ol>
      <div className="border-t border-border px-5 py-3">
        <span className="label-mono text-muted-foreground">Estufa Records</span>
      </div>
    </aside>
  );
}
