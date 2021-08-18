import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Lineup from "../components/Lineup";
import { TLineup } from "../types/Lineup";

const lineup: Array<TLineup> = [
  { timeslot: "21:00-22:30", name: "DJ Mogool" },
  { timeslot: "22:30-00:30", name: "Bibendum" },
  { timeslot: "00:30-02:30", name: "Proudmich" },
  { timeslot: "02:30-04:30", name: "Sïmplex" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Lineup lineup={lineup} />
      <Footer />
    </>
  );
}
