import { Image } from "@chakra-ui/react";

export interface PackageItemProps {
  src: string;
  description: string;
  duration: number;
  people: number;
  price: string;
}

const PackageImageItem = ({
  src,
  description,
  duration,
  // price,
  people,
}: PackageItemProps) => {
  return (
    <div className="packages-img">
      <Image src={src} className="img-fluid w-100 rounded-top" alt="Image" filter="brightness(70%)"></Image>
      <div
        className="packages-info d-flex border border-start-0 border-end-0 position-absolute"
        style={{ width: "100%", bottom: 0, left: 0, zIndex: 5 }}
      >
        <small className="flex-fill text-center border-end py-2">
          <i className="fa fa-map-marker-alt me-2"></i>
          {description}
        </small>
        <small className="flex-fill text-center border-end py-2">
          <i className="fa fa-calendar-alt me-2"></i>
          {duration} Days
        </small>
        <small className="flex-fill text-center py-2">
          <i className="fa fa-user me-2"></i>
          {people} Person
        </small>
      </div>
      {/* <div className="packages-price py-2 px-3 fw-bold">${price}</div> */}
    </div>
  );
};

export default PackageImageItem;
