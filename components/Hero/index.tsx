// import React, { useEffect, useState } from "react";
import Image from "next/image";

import LogoCocktail from "../../../public/images/LogoCocktail.svg";

export default function Hero () {
  return (
    <section className="flex flex-col mt-16 justify-center items-center">
      <Image className="md:w-[380px] w-[70%]" src="/images/LogoCocktail.png" alt="Logo Cocktail vs Beer" width={600} height={400} ></Image>
      <div className="text-center text-4xl mt-12">
        <h2 className="font-trainone text-5xl md:text-6xl">ZATERDAG</h2>
        <h2 className="font-trainone text-4xl md:text-6xl md:mt-6 mt-2">5 OKTOBER 2024</h2>
        {/* <button className="font-sans font-bold text-2xl leading-none bg-primary py-6 px-9 rounded mt-8">Tickets binnenkort</button> */}
      </div>
   </section>
  );
};

