import { Separator } from '../ui/separator';

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
      <h2 className="text-4xl font-sans font-bold">Waves</h2>
      <div className="flex mt-6 justify-center">
        <div>
          {waves.map(({ name }, index) => (
            <p key={index} className="text-2xl text-left py-2 pr-4">{name}</p>
          ))}
        </div>
        <Separator className='h-auto' orientation='vertical' />
        <div>
          {waves.map(({ price }, index) => (
            <p key={index} className="text-2xl py-2 pl-4">{price}</p>
          ))}
        </div>
      </div>
    </section>
  );
};
