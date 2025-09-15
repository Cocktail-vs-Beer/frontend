"use client";

import Image from "next/image";
import { CTAButton } from "../CTA";
import { useMediaQuery } from "../../hooks/use-media-query";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex h-16 justify-between mx-8 items-center">
      <Link href="/">
        <Image
          src="/images/LogoKAJ.png"
          alt="Logo KAJ"
          width={78}
          height={64}
        />
      </Link>
      <Nav />
    </nav>
  );
}

function Nav() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
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
    );
  }

  return <CTAButton />;
}

export default Navbar;
