import { getTicketTypes, TicketApiError } from "../../../lib/tickets";

export async function GET() {
  try {
    return Response.json({ ticket_types: await getTicketTypes() });
  } catch (error) {
    if (error instanceof TicketApiError) {
      return Response.json(
        { errors: [{ code: error.code, message: error.message }] },
        { status: error.status },
      );
    }
    throw error;
  }
}
