import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <Image
        src="/images/LogoKAJ.png"
        alt="Logo KAJ"
        className="c-navbar__logo"
        width="74"
        height="64"
      />
      <ul>
        <li>faq</li>
        <li>line up</li>
        <li>
          <button>bestel ticket</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
