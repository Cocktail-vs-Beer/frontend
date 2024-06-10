import { TFAQ } from "../../types/FAQ";
import "../../styles/components/faq.scss";
import "../../styles/objects/rows.scss"

const questions: Array<TFAQ> = [
  {
    question: "Help, ik heb geen bevestigingsmail ontvangen.",
    answer:
      "Als je geen bevestigingsmail hebt ontvangen met je tickets, kijk dan zeker eerst eens in je spam folder. Nog steeds niets gevonden? Stuur ons een berichtje via sociale media en we helpen je graag verder.",
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
      "Ja, let op: een foto/kopie van je identiteitskaart is niet geldig.",
  },
  {
    question: "Kan ik contactloos betalen?",
    answer:
      "Ja, je kan op Cocktail vs Beer betalen met bankkaart en met Payconiq.",
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="c-faq o-row o-row--xl">
      <h2 className="c-faq__title">faq</h2>
      {questions.map(({ question, answer }, index) => (
        <details key={index} className="c-faq__question">
          <summary className="c-faq__question-title">{question}</summary>
          <p className="c-faq__question-answer">{answer}</p>
        </details>
      ))}
    </section>
  );
};
