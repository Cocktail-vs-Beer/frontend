"use client";

import { useState } from "react";
import OrderForm from "../OrderForm";
import TicketSelector from "../TicketSelector";
import { type Ticket } from "../../lib/tickets";

interface TicketPageClientProps {
  tickets: Ticket[];
}

export default function TicketPageClient({ tickets }: TicketPageClientProps) {
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  const handleTicketSelect = (ticket: Ticket) => {
    setSelectedTicket(ticket);
  };

  const handleBackToSelection = () => {
    setSelectedTicket(null);
  };

  if (selectedTicket) {
    return (
      <div className="container mx-auto px-4 md:w-1/3 mt-8 md:mt-16">
        <div className="mb-6 text-center">
          <button
            onClick={handleBackToSelection}
            className="mb-4 text-primary hover:text-primary/80 transition-colors text-sm font-medium flex items-center mx-auto"
          >
            ← Terug naar ticket selectie
          </button>
          <h2 className="text-xl md:text-2xl font-bold">
            {selectedTicket.name}
          </h2>
          {selectedTicket.description && (
            <p className="text-white text-sm md:text-base">
              {selectedTicket.description}
            </p>
          )}
          <p className="text-lg md:text-xl font-semibold text-gray-800 mt-2">
            € {selectedTicket.price},00
          </p>
        </div>
        <OrderForm price={selectedTicket.price} ticketId={selectedTicket.id} />
      </div>
    );
  }

  return (
    <TicketSelector tickets={tickets} onTicketSelect={handleTicketSelect} />
  );
}
