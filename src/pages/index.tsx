import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Lineup from "../components/Lineup";
import { TLineup } from "../types/Lineup";
import FAQ from "../components/FAQ";
import { TFAQ } from "../types/FAQ";

const lineup: Array<TLineup> = [
  { timeslot: "21:00-22:30", name: "DJ Miles" },
  { timeslot: "22:30-00:30", name: "Bibendum" },
  { timeslot: "00:30-02:30", name: "Proudmich" },
  { timeslot: "02:30-04:30", name: "Sïmplex" },
];

const questions: Array<TFAQ> = [
  {
    question: "Wat als het evenement niet doorgaat?",
    answer: "Dan krijgde wel uw geld terug.",
  },
  {
    question: "Wat als het evenement niet doorgaat?",
    answer: "Dan krijgde wel uw geld terug.",
  },
  {
    question: "Wat als het evenement niet doorgaat?",
    answer: "Dan krijgde wel uw geld terug.",
  },
];

export default function Home() {
  return (
    <>
      <div className="o-container">
        <Navbar />
        <Hero />
        <Lineup lineup={lineup} />
        <FAQ qas={questions} />
      </div>
      <Footer />
    </>
  );
}
