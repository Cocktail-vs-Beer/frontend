import React, { FunctionComponent } from "react";
import { TFAQ } from "../../types/FAQ";

const QA = () => {};

interface FaqProps {
  qas: Array<TFAQ>;
}

const FAQ: FunctionComponent<FaqProps> = ({ qas }) => {
  return (
    <section id="faq" className="c-faq">
      <h2 className="c-faq__title">faq</h2>
      {qas.map(({ question, answer }) => (
        <details className="c-faq__question">
          <summary className="c-faq__question-title">{question}</summary>
          <p className="c-faq__question-answer">{answer}</p>
        </details>
      ))}
    </section>
  );
};

export default FAQ;
