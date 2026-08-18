import { useState } from "react";
import { ExternalLink } from "lucide-react";

import { BeatportIcon } from "@/components/BeatportIcon";
import { CoverArt } from "@/components/CoverArt";
import { beatportUrl, releases, spotifySearchUrl } from "@/data/estufa";

const swatches = ["bg-est-red", "bg-est-yellow", "bg-est-blue", "bg-est-green"];

export function ReleasesPanel() {
  const [selected, setSelected] = useState(0);
  const release = releases[selected] ?? releases[0]!;
  const embed = release.spotifyId
    ? `https://open.spotify.com/embed/${release.spotifyType ?? "track"}/${release.spotifyId}?theme=0`
    : null;


  return (
    <aside className="panel lg:sticky lg:top-24">
      <div className="rule-primaries" />
      <div className="flex items-baseline justify-between border-b border-border px-5 py-4">
        <h2 className="text-2xl font-bold uppercase tracking-tight">Releases</h2>
        <span className="label-mono text-est-yellow">Últimos lançamentos</span>
      </div>

      {/* Player + compra do release selecionado */}
      <div className="border-b border-border p-4">
        {embed ? (
          <iframe
            title={`Spotify — ${release.title}`}
            src={embed}
            width="100%"
            height="152"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="block w-full border border-border"
          />
        ) : (
          <div className="flex items-center justify-between gap-3 border border-border bg-secondary/50 px-4 py-4">
            <div className="min-w-0">
              <p className="truncate text-sm font-bold uppercase">{release.title}</p>
              <p className="truncate text-xs text-muted-foreground">{release.artists}</p>
            </div>
            <a
              href={spotifySearchUrl(release)}
              target="_blank"
              rel="noreferrer"
              className="btn-flat shrink-0 bg-est-green text-est-sand"
            >
              Spotify <ExternalLink className="size-3" />
            </a>
          </div>
        )}
        <div className="mt-3 flex gap-2">
          <a
            href={beatportUrl(release)}
            target="_blank"
            rel="noreferrer"
            className="btn-flat flex-1 justify-center bg-est-yellow text-est-ink"
          >
            <BeatportIcon className="size-4" /> Comprar no Beatport
          </a>
        </div>
      </div>

      <ol className="max-h-[26rem] divide-y divide-border overflow-y-auto">
        {releases.map((item, i) => (
          <li key={`${item.title}-${i}`}>
            <button
              type="button"
              onClick={() => setSelected(i)}
              aria-current={i === selected}
              className={`group flex w-full items-center gap-4 px-4 py-3 text-left transition-colors hover:bg-secondary ${
                i === selected ? "bg-secondary" : ""
              }`}
            >
              <span className="w-12 shrink-0 border border-border">
                <CoverArt
                  variant={item.art}
                  title={item.title}
                  artists={item.artists}
                  className="block h-full w-full"
                />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-bold uppercase">{item.title}</span>
                <span className="block truncate text-xs text-muted-foreground">{item.artists}</span>
              </span>
              <span
                className={`size-2.5 shrink-0 ${swatches[i % swatches.length]} opacity-70 transition-opacity group-hover:opacity-100`}
              />
            </button>
          </li>
        ))}
      </ol>

      <div className="border-t border-border px-5 py-3">
        <span className="label-mono text-muted-foreground">Estufa Records</span>
      </div>
    </aside>
  );
}
