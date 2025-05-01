import React from "react";
import GalleryOverlay from "./GalleryOverlay";
import GalleryPlusIcon from "./GalleryPlusIcon";
import GalleryImageItem from "./GalleryImageItem";

interface Props {
  galleryNumber: number;
  className: string;
}

const GalleryTab: React.FC<Props> = ({ className, galleryNumber }) => {
  return (
    <div className={"col-sm-6 col-md-6 col-lg-" + className}>
      <div className="gallery-item h-100">
        <GalleryImageItem galleryNumber={galleryNumber} />
        <GalleryOverlay />
        <GalleryPlusIcon galleryNumber={galleryNumber} />
      </div>
    </div>
  );
};

export default GalleryTab;
