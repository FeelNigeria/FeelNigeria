import DestinationButton from "./DestinationButton";
import DestinationGrid from "./DestinationGrid";

const Destination = () => {
  return (
    <div className="container-fluid destination py-5">
      <div className="container py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
          <h5 className="section-title px-3">Destination</h5>
          <h1 className="mb-0">Popular Destination</h1>
        </div>
        <div className="tab-className text-center">
          <DestinationButton />
          <DestinationGrid />
        </div>
      </div>
    </div>
  );
};

export default Destination;
