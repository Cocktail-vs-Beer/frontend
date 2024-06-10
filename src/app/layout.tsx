import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

import '../styles/settings/_mixins.scss';
import '../styles/settings/colors.scss';
import '../styles/settings/fonts.scss';
import '../styles/objects/container.scss';
import '../styles/elements/page.scss';

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
    <html lang="en">
      <body>
        <div className="o-container">
          <Navbar/>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
