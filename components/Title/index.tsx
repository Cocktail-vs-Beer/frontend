import { PropsWithChildren } from 'react';
import './style.css';

export default function Title(props: PropsWithChildren<{}>) {
  return (
    <div className="relative text-center">
      <h2 title={props.children as string} className={`title md:text-8xl text-6xl after:w-max text-stroke after:text-secondary uppercase font-bold font-montserrat`}>{props.children}</h2>
    </div>
  )
}
