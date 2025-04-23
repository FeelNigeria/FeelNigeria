import React from "react";

interface Props {
  galleryNumber: number;
}
const GalleryImageItem: React.FC<Props> = ({ galleryNumber }) => {
  const href = `src/assets/img/gallery-${galleryNumber}.jpg`;
  return (
    <img src={href} className="img-fluid w-100 h-100 rounded" alt="Image"></img>
  );
};

export default GalleryImageItem;
