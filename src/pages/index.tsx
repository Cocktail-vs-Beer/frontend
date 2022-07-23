import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Lineup from "../components/Lineup";
import { TLineup } from "../types/Lineup";
import FAQ from "../components/FAQ";
import { TFAQ } from "../types/FAQ";

const lineup: Array<TLineup> = [
  { timeslot: "21:00-22:30", name: "tba" },
  { timeslot: "22:30-00:00", name: "miles b2b tizzix" },
  { timeslot: "00:00-02:00", name: "mc captain feat. lc lennert" },
  { timeslot: "02:00-03:30", name: "thomassive" },
  { timeslot: "03:30-04:30", name: "sïmplex" },
];

const questions: Array<TFAQ> = [
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
    answer: "Ja, let op: een foto/kopie van je identiteitskaart is niet geldig.",
  },
  {
    question: "Kan ik contactloos betalen?",
    answer: "Ja, je kan op Cocktail vs Beer betalen met bankkaart en met Payconiq.",
  },
];

export default function Home() {
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  return (
    <>
      <div className="o-container">
        <Navbar />
        <Hero
          setNumberOfTickets={setNumberOfTickets}
          numberOfTickets={numberOfTickets}
        />
        <Lineup lineup={lineup} />
        <FAQ qas={questions} />
      </div>
      <Footer />
    </>
  );
}
