import OrderForm from '../../components/OrderForm';

export default function Page() {
  return (
    <div className="container mx-auto md:w-1/3 mt-16">
      <OrderForm price={6}/> 
    </div>
  )
}
