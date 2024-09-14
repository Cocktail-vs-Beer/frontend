import Link from 'next/link';
import Title from '../Title';
import './style.css';

const lineup = [
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
    <section id="lineup" className="">
      <Title>Line up</Title>
      <div className="md:mt-24 mt-16 flex md:flex-row flex-col md:mx-auto md:w-3/4 w-full gap-4">
        <div className="md:w-1/2 bg-[url('/images/26.jpg')] aspect-square grid-element">
          <p className="font-trainone uppercase text-2xl bg-clip-text bg-gradient-to-r from-white to-lightblue text-transparent w-fit">Jaël Ost & Magik</p>
          <p>01:30 - 02:30</p> 
        </div>
        <div className="flex flex-wrap gap-4 md:w-1/2">
          <div className="bg-[url('/images/proudmich.jpg')] grow basis-0 grid-element sm:h-auto h-[180px]">
            <p className="font-trainone uppercase text-xl bg-clip-text bg-gradient-to-r from-white to-lightblue text-transparent w-fit">Proudmich</p>
            <p>02:30 - 03:30</p>
          </div>
          <div className="grow basis-0 grid-element sm:h-auto h-[180px] bg-[url('/images/simplex.jpg')]">
            <p className="font-trainone uppercase text-xl bg-clip-text bg-gradient-to-r from-white to-lightblue text-transparent w-fit">Sïmplex</p>
            <p>23:30 - 00:30</p>
          </div>
          <div className="w-full grow-0 grid-element bg-[url('/images/two_for_you.jpg')] sm:h-auto h-[200px]">
            <p className="font-trainone uppercase text-xl bg-clip-text bg-gradient-to-r from-white to-lightblue text-transparent w-fit">Two for you</p>
            <p>22:00 - 23:30</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex md:flex-row flex-col md:mx-auto md:w-3/4 w-full gap-4">
        <div className="flex flex-wrap-reverse md:flex-wrap gap-4  md:w-1/2">
          <div className="w-full sm:h-auto h-[200px] bg-[url('/images/studio_chewie.jpg')] grow grid-element">
            <p className="font-trainone uppercase text-xl bg-clip-text bg-gradient-to-r from-white to-lightblue text-transparent w-fit">Studio chewie</p>
            <p>03:30 - 04:30</p>
          </div>
          <div className="grow basis-0 grid-element sm:h-auto h-[180px]">
            <p className="font-trainone uppercase text-xl bg-clip-text bg-gradient-to-r from-white to-lightblue text-transparent w-fit">DJ contest</p>
            <p>21:00 - 22:00</p>
          </div>
          <div className="basis-0 grow sm:h-auto h-[180px] text-xl uppercase flex items-center justify-center flex-col bg-gradient-to-br from-lightblue to-primary">
            <Link href="/tickets" className='text-center'>
              Koop hier je <br/>
              <span className="text-lightblue font-bold">TICKETS</span>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 bg-[url('/images/karakals.jpg')] aspect-square grid-element">
          <p className="font-trainone uppercase text-2xl bg-clip-text bg-gradient-to-r from-white to-lightblue text-transparent w-fit">Karakals</p>
          <p>00:30 - 01:30</p> 
        </div>
      </div>
    </section>
  );
};
