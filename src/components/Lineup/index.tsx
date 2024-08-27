import type { TLineup } from "../../types/Lineup";
import { Fragment } from "react";
import "../../styles/components/lineup.scss";

const lineup: Array<TLineup> = [
  { timeslot: "21:00-22:00", name: "DJ contest winnaar" },
  { timeslot: "22:00-23:30", name: "Two for you" },
  { timeslot: "23:30-00:30", name: "Sïmplex" },
  { timeslot: "00:30-01:30", name: "KARAKALS" },
  { timeslot: "01:30-02:30", name: "Jaël Ost & Magik" },
  { timeslot: "02:30-03:30", name: "Proudmich" },
  { timeslot: "03:30-04:30", name: "Studio Chewie" },
];

export default function Lineup() {
  return (
    <section id="lineup" className="c-lineup o-row">
      <h2 className="c-lineup__title">Line up</h2>
      <div className="c-lineup-container">
        { lineup.map(({ timeslot, name }, index) => (
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
