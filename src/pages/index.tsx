import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Lineup from "../components/Lineup";
import { TLineup } from "../types/Lineup";
import FAQ from "../components/FAQ";
import { TFAQ } from "../types/FAQ";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import path from "path";
import { promises as fs } from "fs";
import Sponsors from "../components/Sponsors";
import getConfig from "next/config";

const lineup: Array<TLineup> = [
  { timeslot: "21:00-22:30", name: "DJ contest winnaar" },
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
    answer:
      "Ja, let op: een foto/kopie van je identiteitskaart is niet geldig.",
  },
  {
    question: "Kan ik contactloos betalen?",
    answer:
      "Ja, je kan op Cocktail vs Beer betalen met bankkaart en met Payconiq.",
  },
];

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  console.log(getConfig().serverRuntimeConfig.PROJECT_ROOT);
  try {
    const sponsorDir = path.join(
      getConfig().serverRuntimeConfig.PROJECT_ROOT,
      "/assets/sponsors"
    );

    const fileContents = (await fs.readdir(sponsorDir)).map((file) => {
      const imagePath = `/assets/sponsors/${file}`;
      const imageProps = {
        src: imagePath,
      };
      return imageProps;
    });

    return { props: { sponsors: fileContents } };
  } catch (error) {
    return { props: { sponsors: [] } };
  }

  // Pass data to the page via props
};

export default function Home({
  sponsors,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  console.log("====================================");
  console.log(sponsors);
  console.log("====================================");
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
        <Sponsors sponsors={sponsors} />
      </div>
      <Footer />
    </>
  );
}
