import { Suspense } from "react";
import TicketPageClient from "../../components/TicketPageClient";
import { fetchTickets, type Ticket } from "../../lib/tickets";

async function fetchTicketsWithRetry(): Promise<Ticket[]> {
  let lastError: Error;

  try {
    return await fetchTickets();
  } catch (error) {
    lastError = error instanceof Error ? error : new Error("Unknown error");
  }
  throw lastError!;
}

export default async function Page() {
  const refDate = new Date("2024-09-15T18:00:00");

  if (refDate > new Date()) {
    return (
      <Suspense fallback={<Loading />}>
        <div className="mt-24 text-center">
          <h2>Tickets binnenkort verkrijgbaar</h2>
        </div>
      </Suspense>
    );
  }

  let tickets: Ticket[] = [];
  let error: string | null = null;

  try {
    tickets = await fetchTicketsWithRetry();
  } catch (err) {
    error = err instanceof Error ? err.message : "Failed to fetch tickets";
  }

  if (error) {
    return (
      <div className="mt-24 text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Er is een fout opgetreden
        </h2>
        <p className="text-red-600 max-w-md mx-auto">{error}</p>
        <p className="text-sm text-gray-600">
          Probeer de pagina te vernieuwen of kom later terug.
        </p>
      </div>
    );
  }

  if (!tickets || tickets.length === 0) {
    return (
      <div className="mt-24 text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">
          Geen tickets beschikbaar
        </h2>
        <p className="text-sm text-white">Kom later terug voor updates.</p>
      </div>
    );
  }

  return (
    <Suspense fallback={<Loading />}>
      <TicketPageClient tickets={tickets} />
    </Suspense>
  );
}

function Loading() {
  return (
    <div className="mt-24 text-center">
      <h2>Tickets binnenkort verkrijgbaar</h2>
    </div>
  );
}
