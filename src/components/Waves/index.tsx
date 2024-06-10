import React, { Fragment, FunctionComponent } from "react";

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
    <section id="lineup" className="c-lineup o-row">
      <h2 className="c-lineup__title">Waves</h2>
      <div className="c-lineup-container">
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
