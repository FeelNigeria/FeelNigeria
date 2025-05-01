
const DestinationButton = () => {
  const locations = [
    "All",
    "Lagos State",
    "Cross River State",
    "Abuja",
    "Plateau State",
    "Niger State",
  ];

  return (
    <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
      {locations.map((location) => (
        <li className="nav-item" key={location}>
          <a
            className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active"
            data-bs-toggle="pill"
            href="#tab-1"
          >
            <span className="text-dark" style={{ width: "150px" }}>
              {location}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default DestinationButton;
