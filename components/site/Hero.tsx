"use client";

import Image from "next/image";
import heroPeople from "../../assets/hero-people.webp";
import { Arrow, LineIcon } from "./primitives";

export function Hero({ openTickets }: { openTickets: () => void }) {
  return (
    <section className="hero paper-grid" id="top">
      <div className="hero-type" aria-label="Cocktail versus Beer">
        <span>COCKTAIL</span>
        <i>VS</i>
        <b>BEER</b>
      </div>
      <div className="artwork-card">
        <Image
          src={heroPeople}
          alt="Retroillustratie van twee mensen met een bier en een cocktail"
          priority
        />
      </div>
      <button className="event-card" type="button" onClick={openTickets}>
        <span className="event-globe">
          <LineIcon type="globe" />
        </span>
        <span className="event-copy">
          <b>ZATERDAG 3 OKTOBER 2026</b>
          <strong>Tent Leihoekstraat 62, Machelen</strong>
        </span>
        <span className="event-arrow">
          <b>TICKETS</b>
          <Arrow diagonal />
        </span>
      </button>
    </section>
  );
}
