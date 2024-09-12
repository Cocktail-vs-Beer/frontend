import { TFAQ } from "../../lib/types/FAQ";
import Title from '../Title';

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
    <section id="faq" className="text-center">
      <Title>FAQ</Title>
      <div className="md:container mx-auto md:w-1/2 w-full mt-16 md:mt-24">
      {questions.map(({ question, answer }, index) => (
        <details key={index} className="border font-light px-8 py-4 mb-4">
          <summary className="text-xl">{question}</summary>
          <p className="mt-4">{answer}</p>
        </details>
      ))}
      </div>
    </section>
  );
};
