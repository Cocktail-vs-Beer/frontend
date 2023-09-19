import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

interface sponsorProps {
  sponsors: Array<{
    src: string;
  }>;
}

const Sponsors = ({ sponsors }: sponsorProps) => {
  return (
    <section className="c-lineup o-row">
      <h2 className="c-lineup__title">Onze sponsors</h2>
      <Carousel className="c-sponsors" 
        infiniteLoop={true}
        interval={3000}
        transitionTime={500}
        showThumbs={false}
        autoPlay={true}
        showArrows={false}
        centerSlidePercentage={40}
        centerMode={true}
        showStatus={false}
      >
        {sponsors.map((sponsor, index) => (
            <img
              className="c-sponsors__img"
              src={sponsor.src}
              srcSet={sponsor.src}
              alt={`sponsor-${index}`}
              loading="lazy"
              key={index}
            />
        ))}
      </Carousel>
    </section>
  );
};

export default Sponsors;
