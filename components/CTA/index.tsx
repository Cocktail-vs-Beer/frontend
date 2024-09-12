import Link from 'next/link';

export function CTAButton() {
  return (
    <Link href="/tickets" className="uppercase py-2 px-4 rounded-[8px] cursor-pointer font-bold"
    style={{
      background: "linear-gradient(130.42deg, #26e7d0 4.38%, #152d81 92.94%)",
      boxShadow: "0px 0px 40px 20px rgba(255,255,255,0.08)",
    }}>tickets</Link>
  )
}
