import { Afterwork } from "../components/site/Afterwork";
import { Faq } from "../components/site/Faq";
import { Lineup } from "../components/site/Lineup";
import { Storefront } from "../components/site/Storefront";
import { TicketMarquee } from "../components/site/TicketMarquee";
import { getTicketErrorMessage } from "../lib/ticket-messages";
import { getTicketTypes, TicketApiError, type TicketType } from "../lib/tickets";

// Ticket availability changes while the site is live, so the storefront is
// revalidated rather than baked into the build.
export const revalidate = 30;

export default async function Page() {
  let ticketTypes: TicketType[] | null = null;
  let ticketsError: string | null = null;

  try {
    ticketTypes = await getTicketTypes({ revalidate });
  } catch (error) {
    ticketsError = getTicketErrorMessage(
      error instanceof TicketApiError ? error.code : undefined,
    );
  }

  return (
    <Storefront ticketTypes={ticketTypes} ticketsError={ticketsError}>
      <TicketMarquee reverse />
      <Lineup />
      <Afterwork />
      <TicketMarquee id="tickets" />
      <Faq />
    </Storefront>
  );
}
