import type { TLineup } from "../../types/Lineup";
import { Fragment } from "react";
import "../../styles/components/lineup.scss";

const lineup: Array<TLineup> = [
  { timeslot: "21:00-22:30", name: "DJ contest winnaar" },
  { timeslot: "22:30-00:00", name: "Two for you" },
  { timeslot: "00:00-01:00", name: "Tola OG & Sven Van alboom" },
  { timeslot: "01:00-02:00", name: "Sïmplex" },
  { timeslot: "02:00-03:00", name: "Bibendum" },
  { timeslot: "03:30-04:30", name: "Friendzone" },
];

export default function Lineup() {
  return (
    <section id="lineup" className="c-lineup o-row">
      <h2 className="c-lineup__title">Line up</h2>
      <div className="c-lineup-container">
        {lineup.map(({ timeslot, name }, index) => (
          <Fragment key={`lineup-${index}`}>
            <p className="c-lineup__timeslot">{timeslot}</p>
            <div className="c-lineup__divider" />
            <p className="c-lineup__name">{name}</p>
          </Fragment>
        ))}
      </div>
    </section>
  );
};
