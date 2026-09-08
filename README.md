The Cocktail vs Beer website — a [Next.js](https://nextjs.org/) app (App Router) hosted on [Vercel](https://vercel.com/).

Package manager: **pnpm** (`pnpm-lock.yaml` is the source of truth).

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) — or another port if the
Ticketnode backend is already using 3000: `pnpm dev -p 3001`.

## Structure

- `app/page.tsx` — the one-page storefront. Fetches the ticket types on the
  server (revalidated every 30s) and hands them to the client shell.
- `app/confirmation/page.tsx` — where Stripe returns after a successful payment.
- `app/api/ticket-types`, `app/api/orders` — thin proxies to Ticketnode, so the
  browser never talks to the backend directly and the return URLs are built
  server-side.
- `components/site/` — the page sections. Only the header, hero, footer and
  ticket modal are Client Components; the rest render on the server.
- `app/global.css` — the whole design. Plain CSS; Tailwind is imported for its
  preflight reset only.

## Environment

| Variable | Purpose |
| --- | --- |
| `TICKETNODE_API_URL` | Ticketnode base URL. Defaults to `https://ticketnode.online`. |
| `TICKETNODE_EVENT_ID` | The event to sell tickets for. |
| `NEXT_PUBLIC_SITE_URL` | Public origin, used for canonical metadata and the Stripe return URLs. Falls back to the request origin. |

The Stripe return URLs must be allowlisted as storefront URLs on the event in
Ticketnode, or ordering fails with `STOREFRONT_URL_NOT_ALLOWED`.

## Deploy

Pushes to `main` deploy to Vercel.
