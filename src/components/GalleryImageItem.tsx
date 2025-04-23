import React from "react";

interface Props {
  galleryNumber: number;
}
const GalleryImageItem: React.FC<Props> = ({ galleryNumber }) => {
  const href = new URL(
    `../assets/img/gallery-${galleryNumber}.jpg`,
    import.meta.url
  ).href;
  return (
    <img src={href} className="img-fluid w-100 h-100 rounded" alt="Image"></img>
  );
};

export default GalleryImageItem;
