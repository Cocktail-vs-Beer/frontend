import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import LogoCocktail from "../../../public/images/LogoCocktail.svg";
import Close from "../../../public/images/Close.svg";

const Counter = () => {
  const [amount, setAmount] = useState(1);

  function increase() {
    setAmount(amount + 1);
  }

  function decrease() {
    setAmount(amount - 1 >= 1 ? amount - 1 : amount);
  }

  return (
    <>
      <button
        className="c-counter__button c-counter__button--left"
        type={"button"}
        onClick={decrease}
      >
        -
      </button>
      <input
        className="c-counter__input"
        type="number"
        name="counter"
        id="counter"
        value={amount}
      />
      <button
        className="c-counter__button c-counter__button--right"
        type={"button"}
        onClick={increase}
      >
        +
      </button>
    </>
  );
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  Modal.setAppElement("#__next");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [isOpen]);

  return (
    <section className="c-hero o-row o-row--xl">
      <LogoCocktail className="c-hero__logo" />
      <h1>
        zaterdag 2 oktober
        <br />
        2021
      </h1>
      <button className="c-hero__cta" onClick={openModal}>
        Bestel ticket
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Bestel Tickets"
        className="c-ticketmodal"
        overlayClassName="c-ticketmodal-overlay"
      >
        <div className="c-ticketmodal__container">
          <div className="c-ticketmodal-header">
            <Close className="c-ticketmodal-header__svg" onClick={closeModal} />
          </div>
          <form>
            <Counter />
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default Hero;
