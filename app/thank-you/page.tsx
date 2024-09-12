import Image from "next/image";

export default function Page() {
  return (
    <div className="md:container mx-auto text-center flex flex-col justify-center items-center">
        <Image className="md:w-[380px] w-[70%] mt-24" src="images/LogoCocktail.svg" alt="Logo Cocktail vs Beer" width={600} height={400} ></Image>
        <h2 className="text-2xl font-bold mt-8">Bedankt voor je bestelling</h2>
        <p className="md:w-3/4 mt-2 w-full">We hebben je bestelling goed ontvangen. Je ontvangt zometeen een e-mail van ons met je tickets.
            Zorg zeker dat je deze tickets bij je hebt op het moment van Cocktail vs Beer.</p>
    </div>
  )
}