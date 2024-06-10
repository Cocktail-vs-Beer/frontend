import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { get } from "../services/api";

export default function ReservedPayment() {
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const { orderId } = router.query;
    setError('');
    if (!orderId) return setError('Order niet gevonden.');
    
    getPaymentLink(orderId as string);
  }, [router])

  async function getPaymentLink(orderId: string) {
    const [error, paymentUrl] = await get(`/order/${orderId}/payment`);

    if(error) {
      switch(error.errorKey) {
        case 'notFound':
          setError('Reservatie kon niet gevonden worden');
          break;
        case 'invalidState':
          setError('Reservatie ongeldig.')
          break;
        default:
          setError('Er is een onverwachte fout opgetreden');
          break;
      }
    } else if (paymentUrl) {
      window.location.href = paymentUrl;
    }
  }

  return (
    <>
      <div className="o-container">
        <Navbar />
        <section className='c-reservation-container'>
          <h2>Reservatie betalen</h2>
          {!error && <Loader />}
          { error && <p className="c-orderform__error">{error}</p>}
        </section>
      </div>
      <Footer />
    </>
  )
}