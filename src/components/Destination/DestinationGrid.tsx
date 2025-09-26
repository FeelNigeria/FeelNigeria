import { Grid, GridItem, Image } from "@chakra-ui/react";
import destinationImg1 from "../assets/img/destination-1.jpg";
import getValidImageUrl from "@/services/get-valid-image-url";
import DestinationOverlay from "./DestinationOverlay";
import getScreenSize from "@/services/get-screen-size";


const DestinationGrid = () => {
  const imageArray = [
    { item: 1, location: "Elegushi Beach" },
    { item: 2, location: "Obudu Mountain Resort" },
    { item: 3, location: "Zuma Rock" },
    { item: 4, location: "La Campagne Tropicana Beach" },
    { item: 5, location: "Obudu Cattle Ranch" },
    { item: 6, location: "Awhum Water Fall" },
    { item: 7, location: "Aso Rock" },
    { item: 8, location: "Assop Falls & River" },
  ];

  const screenSize = getScreenSize()
  
  return (
    <div className="container-fluid destination">
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        {imageArray.map(({ item, location }) => {
          const href = getValidImageUrl(item, "destination");
          const rowSpan = item === 3 && screenSize !== 'medium' ? 2 : 1;
          const height = item === 3 && screenSize !== 'medium' ? "520px" : "250px";

          return (
            <GridItem key={item} rowSpan={rowSpan}>
              <div className="destination-img">
                <Image
                  className="img-fluid rounded w-100"
                  src={href}
                  alt=""
                  height={height}
                  width={"100%"}
                  objectFit={"cover"}
                />
                <DestinationOverlay
                  location={location}
                  dataLightbox={`${item}`}
                  img={destinationImg1}
                />
              </div>
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
};

export default DestinationGrid;
