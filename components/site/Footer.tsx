"use client";

import { Wordmark } from "./primitives";
import { TicketButton } from "./TicketButton";

export function Footer({ openTickets }: { openTickets: () => void }) {
  return (
    <footer id="about">
      <Wordmark />
      <p className="footer-made">Made with 🍸 and 🍺</p>
      <TicketButton onClick={openTickets} />
    </footer>
  );
}
