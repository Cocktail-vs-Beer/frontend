import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Lineup from "../components/Lineup";
import { TLineup } from "../types/Lineup";

const lineup: Array<TLineup> = [
  { timeslot: "21u-22u30", name: "DJ Mogool" },
  { timeslot: "22u30-00u30", name: "Bibendum" },
  { timeslot: "00u30-02u30", name: "Proudmich" },
  { timeslot: "02u30-04u30", name: "Sïmplex" },
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
