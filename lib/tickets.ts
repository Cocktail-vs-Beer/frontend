// Development points at a Ticketnode running locally; set TICKETNODE_API_URL
// to override either default.
const DEFAULT_API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://ticketnode.online";

const API_BASE_URL = (
  process.env.TICKETNODE_API_URL ?? DEFAULT_API_URL
).replace(/\/$/, "");

export const EVENT_ID =
  process.env.TICKETNODE_EVENT_ID ?? "2dd51390-45fe-4a8d-a72a-3c0a4b54bc33";

export type TicketType = {
  id: string;
  name: string;
  description: string | null;
  price_cents: number;
  currency: string;
  max_per_order: number;
  index: number;
  sales_start_at: string | null;
  sales_end_at: string | null;
  /**
   * Remaining capacity is zero. Sold-out types are still returned so the
   * storefront can list them rather than silently drop them.
   */
  sold_out: boolean;
};

export type OrderLine = {
  ticket_type_id: string;
  quantity: number;
};

export type OrderRequest = {
  name: string;
  email: string;
  lines: OrderLine[];
  success_url: string;
  cancel_url: string;
};

type ApiErrorItem = {
  code: string;
  message: string;
};

type ErrorResponse = {
  errors?: ApiErrorItem[];
};

export class TicketApiError extends Error {
  code: string;
  status: number;

  constructor(code: string, message: string, status = 502) {
    super(message);
    this.name = "TicketApiError";
    this.code = code;
    this.status = status;
  }
}

async function apiRequest<T>(path: string, init?: RequestInit): Promise<T> {
  let response: Response;

  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      ...init,
      headers: {
        Accept: "application/json",
        ...init?.headers,
      },
    });
  } catch (cause) {
    console.error(`Ticket API unreachable at ${API_BASE_URL}${path}:`, cause);
    throw new TicketApiError(
      "REQUEST_FAILED",
      "De ticketservice is momenteel niet beschikbaar.",
    );
  }

  if (!response.ok) {
    const body = (await response.json().catch(() => ({}))) as ErrorResponse;
    const error = body.errors?.[0];
    throw new TicketApiError(
      error?.code ?? "REQUEST_FAILED",
      error?.message ?? "De ticketservice is momenteel niet beschikbaar.",
      response.status,
    );
  }

  return response.json() as Promise<T>;
}

/**
 * Pass `revalidate` to let a page cache the result for that many seconds;
 * without it the ticket types are always fetched fresh.
 */
export async function getTicketTypes(options?: { revalidate?: number }) {
  const response = await apiRequest<{ ticket_types: TicketType[] }>(
    `/api/events/${EVENT_ID}/ticket_types`,
    options?.revalidate === undefined
      ? { cache: "no-store" }
      : { next: { revalidate: options.revalidate } },
  );
  console.log(response);
  return response.ticket_types.sort((a, b) => a.index - b.index);
}

export async function createOrder(order: OrderRequest) {
  return apiRequest<{ checkout_url: string }>("/api/orders", {
    method: "POST",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ order: { ...order, event_id: EVENT_ID } }),
  });
}
