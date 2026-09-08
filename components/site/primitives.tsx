export function Wordmark() {
  return (
    <span className="wordmark" aria-label="Cocktail versus Beer">
      COCKTAIL<span>VS BEER</span>
    </span>
  );
}

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span className={diagonal ? "arrow diagonal" : "arrow"} aria-hidden="true">
      {diagonal ? "↗" : "→"}
    </span>
  );
}

export function LineIcon({
  type,
}: {
  type: "flower" | "cup" | "shapes" | "smile" | "globe";
}) {
  if (type === "flower")
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="17" cy="16" r="10" />
        <circle cx="31" cy="16" r="10" />
        <circle cx="17" cy="31" r="10" />
        <circle cx="31" cy="31" r="10" />
      </svg>
    );
  if (type === "cup")
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M12 8h24l-3 34H15L12 8Z" />
        <path d="M9 4h30M17 12l2 25M31 12l-2 25" />
      </svg>
    );
  if (type === "shapes")
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="m14 4 11 18H3L14 4Z" />
        <circle cx="36" cy="12" r="9" />
        <rect x="4" y="28" width="17" height="17" />
        <path d="m36 27 10 18H26l10-18Z" />
      </svg>
    );
  if (type === "globe")
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="19" />
        <path d="M5 24h38M24 5c10 10 10 28 0 38M24 5c-10 10-10 28 0 38" />
      </svg>
    );
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="19" />
      <circle cx="17" cy="19" r="1.5" fill="currentColor" />
      <circle cx="31" cy="19" r="1.5" fill="currentColor" />
      <path d="M14 27c4 10 16 10 20 0" />
    </svg>
  );
}
