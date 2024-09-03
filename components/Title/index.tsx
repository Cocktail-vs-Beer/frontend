import './style.css';

export default function Title(props: React.withChildren) {
  return (
    <div className="relative">
      <h2 title={props.children} className={`title md:text-8xl text-6xl after:w-max text-stroke after:text-secondary uppercase font-bold font-montserrat`}>{props.children}</h2>
    </div>
  )
}
