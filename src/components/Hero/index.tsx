import React, { useEffect, useState } from "react";
import * as Sentry from '@sentry/nextjs';
import Modal from "react-modal";

import LogoCocktail from "../../../public/images/LogoCocktail.svg";
import Close from "../../../public/images/Close.svg";
import { post, useDevelopment } from "../../services/api";
import Loader from "../Loader";

const Counter = ({
  setNumberOfTickets,
  numberOfTickets,
  maxNoOfTickets,
}: any) => {
  const [amount, setAmount] = useState(numberOfTickets);

  function increase() {
    const newAmount = amount + 1;
    if (newAmount > maxNoOfTickets) return;
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
  const ticketPrice = 7;
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState(numberOfTickets);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [soldOut, setSoldOut] = useState(true);
  const [timeout, setTimeout] = useState(false);

  useEffect(() => {
    // if(new Date() < new Date(2022, 8, 11, 19, 30, 0)){
    //   setSoldOut(true);
    // } else {
    //   setTimeout(false);
    //   setSoldOut(false);
    // }
  })

  const [formvalues, setFormvalues] = useState({
    naam: "",
    email: "",
    lastName: "",
  });
  const [buttonString, setButtonString] = useState("");

  Modal.setAppElement("#__next");

  function openModal() {
    // if(new Date() < new Date(2022, 9, 10, 19, 30)){
    //   setTimeout(true);
    // } else {
    //   setTimeout(false);
    //   setIsOpen(true);
    // }
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleInputValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
    if (name === "naam") {
      setNameError(false);
    } else if (name === "email") {
      setEmailError(false);
    } else if (name === "lastName") {
      setLastNameError(false);
    }
  }

  function setNewTicketNumber(_amount: number) {
    setAmount(_amount);
    setNumberOfTickets(_amount);
  }

  function calcPayAmount(ticketAmount: number) {
    return ticketAmount * ticketPrice;
  }

  function isValidEmail(email: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  function validateForm() {
    let valid = true;
    const firstName = formvalues.naam.trim();
    const lastName = formvalues.lastName.trim();
    const email = formvalues.email.trim();

    if (!firstName || firstName.length < 3 || firstName.length > 30) {
      setNameError(true);
      valid = false;
    }
    if (!lastName || lastName.length < 3 || lastName.length > 30) {
      setLastNameError(true);
      valid = false;
    }
    if (!email || !isValidEmail(email)) {
      setEmailError(true);
      valid = false;
    }

    return valid;
  }

  async function handleSubmit() {
    if (!validateForm()) return;
    if (isLoading) return;

    try {
      setIsLoading(true);
      const [err, url] = await post("/order", {
        firstName: formvalues.naam,
        lastName: formvalues.lastName,
        email: formvalues.email,
        quantity: amount,
      });

      if (!err && url) window.location.href = url;
      else if (err) {
        switch (err.errorKey) {
          case "soldOut":
            setError("Helaas, alle tickets zijn uitverkocht!");
            break;
          case "tooMany":
            if (err.message === "1")
              setError("Er is nog maar 1 ticket beschikbaar. Wees snel!");
            else
              setError(
                `Er zijn nog maar ${err.message} ticket(s) beschikbaar. Wees snel!`
              );
            break;
          case "waveNotStarted":
            setError(
              "Nog even geduld. De tickets zijn binnenkort beschikbaar."
            );
            break;
          default:
            setError(
              "Er is een onverwachte fout opgetreden. Probeer het later opnieuw."
            );
            break;
        }
      }
    } catch (err) {
      Sentry.captureException(err);      
      setError(
        "Er is een onverwachte fout opgetreden. Probeer het later opnieuw."
      );
    } finally {
      setIsLoading(false);
    }
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
      <div className="c-hero__date-container">
        <h1 className="c-hero__date-day">ZATERDAG</h1>
        <h1 className="c-hero__date-date">1 OKTOBER 2022</h1>
      </div>
      {soldOut ? (
        <button className="c-hero__cta">Bestel binnenkort</button>
      ) : (
        <button className="c-hero__cta" onClick={openModal}>
          Bestel ticket
        </button>
      )}
      {timeout && <p>De tickets zijn beschikbaar vanaf 19:30 uur.</p>}
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
            <div className="c-orderform__inputcontainer">
              <Counter
                setNumberOfTickets={setNewTicketNumber}
                numberOfTickets={numberOfTickets}
                maxNoOfTickets={10}
              />
              <label className="c-orderform__label" htmlFor="name">
                Voornaam
                <br></br>
                <input
                  type="text"
                  autoComplete="nope"
                  autoCapitalize="true"
                  className="c-orderform__input"
                  name="naam"
                  value={formvalues.naam}
                  onChange={(e) => handleInputValueChange(e)}
                  style={nameError ? { borderColor: "#e72060" } : {}}
                />
              </label>
              <label className="c-orderform__label" htmlFor="name">
                Achternaam
                <br></br>
                <input
                  type="text"
                  autoComplete="nope"
                  autoCapitalize="true"
                  className="c-orderform__input"
                  name="lastName"
                  value={formvalues.lastName}
                  onChange={(e) => handleInputValueChange(e)}
                  style={lastNameError ? { borderColor: "#e72060" } : {}}
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
                  style={emailError ? { borderColor: "#e72060" } : {}}
                  onChange={(e) => handleInputValueChange(e)}
                />
              </label>
              {error && <p className="c-orderform__error">{error}</p>}
              <button
                type="button"
                className="c-orderform__button"
                onClick={handleSubmit}
              >
                {isLoading ? <Loader /> : buttonString}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default Hero;
