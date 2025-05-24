import { Link } from "react-router-dom";
import TextToContent from "./TextToContent";

interface Props {
  description: string;
  title: string;
}


const DestinationDescription = ({ title, }: Props) => {
  return (
    <div className="carousel_cont_hei bg-light px-5">
      <div className="carousel_cont justify-content-center align-items-center text-center">
        <h2 className="grid_cat">Festivals</h2>
        <h3 className="fw-light">{title}</h3>
        <div className="section_desc mt50">
          <TextToContent text={text} />
        </div>
        <Link
          to={"/booking"}
          className="btn btn-success rounded-pill py-2 px-4 ms-lg-4"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default DestinationDescription;
