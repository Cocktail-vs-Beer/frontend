import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="c-navbar">
      <img
        src="/images/LogoKAJ.png"
        alt="Logo KAJ"
        className="c-navbar__logo"
      />
      <ul className="c-navbar__list">
        <li className="c-navbar__list-item">faq</li>
        <li className="c-navbar__list-item">line up</li>
      </ul>
    </nav>
  );
};

export default Navbar;
