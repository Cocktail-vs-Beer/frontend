"use client";

import { Suspense } from 'react';
import OrderForm from '../../components/OrderForm';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const refDate = new Date("2024-09-12T18:00:00");
  const searchParams = useSearchParams();

  console.log(refDate)
  if (refDate > new Date() && !(searchParams.get("debug") === 'true')) {
    return(
      <Suspense fallback={<Loading />}>
        <div className="mt-24 text-center">
          <h2>De tickets zijn beschikbaar vanaf 18u00</h2>
        </div>
      </Suspense>
    )
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="container mx-auto md:w-1/3 mt-16">
        <OrderForm price={6}/> 
      </div>
    </Suspense>
  )
}

function Loading() {
  return (
    <div className="mt-24 text-center">
      <h2>De tickets zijn beschikbaar vanaf 18u00</h2>
    </div>
  )
}
