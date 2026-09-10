import { Arrow } from "./primitives";

type Artist = {
  name: string;
  startTime: string;
  endTime: string;
};

const artists: Artist[] = [
  { name: "C-mix", startTime: "21u00", endTime: "22u00" },
  { name: "DJ Tegel", startTime: "22u00", endTime: "23u00" },
  { name: "Tizzix", startTime: "23u00", endTime: "00u00" },
  { name: "MC Captain Soundsystem", startTime: "00u00", endTime: "01u30" },
  { name: "Miles", startTime: "01u30", endTime: "02u30" },
  { name: "RVBBE feat. MC Triss", startTime: "02u30", endTime: "03u30" },
  { name: "Flo Ryan", startTime: "03u30", endTime: "04u30" },
];

export function Lineup() {
  return (
    <section className="lineup" id="line-up">
      <div className="lineup-heading">
        <h2>
          LINE-
          <br />
          UP
        </h2>
        <p>
          LIVE &amp; LOUD <span aria-hidden="true">↓</span>
        </p>
      </div>
      <div className="artist-list">
        {artists.map((artist, index) => (
          <article className="artist" key={`${artist.startTime}-${artist.name}`}>
            <span className="artist-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{artist.name}</h3>
            <div
              className="artist-time"
              aria-label={`${artist.startTime} tot ${artist.endTime}`}
            >
              <time>{artist.startTime}</time>
              <span aria-hidden="true">—</span>
              <time>{artist.endTime}</time>
            </div>
            <a href="#tickets" aria-label={`Tickets voor ${artist.name}`}>
              <Arrow diagonal />
            </a>
          </article>
        ))}
      </div>
      <div className="lineup-stamp" aria-label="Zaterdag 3 oktober, één avond">
        <span>ZATERDAG</span>
        <strong>3 OKTOBER</strong>
        <span>ÉÉN AVOND.</span>
      </div>
    </section>
  );
}
