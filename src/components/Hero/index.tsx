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
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState(numberOfTickets);
  const [inputList, setInputList] = useState<Array<IInputList>>([
    { naam: "", email: "" },
  ]);

  Modal.setAppElement("#__next");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleInputValueChange(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  }

  function handleRemoveInputField() {
    console.log("remove input");

    const list = [...inputList];
    list.splice(-1);
    setInputList(list);
  }
  function handleAddInputField() {
    console.log("add input");
    setInputList([...inputList, { naam: "", email: "" }]);
  }

  function handleNewTicketAmount(_amount: number) {
    if (_amount > amount) {
      setNumberOfTickets(_amount);
      setAmount(_amount);
      handleAddInputField();
    } else if (_amount < amount) {
      setNumberOfTickets(_amount);
      setAmount(_amount);
      handleRemoveInputField();
    }
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
          <form className="c-orderform">
            <Counter
              setNumberOfTickets={handleNewTicketAmount}
              numberOfTickets={numberOfTickets}
            />

            {inputList.map((input, index) => (
              <div
                className="c-orderform__inputcontainer"
                key={`inputlist-${index}`}
              >
                <label htmlFor="name">
                  naam
                  <br></br>
                  <input
                    className="c-orderform__input"
                    name="naam"
                    value={input.naam}
                    onChange={(e) => handleInputValueChange(e, index)}
                  />
                </label>
                <label htmlFor="email" className="c-orderform__label">
                  e-mail
                  <br></br>
                  <input
                    className="c-orderform__input"
                    type="email"
                    name="email"
                    value={input.email}
                    onChange={(e) => handleInputValueChange(e, index)}
                  />
                </label>
              </div>
            ))}
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default Hero;
