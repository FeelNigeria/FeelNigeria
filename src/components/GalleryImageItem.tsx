import React from "react";

interface Props {
  galleryNumber: number;
}

const getValidImageUrl = (galleryNumber: number): string => {
  const extensions = ["jpg", "png", "webp"];
  for (const ext of extensions) {
    try {
      const url = new URL(`../assets/img/gallery-${galleryNumber}.${ext}`, import.meta.url).href;
      return url; // Return the first valid URL
    } catch {
      // Ignore errors and try the next extension
    }
  }
  throw new Error("No valid image found for the given gallery number.");
};

const GalleryImageItem: React.FC<Props> = ({ galleryNumber }) => {
  const href = getValidImageUrl(galleryNumber);
  return (
    <img src={href} className="img-fluid w-100 h-100 rounded" alt="Image"></img>
  );
};

export default GalleryImageItem;
