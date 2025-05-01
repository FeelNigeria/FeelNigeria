import getValidImageUrl from "@/services/get-valid-image-url";
import React from "react";

interface Props {
  galleryNumber: number;
}

const GalleryImageItem: React.FC<Props> = ({ galleryNumber }) => {
  const href = getValidImageUrl(galleryNumber);
  return (
    <img src={href} className="img-fluid w-100 h-100 rounded" alt="Image"></img>
  );
};

export default GalleryImageItem;
