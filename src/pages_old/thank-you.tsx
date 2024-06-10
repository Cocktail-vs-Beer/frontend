import Head from 'next/head';
import Footer from "../components/Footer";
import LogoCocktail from "../../public/images/LogoCocktail.svg";

export default function ThankYou() {
  return (
    <>
      <Head>
        <script defer data-domain="cocktailvsbeer.be" src="https://plausible.io/js/plausible.js"></script>
      </Head>
      <div className="o-container">
        <section className="c-hero o-row o-row--xl">
          <LogoCocktail className="c-hero__logo" />
          <h1>Bedankt voor je bestelling!</h1>
          <p className='c-faq__question-answer'>
            We hebben je bestelling goed ontvangen. Je ontvangt zometeen een e-mail van ons met je tickets.
            Zorg zeker dat je deze tickets bij je hebt op het moment van Cocktail vs Beer.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
