import './global.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import Script from 'next/script';

export const metadata = {
  title: 'Cocktail vs Beer',
  description: 'Een leuk fuifje',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`bg-secondary text-white font-montserrat scroll-smooth`}>
      <Script defer data-domain="cocktailvsbeer.be" src="https://analytics.cocktailvsbeer.be/js/script.js" />
      <Script defer data-domain="cocktailvsbeer.be" src="https://analytics.cocktailvsbeer.be/js/script.tagged-events.js"/>
      <body> 
        <div className='my-8 mx-4 min-h-[calc(100vh-120px)]'>
          <Navbar/>
          <div className='space-y-28'>
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  )
}
