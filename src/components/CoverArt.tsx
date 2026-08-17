type Props = { variant: number; title: string; artists?: string; className?: string };

// Capas geométricas modernistas em SVG, no espírito das artes da Estufa:
// formas planas, cores primárias, arquitetura e paisagem estilizadas.
export function CoverArt({ variant, title, artists, className }: Props) {
  const v = ((variant % 8) + 8) % 8;

  return (
    <svg
      viewBox="0 0 300 300"
      role="img"
      aria-label={`Capa de ${title}${artists ? ` por ${artists}` : ""}`}
      className={className}
    >
      {v === 0 && (
        <>
          <rect width="300" height="300" fill="var(--est-blue)" />
          <path d="M0 300 L300 60 L300 300Z" fill="var(--est-green)" />
          <rect x="40" y="45" width="220" height="150" fill="var(--est-sand)" />
          <rect x="52" y="57" width="196" height="126" fill="var(--est-blue)" />
          <circle cx="200" cy="90" r="22" fill="var(--est-yellow)" />
          <path d="M52 150 Q120 130 248 155 L248 183 L52 183Z" fill="var(--est-red)" />
        </>
      )}
      {v === 1 && (
        <>
          <rect width="300" height="300" fill="var(--est-ink)" />
          <path d="M300 40 C170 40 60 140 60 300 L160 300 C160 190 220 120 300 120Z" fill="var(--est-blue)" />
          <path d="M300 130 C230 130 165 195 165 300 L245 300 C245 220 265 190 300 190Z" fill="var(--est-red)" />
          <circle cx="45" cy="255" r="16" fill="var(--est-green)" />
        </>
      )}
      {v === 2 && (
        <>
          <rect width="300" height="300" fill="var(--est-sand)" />
          <circle cx="70" cy="60" r="60" fill="var(--est-yellow)" />
          <path d="M0 130 L60 80 L120 130 L180 75 L240 130 L300 85 L300 160 L0 160Z" fill="var(--est-green)" />
          <path d="M100 190 L220 165 L250 205 L250 265 L100 265Z" fill="var(--est-yellow)" />
          <path d="M100 190 L100 265 L60 250 L60 205Z" fill="var(--est-red)" />
        </>
      )}
      {v === 3 && (
        <>
          <rect width="300" height="300" fill="var(--est-red)" />
          <rect x="90" y="35" width="120" height="80" fill="var(--est-yellow)" />
          <rect x="105" y="50" width="40" height="30" fill="var(--est-ink)" />
          <g>
            {Array.from({ length: 8 }).map((_, i) => (
              <path
                key={i}
                d={`M${i * 40} 300 L${i * 40 + 20} 200 L${i * 40 + 40} 300Z`}
                fill={i % 2 ? "var(--est-ink)" : "var(--est-sand)"}
              />
            ))}
          </g>
          <circle cx="265" cy="45" r="12" fill="var(--est-green)" />
        </>
      )}
      {v === 4 && (
        <>
          <rect width="300" height="300" fill="var(--est-red)" />
          <rect x="30" y="0" width="26" height="300" fill="var(--est-blue)" />
          <rect x="120" y="0" width="26" height="300" fill="var(--est-yellow)" />
          <rect x="210" y="0" width="26" height="300" fill="var(--est-green)" />
          <path d="M75 60 A90 90 0 0 1 75 240Z" fill="var(--est-ink)" />
          <circle cx="60" cy="70" r="30" fill="var(--est-yellow)" />
          <circle cx="60" cy="70" r="12" fill="var(--est-red)" />
        </>
      )}
      {v === 5 && (
        <>
          <rect width="300" height="300" fill="var(--est-mint)" />
          <path d="M150 45 L265 145 L35 145Z" fill="var(--est-sand)" />
          <rect x="60" y="145" width="180" height="120" fill="var(--est-sand)" />
          <rect x="128" y="180" width="44" height="85" fill="var(--est-ink)" />
          <circle cx="150" cy="205" r="12" fill="var(--est-blue)" />
          <rect x="45" y="265" width="210" height="20" fill="var(--est-green)" />
        </>
      )}
      {v === 6 && (
        <>
          <rect width="300" height="300" fill="var(--est-red)" />
          <rect x="0" y="0" width="215" height="300" fill="var(--est-green)" />
          <g fill="var(--est-ink)">
            {Array.from({ length: 4 }).map((_, r) =>
              Array.from({ length: 4 }).map((_, c) => (
                <rect key={`${r}-${c}`} x={30 + c * 48} y={45 + r * 56} width="26" height="34" />
              )),
            )}
          </g>
          <rect x="215" y="120" width="40" height="180" fill="var(--est-yellow)" />
        </>
      )}
      {v === 7 && (
        <>
          <rect width="300" height="300" fill="var(--est-blue)" />
          <path d="M0 0 L300 0 L300 120 L0 190Z" fill="var(--est-green)" />
          <path d="M150 195 L255 235 L150 275 L45 235Z" fill="var(--est-yellow)" />
          <path d="M150 205 L235 235 L150 265 L65 235Z" fill="var(--est-ink)" />
          <circle cx="262" cy="40" r="14" fill="var(--est-red)" />
        </>
      )}
    </svg>
  );
}
