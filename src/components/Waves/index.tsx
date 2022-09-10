import React, { Fragment, FunctionComponent } from "react";

interface WaveProps {
  waves: Array<{
    name: string;
    price: string;
  }>;
}

const Waves: FunctionComponent<WaveProps> = ({ waves }) => {
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

export default Waves;
