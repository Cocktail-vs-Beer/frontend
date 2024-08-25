import React, { Fragment } from "react";

interface WaveProps {
  waves: Array<{
    name: string;
    price: string;
  }>;
}

const waves = [
  { name: "Wave 1", price: "€6" },
  { name: "Wave 2", price: "€8" },
  { name: "Wave 3", price: "€9" },
];

export default function Waves() {
  return (
    <section id="lineup" className="text-center">
      <h2 className="text-3xl font-sans font-bold">Waves</h2>
      <div className="">
        {waves.map(({ name, price }, index) => (
          <Fragment key={`lineup-${index}`}>
            <p className="c-lineup__timeslot">{name}</p>
            <div className="c-lineup__divider" />
            <p className="c-lineup__name">{price}</p>
          </Fragment>
        ))}
      </div>
    </section>
  );
};
