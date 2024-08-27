import { Separator } from "../ui/separator";
import type { TLineup } from "../../lib/types/Lineup";

const lineup: Array<TLineup> = [
  { timeslot: "21:00-22:00", name: "DJ contest winnaar" },
  { timeslot: "22:00-23:30", name: "Two for you" },
  { timeslot: "23:30-00:30", name: "Sïmplex" },
  { timeslot: "00:30-01:30", name: "Karakals" },
  { timeslot: "01:30-02:30", name: "Magik ft Jaël Ost" },
  { timeslot: "02:30-03:30", name: "Proudmich" },
  { timeslot: "03:30-04:30", name: "Studio Chewie" },
];

export default function Lineup() {
  return (
    <section id="lineup" className="text-center">
      <h2 className="text-4xl font-sans font-bold">Line up</h2>
      <div className="flex mt-6 justify-center">
        <div>
          {lineup.map(({ timeslot }, index) => (
            <p key={index} className="text-2xl text-left py-2 pr-8">{timeslot}</p>
          ))}
        </div>
        <Separator className='h-auto' orientation='vertical' />
        <div>
          {lineup.map(({ name }, index) => (
            <p key={index} className="text-2xl py-2 pl-8 text-right">{name}</p>
          ))}
        </div>
      </div>
    </section>
  );
};
