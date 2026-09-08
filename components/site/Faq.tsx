const faqItems = [
  {
    question: "Help, ik heb geen bevestigingsmail ontvangen.",
    answer:
      "Kijk eerst even in je spamfolder. Nog steeds niets gevonden? Stuur ons een bericht via sociale media, dan helpen we je graag verder.",
  },
  {
    question: "Kan ik mijn auto of fiets ergens kwijt?",
    answer: "Ja, er is parking voorzien voor auto's en fietsen.",
  },
  {
    question: "Is er een vestiaire?",
    answer: "Ja, er is een vestiaire voorzien.",
  },
  {
    question: "Kunnen we op Cocktail vs Beer ook iets eten?",
    answer: "Ja, er is een snacktent voorzien.",
  },
  {
    question: "Moet ik mijn identiteitskaart meenemen?",
    answer:
      "Ja. Let op: een foto of kopie van je identiteitskaart is niet geldig.",
  },
  {
    question: "Kan ik contactloos betalen?",
    answer: "Ja, je kan op Cocktail vs Beer betalen met bankkaart en Payconiq.",
  },
] as const;

export function Faq() {
  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <h2 id="faq-title">FAQ</h2>
      <div className="faq-list">
        {faqItems.map(({ question, answer }) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
