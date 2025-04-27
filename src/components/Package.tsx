import Header from "./Header";
import PackageImageDetails from "./PackageImageDetails";
import TourBooking from "./TourBooking";
interface Props {
  standAlone?: Boolean;
}

const Package = ({ standAlone }: Props) => {
  return (
    <>
      {standAlone && <Header linkName="Packages" child="Our Packages" />}
      <div
        className="container-fluid packages py-5 fw-light"
        style={{ fontFamily: "Roboto, sans-serif", fontSize: "0.9em" }}
      >
        <div className="container py-5">
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "900px" }}
          >
            <h5 className="section-title px-3">Packages</h5>
            <h1 className="mb-0">Awesome Packages</h1>
          </div>
          <div
            className="mx-auto text-center mb-5 text-secondary"
            style={{ maxWidth: "900px" }}
          >
            <p className="mb-4">
              We offer a diverse range of thoughtfully curated travel packages
              designed to meet your unique interests, budget, and travel
              preferences. Whether you seek cultural immersion, thrilling
              adventures, or a relaxing getaway, our packages are tailored to
              provide an unforgettable experience.
            </p>
          </div>
          <PackageImageDetails />
        </div>
      </div>
      {standAlone && <TourBooking />}
    </>
  );
};

export default Package;
