import React, { Fragment, useEffect, useState } from "react";
import Modal from "react-modal";

import LogoCocktail from "../../../public/images/LogoCocktail.svg";
import Close from "../../../public/images/Close.svg";
import { IInputList } from "../../types/InputList";

const Counter = ({ setNumberOfTickets, numberOfTickets }: any) => {
  const [amount, setAmount] = useState(numberOfTickets);

  function increase() {
    const newAmount = amount + 1;
    setAmount(newAmount);
    setNumberOfTickets(newAmount);
  }

  function decrease() {
    const newAmount = amount - 1 >= 1 ? amount - 1 : amount;
    setAmount(newAmount);
    setNumberOfTickets(newAmount);
  }

  return (
    <div className="c-counter">
      <label htmlFor="counter" className="c-counter__label">
        aantal tickets
      </label>
      <div className="c-counter__container">
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
          readOnly
        />
        <button
          className="c-counter__button c-counter__button--right"
          type={"button"}
          onClick={increase}
        >
          +
        </button>
      </div>
    </div>
  );
};

const Hero = ({ numberOfTickets, setNumberOfTickets }: any) => {
  const ticketPrice = 6;
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState(numberOfTickets);

  const [formvalues, setFormvalues] = useState({ naam: "", email: "" });
  const [buttonString, setButtonString] = useState("");

  Modal.setAppElement("#__next");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleInputValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
  }

  function setNewTicketNumber(_amount: number) {
    setAmount(_amount);
    setNumberOfTickets(_amount);
  }

  function calcPayAmount(ticketAmount: number) {
    return ticketAmount * ticketPrice;
  }

  useEffect(() => {
    setButtonString(
      `betaal €${calcPayAmount(numberOfTickets).toLocaleString("be-NL", {
        minimumFractionDigits: 2,
      })}`
    );
  }, [numberOfTickets]);

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
          <form className="c-orderform">
            <Counter
              setNumberOfTickets={setNewTicketNumber}
              numberOfTickets={numberOfTickets}
            />

            <div className="c-orderform__inputcontainer">
              <label htmlFor="name">
                naam
                <br></br>
                <input
                  className="c-orderform__input"
                  name="naam"
                  value={formvalues.naam}
                  onChange={(e) => handleInputValueChange(e)}
                />
              </label>
              <label htmlFor="email" className="c-orderform__label">
                e-mail
                <br></br>
                <input
                  className="c-orderform__input"
                  type="email"
                  name="email"
                  value={formvalues.email}
                  onChange={(e) => handleInputValueChange(e)}
                />
              </label>
              <button type="button" className="c-orderform__button">
                {buttonString}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default Hero;
