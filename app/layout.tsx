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
    <html lang="en" className={`bg-secondary text-white font-montserrat scroll-smooth`}>
      <body> 
        <div className='my-8 mx-4 min-h-screen'>
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
