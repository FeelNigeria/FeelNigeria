import React from "react";

interface Props {
  galleryNumber: number;
}

const GalleryPlusIcon: React.FC<Props> = ({ galleryNumber }) => {
  const href = `src/assets/img/gallery-${galleryNumber}.jpg`;
  const dataLightbox = `gallery-${galleryNumber}`;
  return (
    <div className="gallery-plus-icon">
      <a href={href} data-lightbox={dataLightbox} className="my-auto">
        <i className="fas fa-plus fa-2x text-white"></i>
      </a>
    </div>
  );
};

export default GalleryPlusIcon;
