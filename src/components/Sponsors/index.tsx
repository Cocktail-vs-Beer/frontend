import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

interface sponsorProps {
  sponsors: Array<{
    src: string;
    width: number;
    height: number;
  }>;
}

const Sponsors = ({ sponsors }: sponsorProps) => {
  if (sponsors && sponsors.length > 0) {
    return (
      <section className="c-lineup o-row">
        <h2 className="c-lineup__title">Sponsors</h2>
        <ImageList className="c-sponsors" variant="masonry" cols={2} gap={16}>
          {sponsors ? (
            sponsors.map((sponsor, index) => (
              <ImageListItem key={`sponsor-${index}`}>
                <img
                  className="c-sponsors__img"
                  src={sponsor.src}
                  srcSet={sponsor.src}
                  alt={`sponsor-${index}`}
                  loading="lazy"
                />
              </ImageListItem>
            ))
          ) : (
            <></>
          )}
        </ImageList>
      </section>
    );
  } else {
    return <></>;
  }
};

export default Sponsors;
