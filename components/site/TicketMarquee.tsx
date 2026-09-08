import { Arrow, LineIcon } from "./primitives";

export function TicketMarquee({
  reverse = false,
  id,
}: {
  reverse?: boolean;
  id?: string;
}) {
  const items = Array.from({ length: 5 });

  return (
    <section
      className={`ticket-marquee${reverse ? " is-reverse" : ""}`}
      id={id}
      aria-label="Ticketaankondiging"
    >
      <span className="ticket-marquee-label">Tickets nu te koop</span>
      <div className="ticket-marquee-viewport">
        <div className="ticket-marquee-track">
          {[0, 1].map((duplicate) => (
            <div className="ticket-marquee-group" aria-hidden="true" key={duplicate}>
              {items.map((_, index) => (
                <span key={index}>
                  <LineIcon type="globe" />
                  TICKETS NU TE KOOP <Arrow />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
