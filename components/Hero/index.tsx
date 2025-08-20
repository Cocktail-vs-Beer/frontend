import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col mt-16 justify-center items-center">
      <Image
        className="md:w-[380px] w-[70%]"
        src="/images/LogoCocktail.png"
        alt="Logo Cocktail vs Beer"
        width={600}
        height={400}
      ></Image>
      <div className="text-center text-4xl mt-12">
        <h2 className="font-trainone text-5xl md:text-6xl">ZATERDAG</h2>
        <h2 className="font-trainone text-4xl md:text-6xl md:mt-6 mt-2">
          4 OKTOBER 2025
        </h2>
      </div>
    </section>
  );
}
