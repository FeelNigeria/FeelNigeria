import getValidImageUrl from "@/services/get-valid-image-url";
import { Image, SimpleGrid } from "@chakra-ui/react";
import OwlCarousel from "react-owl-carousel";
import DestinationDescription from "./DestinationDescription";

const images = [
  {
    src: 1,
    title: "Elegushi Beach",
    description:
      "A popular private beach in Lekki, Lagos, is owned by the Elegushi royal family. As one of Nigeria's top beaches, it attracts nearly 40,000 visitors weekly, with Sundays being the busiest day, accounting for over half of its weekly visitors",
  },
  {
    src: 2,
    title: "Obudu Mountain Resort",
    description:
      "Located in Cross River State, Nigeria, offers breathtaking views from the Obudu Plateau. A scenic cable car ride, introduced in 2005, spans 870 meters (2,850 ft), providing a stunning perspective while bypassing the winding road to the top",
  },
  {
    src: 3,
    title: "Zuma Rock",
    description:
      "Zuma Rock is a massive monolith located in Madalla, Niger State, Nigeria. Rising 725 meters (2,379 ft) above its surroundings, it's a prominent landmark along the Abuja-Kaduna highway and is often called the 'Gateway to Abuja from Suleja'. Composed of gabbro and granodiorite, this natural wonder is a striking feature of Nigeria's landscape.",
  },
  {
    src: 4,
    title: "La Campagne Tropicana",
    description:
      "Located in Cross River State, Nigeria, offers breathtaking views from the Obudu Plateau. A scenic cable car ride, introduced in 2005, spans 870 meters (2,850 ft), providing a stunning perspective while bypassing the winding road to the top",
  },
  {
    src: 6,
    title: "Awhum Waterfall",
    description:
      "Located in Enugu State, Nigeria, is a 30-meter high natural wonder with a unique granite rock formation. The waterfall's water is believed to have healing properties and spiritual significance. Visitors can access the falls after a 50-minute hike from the parking area, passing through scenic terrain near the Awhum Monastery, making it an attractive site for religious tourism.",
  },
  {
    src: 7,
    title: "Aso Rock",
    description:
      "Aso Rock is a prominent 400-meter granitic monolith on the outskirts of Abuja, Nigeria's capital. Rising to 936 meters above sea level, it's a defining feature of the city, surrounded by key government buildings, including the Presidential Complex, National Assembly, and Supreme Court. The name 'Aso' means 'victorious' in the local Asokoro language.",
  },
  {
    src: 8,
    title: "Assop Falls",
    description:
      "Situated on the edge of the Jos Plateau, is one of Nigeria's most notable waterfalls. Located about 64 km from Jos city on the Abuja road, it has also become a popular filming location for soap operas and advertisements.",
  },
  {
    src: 9,
    title: "Cross River National Park",
    description:
      "Cross River National Park, located in Cross River State, Nigeria, is the country's largest rainforest area and a biodiversity hotspot. The park spans about 4,000 km², featuring primary moist tropical rainforests and mangrove swamps. It borders Korup National Park in Cameroon and is home to one of Africa's oldest rainforests. The park is inhabited by 16 primate species, including rare animals like chimpanzees, drills, and Cross River gorillas",
  },
];

const carouselOptions = {
  items: 1, // one slide at a time
  loop: true, // infinite loop
  autoplay: true, // auto-advance
  animateIn: "fadeIn", // fade in new slide
  animateOut: "fadeOut", // fade out old slide
  smartSpeed: 800, // transition duration (ms)
};

export default function CarouselFade() {
  return (
    <OwlCarousel {...carouselOptions}>
      {images.map(({ src, title, description }, idx) => (
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
        >
          <Image
            src={getValidImageUrl(src, "destination")}
            alt={title}
            height={"80vh"}
            objectFit="cover"
          />
          <DestinationDescription title={title} description={description} />
        </SimpleGrid>
      ))}
    </OwlCarousel>
  );
}
