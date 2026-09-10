"use client";

import { useState, type ReactNode } from "react";
import type { TicketType } from "../../lib/tickets";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { TicketModal } from "./TicketModal";

export function Storefront({
  children,
  ticketTypes,
  ticketsError,
}: {
  children: ReactNode;
  ticketTypes: TicketType[] | null;
  ticketsError: string | null;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ticketsOpen, setTicketsOpen] = useState(false);

  return (
    <main className="page">
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        openTickets={() => setTicketsOpen(true)}
      />
      <Hero openTickets={() => setTicketsOpen(true)} />
      {children}
      <Footer openTickets={() => setTicketsOpen(true)} />
      {ticketsOpen && (
        <TicketModal
          close={() => setTicketsOpen(false)}
          initialTicketTypes={ticketTypes}
          initialError={ticketsError}
        />
      )}
    </main>
  );
}
