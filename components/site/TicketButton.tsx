"use client";

import { Arrow } from "./primitives";

export function TicketButton({
  className = "",
  onClick,
}: {
  className?: string;
  onClick: () => void;
}) {
  return (
    <button
      className={`ticket-button ${className}`}
      onClick={onClick}
      aria-haspopup="dialog"
    >
      KOOP TICKETS <Arrow />
    </button>
  );
}
