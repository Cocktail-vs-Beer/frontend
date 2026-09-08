// Shared by the server (initial render) and the client (retry / order errors),
// so this module deliberately carries no "use client" directive.
const errorMessages: Record<string, string> = {
  EVENT_NOT_FOUND: "Dit evenement is momenteel niet beschikbaar.",
  EVENT_NOT_PUBLISHED: "De ticketverkoop voor dit evenement is nog niet open.",
  INSUFFICIENT_AVAILABILITY:
    "Er zijn niet genoeg tickets beschikbaar voor je selectie.",
  QUANTITY_EXCEEDS_MAX_PER_ORDER:
    "Je hebt meer tickets gekozen dan toegestaan per bestelling.",
  TICKET_TYPE_OUTSIDE_SALES_WINDOW: "Deze ticketwave is momenteel niet te koop.",
  ORG_NOT_CHARGES_ENABLED:
    "Betalen is momenteel niet beschikbaar. Probeer het straks opnieuw.",
  STRIPE_ERROR:
    "De betaalpagina kon niet worden geopend. Probeer het straks opnieuw.",
};

export const unreachableMessage =
  "De ticketservice is momenteel niet bereikbaar. Probeer het straks opnieuw.";

export function getTicketErrorMessage(code: string | undefined) {
  if (!code || code === "REQUEST_FAILED") return unreachableMessage;
  return errorMessages[code] ?? "Je bestelling kon niet worden verwerkt.";
}
