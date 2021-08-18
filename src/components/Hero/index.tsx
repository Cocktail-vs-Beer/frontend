import React from "react";
import LogoCocktail from "../../../public/images/LogoCocktail.svg";

const Hero = () => {
  return (
    <section className="c-hero">
      <LogoCocktail className="c-hero__logo" />
      <h1>
        zaterdag 2 oktober
        <br />
        2021
      </h1>
      <button className="c-hero__cta">Bestel ticket</button>
    </section>
  );
};

export default Hero;
