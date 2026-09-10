import { createOrder, TicketApiError, type OrderLine } from "../../../lib/tickets";

type OrderPayload = {
  name?: unknown;
  email?: unknown;
  lines?: unknown;
};

function parseLines(value: unknown): OrderLine[] | null {
  if (!Array.isArray(value) || value.length === 0) return null;

  const lines: OrderLine[] = [];
  for (const line of value) {
    if (!line || typeof line !== "object") return null;
    const { ticket_type_id, quantity } = line as Record<string, unknown>;
    if (typeof ticket_type_id !== "string" || !ticket_type_id) return null;
    if (!Number.isInteger(quantity) || (quantity as number) <= 0) return null;
    lines.push({ ticket_type_id, quantity: quantity as number });
  }
  return lines;
}

function badRequest(message: string) {
  return Response.json(
    { errors: [{ code: "INVALID_REQUEST", message }] },
    { status: 400 },
  );
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as OrderPayload | null;
  if (!payload) return badRequest("Ongeldige bestelling.");

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email =
    typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  const lines = parseLines(payload.lines);

  if (!name) return badRequest("Vul je naam in.");
  if (!email.includes("@")) return badRequest("Vul een geldig e-mailadres in.");
  if (!lines) return badRequest("Kies minstens één ticket.");

  // The return URLs are built server-side so the checkout can only ever come
  // back to this site, whatever the client sends. Unlike lib/site.ts this
  // falls back to the request origin, so a local or preview checkout returns
  // to the host the buyer is actually on.
  const origin = process.env.NEXT_PUBLIC_SITE_URL ?? new URL(request.url).origin;

  try {
    const { checkout_url } = await createOrder({
      name,
      email,
      lines,
      success_url: new URL("/confirmation", origin).href,
      cancel_url: new URL("/#tickets", origin).href,
    });
    return Response.json({ checkout_url });
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
