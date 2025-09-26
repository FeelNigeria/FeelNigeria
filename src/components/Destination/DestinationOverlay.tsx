interface Props {
  location: string;
  dataLightbox: string;
  img?: string;
}

const DestinationOverlay = ({ location, img, dataLightbox }: Props) => {
  dataLightbox = `destination-${dataLightbox}`;
  if (!img) img = `img/${dataLightbox}.jpg`;
  return (
    <div>
      <div className="destination-overlay p-4">
        <a
          href="#"
          className="btn btn-success text-white rounded-pill border py-2 px-3"
        >
          20 Photos
        </a>
        <h4 className="text-white mb-2 mt-3">{location}</h4>
        <a href="#" className="btn-hover text-white">
          View All Place <i className="fa fa-arrow-right ms-2"></i>
        </a>
      </div>
      <div className="search-icon">
        <a href={img} data-lightbox={dataLightbox}>
          <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-success"></i>
          {/* <FontAwesomeIcon icon={faDragon} className="btn btn-light" /> */}
        </a>
      </div>
    </div>
  );
};

export default DestinationOverlay;
