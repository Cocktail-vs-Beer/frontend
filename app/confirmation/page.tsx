import type { Metadata } from "next";
import { Arrow, Wordmark } from "../../components/site/primitives";

export const metadata: Metadata = {
  title: "Bedankt | Cocktail vs Beer 2026",
  robots: { index: false },
};

export default function Page() {
  return (
    <main className="confirmation-page paper-grid">
      <header className="confirmation-header">
        <a href="/" aria-label="Terug naar de startpagina">
          <Wordmark />
        </a>
      </header>
      <section className="confirmation-card" aria-labelledby="confirmation-title">
        <span className="confirmation-kicker">BESTELLING ONTVANGEN</span>
        <h1 id="confirmation-title">BEDANKT.</h1>
        <p>
          Je bestelling is goed ontvangen. Zodra je betaling verwerkt is, ontvang
          je de tickets via e-mail.
        </p>
        <p className="confirmation-note">
          Geen mail ontvangen? Controleer eerst je spamfolder. Het kan enkele
          minuten duren voor je tickets aankomen.
        </p>
        <a className="ticket-button" href="/">
          TERUG NAAR DE WEBSITE <Arrow />
        </a>
      </section>
      <p className="confirmation-made">Made with 🍸 and 🍺</p>
    </main>
  );
}
