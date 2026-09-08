"use client";

import { Wordmark } from "./primitives";
import { TicketButton } from "./TicketButton";

const navItems = [
  ["LINE-UP", "line-up"],
  ["AFTERWORK", "afterwork"],
  ["FAQ", "faq"],
] as const;

export function Header({
  menuOpen,
  setMenuOpen,
  openTickets,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  openTickets: () => void;
}) {
  return (
    <header className="site-header">
      <a href="#top" className="brand-link">
        <Wordmark />
      </a>
      <nav
        id="main-navigation"
        className={menuOpen ? "site-nav is-open" : "site-nav"}
        aria-label="Hoofdnavigatie"
      >
        {navItems.map(([label, target]) => (
          <a key={target} href={`#${target}`} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <TicketButton className="header-ticket" onClick={openTickets} />
      <button
        className="nav-toggle"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
