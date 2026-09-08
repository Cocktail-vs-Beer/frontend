"use client";

import { useEffect, useRef, useState } from "react";
import {
  getTicketErrorMessage,
  unreachableMessage,
} from "../../lib/ticket-messages";
import type { TicketType } from "../../lib/tickets";
import { Arrow } from "./primitives";

type ApiError = { code: string; message: string };

async function readError(response: Response) {
  const body = (await response.json().catch(() => ({}))) as {
    errors?: ApiError[];
  };
  const error = body.errors?.[0];
  return error?.code === "INVALID_REQUEST" && error.message
    ? error.message
    : getTicketErrorMessage(error?.code);
}

function formatTicketPrice(ticketType: TicketType) {
  return new Intl.NumberFormat("nl-BE", {
    style: "currency",
    currency: ticketType.currency,
    maximumFractionDigits: 2,
  }).format(ticketType.price_cents / 100);
}

function getTicketStatus(ticketType: TicketType) {
  const now = Date.now();
  if (ticketType.available !== undefined && ticketType.available <= 0)
    return { available: false, label: "SOLD OUT" };
  if (
    ticketType.sales_start_at &&
    new Date(ticketType.sales_start_at).getTime() > now
  )
    return { available: false, label: "Binnenkort" };
  if (
    ticketType.sales_end_at &&
    new Date(ticketType.sales_end_at).getTime() < now
  )
    return { available: false, label: "Verkoop gesloten" };
  return { available: true, label: "Beschikbaar" };
}

export function TicketModal({
  close,
  initialTicketTypes,
  initialError,
}: {
  close: () => void;
  initialTicketTypes: TicketType[] | null;
  initialError: string | null;
}) {
  const [ticketTypes, setTicketTypes] = useState<TicketType[] | null>(
    initialTicketTypes,
  );
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [error, setError] = useState(initialError ?? "");
  const [submitting, setSubmitting] = useState(false);
  const confirmEmailInput = useRef<HTMLInputElement>(null);

  const normalizedEmail = email.trim().toLowerCase();
  const emailsMatch = normalizedEmail === confirmEmail.trim().toLowerCase();

  const loadTicketTypes = async () => {
    setError("");
    setTicketTypes(null);
    try {
      const response = await fetch("/api/ticket-types");
      if (!response.ok) {
        setError(await readError(response));
        return;
      }
      const body = (await response.json()) as { ticket_types: TicketType[] };
      setTicketTypes(body.ticket_types);
    } catch {
      setError(unreachableMessage);
    }
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) =>
      event.key === "Escape" && close();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [close]);

  useEffect(() => {
    confirmEmailInput.current?.setCustomValidity(
      emailsMatch ? "" : "De e-mailadressen komen niet overeen.",
    );
  }, [emailsMatch]);

  const lines = Object.entries(quantities)
    .filter(([, quantity]) => quantity > 0)
    .map(([ticket_type_id, quantity]) => ({ ticket_type_id, quantity }));

  const submitOrder = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!lines.length) {
      setError("Kies minstens één ticket.");
      return;
    }
    if (!emailsMatch) {
      setError("De e-mailadressen komen niet overeen.");
      confirmEmailInput.current?.focus();
      return;
    }

    setSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: normalizedEmail, lines }),
      });
      if (!response.ok) {
        setError(await readError(response));
        setSubmitting(false);
        return;
      }
      const { checkout_url } = (await response.json()) as {
        checkout_url: string;
      };
      const checkoutUrl = new URL(checkout_url);
      if (!["http:", "https:"].includes(checkoutUrl.protocol))
        throw new Error("Ongeldige checkout-URL");
      window.location.assign(checkoutUrl.href);
    } catch {
      setError(unreachableMessage);
      setSubmitting(false);
    }
  };

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ticket-title"
      onMouseDown={(event) => event.currentTarget === event.target && close()}
    >
      <div className="modal-card">
        <button
          className="modal-close"
          onClick={close}
          aria-label="Ticketvenster sluiten"
        >
          ×
        </button>
        <small>COCKTAIL VS BEER · ZATERDAG 3 OKTOBER 2026</small>
        <h2 id="ticket-title">TICKETS.</h2>
        <p className="modal-intro">
          Kies je tickets en ga veilig verder naar de betaalpagina.
        </p>
        {ticketTypes === null && !error && (
          <p className="ticket-feedback" role="status">
            Tickets laden…
          </p>
        )}
        {error && ticketTypes === null && (
          <div className="ticket-feedback is-error" role="alert">
            <p>{error}</p>
            <button type="button" onClick={() => void loadTicketTypes()}>
              OPNIEUW PROBEREN
            </button>
          </div>
        )}
        {ticketTypes?.length === 0 && (
          <p className="ticket-feedback" role="status">
            Er zijn momenteel geen tickets beschikbaar.
          </p>
        )}
        {ticketTypes && ticketTypes.length > 0 && (
          <form className="ticket-form" onSubmit={submitOrder}>
            <div className="ticket-waves">
              {ticketTypes.map((ticketType, index) => {
                const status = getTicketStatus(ticketType);
                return (
                  <article
                    className={`ticket-wave${
                      status.available ? " is-active" : " is-unavailable"
                    }`}
                    key={ticketType.id}
                  >
                    <span>WAVE {String(index + 1).padStart(2, "0")}</span>
                    <h3>{ticketType.name}</h3>
                    <strong>{formatTicketPrice(ticketType)}</strong>
                    {ticketType.description && <p>{ticketType.description}</p>}
                    <small>{status.label}</small>
                    <label>
                      <span>Aantal</span>
                      <select
                        value={quantities[ticketType.id] ?? 0}
                        disabled={!status.available}
                        onChange={(event) =>
                          setQuantities((current) => ({
                            ...current,
                            [ticketType.id]: Number(event.target.value),
                          }))
                        }
                      >
                        {Array.from(
                          {
                            length:
                              Math.min(
                                ticketType.max_per_order,
                                ticketType.available ?? ticketType.max_per_order,
                              ) + 1,
                          },
                          (_, quantity) => (
                            <option value={quantity} key={quantity}>
                              {quantity}
                            </option>
                          ),
                        )}
                      </select>
                    </label>
                  </article>
                );
              })}
            </div>
            <div className="buyer-fields">
              <label className="name-field">
                <span>Naam</span>
                <input
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </label>
              <label>
                <span>E-mail</span>
                <input
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </label>
              <label>
                <span>Herhaal e-mail</span>
                <input
                  ref={confirmEmailInput}
                  type="email"
                  autoComplete="off"
                  value={confirmEmail}
                  onChange={(event) => setConfirmEmail(event.target.value)}
                  aria-invalid={confirmEmail.length > 0 && !emailsMatch}
                  aria-describedby={
                    confirmEmail.length > 0 && !emailsMatch
                      ? "email-match-error"
                      : undefined
                  }
                  required
                />
              </label>
              {confirmEmail.length > 0 && !emailsMatch && (
                <p className="email-mismatch" id="email-match-error" role="alert">
                  De e-mailadressen komen niet overeen.
                </p>
              )}
            </div>
            {error && (
              <p className="order-error" role="alert">
                {error}
              </p>
            )}
            <button className="ticket-button order-button" disabled={submitting}>
              {submitting ? "EVEN GEDULD…" : "NAAR BETALEN"} <Arrow />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
