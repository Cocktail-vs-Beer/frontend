import './global.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

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
    <html lang="en" className='bg-secondary text-white font-sans font-light scroll-smooth'>
      <body>
        <div className='my-8 mx-4'>
          <Navbar/>
          <div className='space-y-8'>
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  )
}
