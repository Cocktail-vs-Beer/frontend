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
import Head from "next/head";
import Waves from "../components/Waves";

import { get } from '../services/api'; 

const lineup: Array<TLineup> = [
  { timeslot: "21:00-22:30", name: "DJ contest winnaar" },
  { timeslot: "22:30-00:00", name: "Two for you" },
  { timeslot: "00:00-01:00", name: "Tola OG & Sven Van alboom" },
  { timeslot: "01:00-02:00", name: "Sïmplex" },
  { timeslot: "02:00-03:00", name: "Bibendum" },
  { timeslot: "03:30-04:30", name: "Friendzone" },
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

const sponsors = [
  // { src: "/assets/sponsors/stella.png" },
  { src: "/assets/sponsors/3_garage-de-prins.png" },
  { src: "/assets/sponsors/1_heyerick.png" },
  { src: "/assets/sponsors/2_samy-renting.png" },
  { src: "/assets/sponsors/afspanning.png" },
  // { src: "/assets/sponsors/arc3c.png" },
  { src: "/assets/sponsors/biosolutions.png" },
  // { src: "/assets/sponsors/brick-fun.png" },
  // { src: "/assets/sponsors/carrefour.png" },
  { src: "/assets/sponsors/de-jans-gas.png" },
  { src: "/assets/sponsors/drukkerij-de-schrijver.png" },
  { src: "/assets/sponsors/een-kleintje-met.png" },
  // { src: "/assets/sponsors/eendracht.png" },
  { src: "/assets/sponsors/elektro-service-maes.png" },
  { src: "/assets/sponsors/julie-braem.png" },

  // { src: "/assets/sponsors/3_dhaene.png" },
  { src: "/assets/sponsors/4_rvb.png" },
  // { src: "/assets/sponsors/5_pizza-di-trevi.png" },
  { src: "/assets/sponsors/6_stampix.png" },
  { src: "/assets/sponsors/fintro-denys.png" },
  // { src: "/assets/sponsors/krist-renting.png" },
  { src: "/assets/sponsors/kvk.png" },
  // { src: "/assets/sponsors/marron.png" },
  // { src: "/assets/sponsors/minne.png" },
  { src: "/assets/sponsors/onze-architecten.png" },
  { src: "/assets/sponsors/pitta-melita.png" },
  // { src: "/assets/sponsors/pizza-matic.png" },

  { src: "/assets/sponsors/tuinen-gevaert.png" },
  { src: "/assets/sponsors/vopo.png" },
];

const waves = [
  { name: "Wave 1", price: "sold out" },
  { name: "Wave 2", price: "sold out" },
  { name: "Wave 3", price: "€9" },
];

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const wave = { active: false, price: 0, startsAt: "2023-09-11T20:00:00.000Z" }
  try {
    const dirRelativeToPublicFolder = "assets/sponsors";

    const dir = path.resolve("./public", dirRelativeToPublicFolder);

    const fileContents = (await fs.readdir(dir)).map((file) => {
      const imagePath = `/assets/sponsors/${file}`;
      const imageProps = {
        src: imagePath,
      };
      return imageProps;
    });

    const [error, res ] = await get('/wave');
    if(!error) {
      wave.active = res.active;
      wave.price = res.price;
      wave.startsAt = res.startsAt;
    }

    console.log(wave);
    

    return { props: { sponsors: fileContents, wave } };
  } catch (error) {
    return { props: { sponsors: [], wave } };
  }
};

export default function Home({ wave }: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  return (
    <>
      <Head>
        <script defer type="text/javascript" src="https://api.pirsch.io/pirsch.js" id="pirschjs"
          data-code="uggNf5kiXZhCiT0t6dg4P4wndoYupETI"></script>
      </Head>
      <div className="o-container">
        <Navbar />
        <Hero
          setNumberOfTickets={setNumberOfTickets}
          numberOfTickets={numberOfTickets}
          wave={wave}
        />
        <Waves waves={waves} />
        <Lineup lineup={lineup} />
        <FAQ qas={questions} />
        <Sponsors sponsors={sponsors} />
      </div>
      <Footer />
    </>
  );
}
