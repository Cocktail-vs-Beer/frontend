import Head from "next/head";
import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}
