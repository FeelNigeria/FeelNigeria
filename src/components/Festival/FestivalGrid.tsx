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

  const height = ["mobile", "small"].includes(screenSize || "")
    ? "40vh"
    : "80vh";

  if (standalone) {
    return (
      <>
        <Header child="Festival Highlights" linkName="Festivals" />
        <div className="pb-2">
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)",
            }}
            gap={3}
            className="bg-light"
            m={0}
          >
            {data.map(({ filename, title, description }, idx) => (
              <GridItem key={idx}>
                <Image
                  src={getValidImageUrl(1, "", filename)}
                  alt={title}
                  height={height}
                  objectFit="cover"
                  m={0}
                  className="px-2 py-2 img-fluid rounded"
                />
                <TextToContent data={description} />
              </GridItem>
            ))}
          </Grid>
        </div>
        <TourBooking />
      </>
    );
  }

  return (
    <OwlCarousel {...carouselOptions} className="owl-carousel bg-light">
      {data.map(({ filename, title, description }, idx) => (
        <SimpleGrid
          templateRows="repeat(1, 1fr)"
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          key={idx}
          gap={3}
          className="bg-light"
          m={0}
        >
          <TextToContent data={description} />
          <Image
            src={getValidImageUrl(1, "", filename)}
            alt={title}
            height={height}
            objectFit="cover"
            m={0}
          />
        </SimpleGrid>
      ))}
    </OwlCarousel>
  );
}
