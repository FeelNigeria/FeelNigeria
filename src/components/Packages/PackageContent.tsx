interface PackageContentProps {
  title: string;
  subtitle: string;
  description: string;
  rating: number;
  onReadMore?: () => void;
  onBookNow?: () => void;
}

const PackageContent: React.FC<PackageContentProps> = ({
  title,
  subtitle,
  description,
  rating,
  onReadMore,
  onBookNow,
}) => {
  return (
    <div className="packages-content bg-light">
      <div className="p-4 pb-0">
        <h5 className="mb-0">{title}</h5>
        <small className="text-uppercase text-secondary">{subtitle}</small>
        <div className="mb-3">
          {Array.from({ length: 5 }, (_, index) => (
            <small
              key={index}
              className={`fa fa-star ${index < rating ? "text-success" : ""}`}
            ></small>
          ))}
        </div>
        <p className="mb-4 text-secondary">{description}</p>
      </div>
      <div className="row bg-success rounded-bottom mx-0">
        <div className="col-6 text-start px-0">
          <button
            onClick={onReadMore}
            className="btn-hover btn text-white py-2 px-4"
          >
            Read More
          </button>
        </div>
        <div className="col-6 text-end px-0">
          <button
            onClick={onBookNow}
            className="btn-hover btn text-white py-2 px-4"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageContent;
