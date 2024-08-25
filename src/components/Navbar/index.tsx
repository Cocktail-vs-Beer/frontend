import React from "react";
import '../../styles/components/navbar.scss';

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <img
        src="/images/LogoKAJ.png"
        alt="Logo KAJ"
        className="c-navbar__logo"
      />
      <ul className="c-navbar__list font-light">
        <li className="c-navbar__list-item">
          <a className="c-navbar__nav-link" href="/#lineup">
            line up
          </a>
        </li>
        <li className="c-navbar__list-item">
          <a className="c-navbar__nav-link" href="/#faq">
            faq
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
