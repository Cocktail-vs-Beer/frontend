"use client";

import Image  from 'next/image';
import { CTAButton } from '../CTA';
import { useMediaQuery } from '../../hooks/use-media-query';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from '../ui/button';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

function Navbar () {
  return (
    <nav className="flex h-16 justify-between mx-8 items-center">
      <Image
        src="/images/LogoKAJ.png"
        alt="Logo KAJ"
        width={78}
        height={64}
      />
      <Nav />
    </nav>
  );
};

function Nav() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if(isDesktop) {
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
    )
  }

  return (
    <CTAButton />
  )

  // return (
  //   <Drawer direction="right">
  //     <DrawerTrigger>
  //       <HamburgerMenuIcon width="25" height="25" viewBox="0 0 25 25" />
  //     </DrawerTrigger>
  //     <DrawerContent className="flex-col-reverse">
  //       <DrawerDescription className="py-4">
  //         <ul className="text-2xl text-white ml-8 mb-8">
  //           <li className="mb-8">
  //             <a className="uppercase font-light" href="/#lineup">
  //               afterwork
  //             </a>
  //           </li>
  //           <li className="mb-8">
  //             <a className="uppercase font-light" href="/#lineup">
  //               line up
  //             </a>
  //           </li>
  //           <li className="mb-8">
  //             <a className="uppercase font-light" href="/#faq">
  //               faq
  //             </a>
  //           </li>
  //           <li>
  //             <CTAButton />
  //           </li>
  //         </ul>
  //       </DrawerDescription>
  //       <DrawerFooter>
  //       </DrawerFooter>
  //     </DrawerContent>
  //   </Drawer>
  // )
}

export default Navbar;
