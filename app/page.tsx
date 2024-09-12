import FAQ from '../components/FAQ';
import Hero from '../components/Hero';
import Lineup from '../components/Lineup';
import Waves from '../components/Waves';

export default function Page() {
  return (
    <>
      <div className="h-[calc(100vh-6rem)] overflow-hidden">
        <div className="absolute z-[-2] h-screen top-0 right-0 w-full bg-no-repeat bg-cover bg-[url('/images/background.png')]">
          <div className="absolute z-[-1] h-screen top-0 right-0 w-full" style={{ background: 'linear-gradient(135.78deg, rgba(101,192,223,0) -21.98%, rgba(20,18,40,0.7) 31.34%, rgba(57,20,50,07) 63.02%, rgba(231,32,96,0.7) 133.74%)'}}></div> 
        </div>
        <Hero />
      </div>
      <Lineup />
      <FAQ />
    </>
  )
}
