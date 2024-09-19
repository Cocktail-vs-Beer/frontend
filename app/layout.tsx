import './global.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import Head from 'next/head';

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
      <Head>
        <script defer data-domain="cocktailvsbeer.be" src="https://analytics.cocktailvsbeer.be/js/script.js"></script>
      </Head>
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
