import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="c-navbar">
      <Image
        src="/images/LogoKAJ.png"
        alt="Logo KAJ"
        className="c-navbar__logo"
        width="74"
        height="64"
      />
      <ul className="c-navbar__list">
        <li className="c-navbar__list-item">faq</li>
        <li className="c-navbar__list-item">line up</li>
        <li className="c-navbar__list-item">
          <button>bestel ticket</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
