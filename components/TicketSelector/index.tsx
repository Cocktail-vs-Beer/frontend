import { useState } from "react";
import { Button } from "../ui/button";
import { type Ticket } from "../../lib/tickets";

interface TicketSelectorProps {
  tickets: Ticket[];
  onTicketSelect: (ticket: Ticket) => void;
}

export default function TicketSelector({
  tickets,
  onTicketSelect,
}: TicketSelectorProps) {
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);

  const availableTickets = tickets.filter((ticket) => !ticket.soldOut);
  const soldOutTickets = tickets.filter((ticket) => ticket.soldOut);

  const handleTicketSelect = (ticket: Ticket) => {
    if (ticket.soldOut) return;
    setSelectedTicketId(ticket.id);
  };

  const handleContinue = () => {
    const selectedTicket = tickets.find(
      (ticket) => ticket.id === selectedTicketId,
    );
    if (selectedTicket) {
      onTicketSelect(selectedTicket);
    }
  };

  if (availableTickets.length === 0) {
    return (
      <div className="container mx-auto mt-24 text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">Uitverkocht</h2>
        <p className="text-white">
          Alle tickets voor dit evenement zijn uitverkocht.
        </p>
        {soldOutTickets.length > 0 && (
          <div className="mt-8">
            <div className="space-y-2">
              {soldOutTickets.map((ticket) => (
                <div
                  className={`p-4 md:p-6 border-2 rounded-lg border-gray-300`}
                >
                  <div className="flex flex-col space-y-3 ">
                    <div className="flex items-center justify-between space-x-3 md:space-x-4">
                      <div className="min-w-0">
                        <h4 className="text-base md:text-lg font-semibold text-white">
                          {ticket.name}
                        </h4>
                        {ticket.description && (
                          <p className="text-sm md:text-base text-white">
                            {ticket.description}
                          </p>
                        )}
                      </div>
                      <p className="text-xl md:text-2xl font-bold text-white">
                        € {ticket.price},00
                      </p>
                    </div>
                    <div className="text-left">
                      <p className="text-xs md:text-sm text-primary font-medium">
                        UITVERKOCHT
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:w-2/3 mt-8 md:mt-16 space-y-6">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Kies je ticket
        </h2>
      </div>

      {/* Available Tickets */}
      <div className="space-y-4">
        {availableTickets.map((ticket) => (
          <div
            key={ticket.id}
            onClick={() => handleTicketSelect(ticket)}
            className={`p-4 md:p-6 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
              selectedTicketId === ticket.id
                ? "border-primary bg-primary/5 shadow-md"
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            <div className="flex flex-col space-y-3 ">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-colors flex-shrink-0 ${
                    selectedTicketId === ticket.id
                      ? "border-primary bg-primary"
                      : "border-gray-300"
                  }`}
                >
                  {selectedTicketId === ticket.id && (
                    <div className="w-full h-full rounded-full bg-white scale-50"></div>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-base md:text-lg font-semibold text-white">
                    {ticket.name}
                  </h4>
                  {ticket.description && (
                    <p className="text-sm md:text-base text-white">
                      {ticket.description}
                    </p>
                  )}
                </div>
                <p className="text-xl md:text-2xl font-bold text-white">
                  € {ticket.price},00
                </p>
              </div>
              <div className="text-left">
                <p className="text-xs md:text-sm text-green-600 font-medium">
                  Beschikbaar
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sold Out Tickets */}
      {soldOutTickets.length > 0 && (
        <div className="space-y-4 mt-8">
          <h3 className="text-xl font-semibold text-gray-700">
            Uitverkochte tickets
          </h3>
          {soldOutTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="p-4 md:p-6 border-2 border-gray-200 rounded-lg opacity-60"
            >
              <div className="flex flex-col  space-y-3 ">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-base md:text-lg font-semibold text-gray-600">
                      {ticket.name}
                    </h4>
                    {ticket.description && (
                      <p className="text-sm md:text-base text-gray-500">
                        {ticket.description}
                      </p>
                    )}
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-gray-600">
                    € {ticket.price},00
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-xs md:text-sm text-red-500 font-medium">
                    Uitverkocht
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Continue Button */}
      {selectedTicketId && (
        <div className="sticky bottom-4 md:bottom-6 pt-4 md:pt-6 px-4 md:px-0 -mx-4 md:mx-0">
          <Button
            onClick={handleContinue}
            className="w-full py-3 md:py-4 text-base md:text-lg font-semibold rounded-lg hover:bg-primary bg-primary shadow-lg"
          >
            Doorgaan met bestellen
          </Button>
        </div>
      )}
    </div>
  );
}
