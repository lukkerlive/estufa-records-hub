type Props = { className?: string };

// Glifo geométrico usado para o link de compra no Beatport.
export function BeatportIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M4 2v10.5a5.5 5.5 0 1 0 5.5-5.5H7.5V2H4Zm5.5 8a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
      <path d="M20 9.5a5.5 5.5 0 0 1-5.5 5.5v3A8.5 8.5 0 0 0 23 9.5h-3Z" />
    </svg>
  );
}
