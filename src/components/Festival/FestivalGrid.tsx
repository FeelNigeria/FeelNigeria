import getValidImageUrl from "@/services/get-valid-image-url";
import { Grid, GridItem, Image, SimpleGrid } from "@chakra-ui/react";
import OwlCarousel from "react-owl-carousel";
import getScreenSize from "@/services/get-screen-size";
import TextToContent from "./TextToContent";
import data from "./festivalData";
import Header from "../Header";
import TourBooking from "../TourBooking";

interface Props {
  standalone?: boolean;
}

const carouselOptions = {
  items: 1, // one slide at a time
  loop: true, // infinite loop
  autoplay: true, // auto-advance
  animateIn: "fadeIn", // fade in new slide
  animateOut: "fadeOut", // fade out old slide
  smartSpeed: 800, // transition duration (ms)
};

export default function CarouselFade({ standalone }: Props) {
  const screenSize = getScreenSize();
  const isMobile = ["mobile", "small"].includes(screenSize || "");

  const height = isMobile ? "40vh" : "80vh";
  const imageJsx = (title: string, filename: string) => (
    <Image
      src={getValidImageUrl(1, "", filename)}
      alt={title}
      height={height}
      objectFit="cover"
      m={0}
      className="px-1 py-1 img-fluid rounded"
    />
  );
  const templateColumns = {
    base: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(2, 1fr)",
  };

  const gridOptions = {
    templateColumns,
    gap: 3,
    className: "bg-light",
    m: 0,
  };

  const renderGrid = () => (
    <Grid {...gridOptions}>
      {data.map(({ filename, title, description }, idx) => (
        <GridItem key={idx}>
          {imageJsx(title, filename)}
          <TextToContent data={description} standalone={standalone} />
        </GridItem>
      ))}
    </Grid>
  );

  const renderCarousel = () => (
    <OwlCarousel {...carouselOptions} className="owl-carousel bg-light">
      {data.map(({ filename, title, description }, idx) => (
        <SimpleGrid templateRows="repeat(1, 1fr)" {...gridOptions} key={idx}>
          {isMobile ? (
            <>
              {imageJsx(title, filename)}
              <TextToContent data={description} />
            </>
          ) : (
            <>
              <TextToContent data={description} />
              {imageJsx(title, filename)}
            </>
          )}
        </SimpleGrid>
      ))}
    </OwlCarousel>
  );

  if (standalone) {
    return (
      <>
        <Header child="Festival Highlights" linkName="Festivals" />
        <div className="pb-2">{renderGrid()}</div>
        <TourBooking />
      </>
    );
  }

  return renderCarousel();
}
