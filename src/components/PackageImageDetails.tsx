import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import PackageContent from "./PackageContent";
import PackageImageItem from "./PackageImageItem";

interface imageItemDetail {
  src: string;
  description: string;
  duration: number;
  people: number;
  price: string;
  title: string;
  subtitle: string;
  rating: number;
  fullDescription: string;
}

const imageItemDetails: imageItemDetail[] = [
  {
    src: "src/assets/img/packages-4.jpg",
    description: "Cultural Heritage Package",
    duration: 3,
    people: 2,
    price: "349.00",
    title: "Cultural Heritage Package",
    subtitle: "Hotel Deals",
    rating: 5,
    fullDescription: `Discover Nigeria’s rich cultural legacy through visits to ancient
              kingdoms, historical museums, and vibrant cultural festivals. Gain
              deep insights into the traditions and history that shape the
              nation.
              `,
  },
  {
    src: "src/assets/img/packages-2.jpg",
    description: "Adventure Package",
    duration: 3,
    people: 2,
    price: "449.00",
    title: "Adventure Package",
    subtitle: "Hotel Deals",
    rating: 5,
    fullDescription: `Embark on an exhilarating journey filled with outdoor activities private guided tours, and personalized services designed for an indulgent escape.`,
  },
  {
    src: "src/assets/img/packages-3.jpg",
    description: "Food and Wine Package",
    duration: 3,
    people: 2,
    price: "549.00",
    title: "Food and Wine Package",
    subtitle: "Hotel Deals",
    fullDescription: `Savor the flavors of Nigeria’s diverse culinary scene with
              exclusive traditional cooking classes and curated wine
              tastings, offering a delightful gastronomic experience.`,
    rating: 5,
  },
  {
    src: "src/assets/img/packages-3.jpg",
    description: "Luxury Retreat Package",
    duration: 3,
    people: 2,
    price: "549.00",
    title: "Luxury Retreat Package",
    subtitle: "Hotel Deals",
    fullDescription: `Experience unparalleled comfort with premium accommodations,
              private guided tours, and personalized services designed for an
              indulgent escape.`,
    rating: 5,
  },
  {
    src: "src/assets/img/packages-3.jpg",
    description: "Wildlife & Nature Package",
    duration: 3,
    people: 2,
    price: "549.00",
    title: "Wildlife & Nature Package",
    subtitle: "Hotel Deals",
    fullDescription: `Explore Nigeria’s breathtaking national parks and wildlife
              reserves, encountering exotic species in their natural habitat.`,
    rating: 5,
  },
  {
    src: "src/assets/img/packages-1.jpg",
    description: "Romance Package",
    duration: 3,
    people: 2,
    price: "649.00",
    fullDescription: `Create lasting memories with a romantic getaway that includes
              luxurious accommodations, couples’ spa treatments, and intimate
              sunset dinners.`,
    subtitle: `Hotel Deals`,
    title: "Romance Package",
    rating: 5,
  },
];

const PackageImageDetails = () => {
  const options = {
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
    nav: false,
    dots: true,
  };

  return (
    <div
      className="packages-carousel"
      style={{ marginLeft: "50px", marginRight: "50px" }}
    >
      <OwlCarousel
        className="owl-theme section"
        loop
        margin={25}
        items={3}
        autoplay
        {...options}
      >
        {imageItemDetails.map((item) => (
          <div className="packages-item review item" key={item.fullDescription}>
            <PackageImageItem
              src={item.src}
              description={item.description}
              duration={item.duration}
              people={item.people}
              price={item.price}
              key={item.fullDescription}
            />
            <PackageContent
              title={item.title}
              description={item.fullDescription}
              rating={item.rating}
              subtitle={item.subtitle}
              key={item.title}
            />
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default PackageImageDetails;
