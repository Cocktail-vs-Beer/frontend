import React, { FunctionComponent } from "react";
import { TLineup } from "../../types/Lineup";

interface LineupProps {
  lineup: Array<TLineup>;
}

const Lineup: FunctionComponent<LineupProps> = ({ lineup }) => {
  return (
    <section id="lineup" className="c-lineup">
      <h2 className="c-lineup__title">Line up</h2>
      <div className="c-lineup-container">
        {lineup.map(({ timeslot, name }) => (
          <>
            <p className="c-lineup__timeslot">{timeslot}</p>
            <div className="c-lineup__divider" />
            <p className="c-lineup__name">{name}</p>
          </>
        ))}
      </div>
    </section>
  );
};

export default Lineup;
