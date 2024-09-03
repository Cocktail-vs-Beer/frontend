import Image  from 'next/image';
import { CTAButton } from '../CTA';

function Navbar () {
  return (
    <nav className="flex h-16 justify-between mx-8 items-center">
      <Image
        src="/images/LogoKAJ.png"
        alt="Logo KAJ"
        width={78}
        height={64}
      />
      <ul className="text-xl flex flex-row">
        <li className="mr-8">
          <a className="uppercase font-light" href="/#lineup">
            afterwork
          </a>
        </li>
        <li className="mr-8">
          <a className="uppercase font-light" href="/#lineup">
            line up
          </a>
        </li>
        <li className="mr-8">
          <a className="uppercase font-light" href="/#faq">
            faq
          </a>
        </li>
        <li className="">
          <CTAButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
