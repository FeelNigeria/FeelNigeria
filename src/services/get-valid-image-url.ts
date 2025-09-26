export default function getValidImageUrl(
  galleryNumber: number,
  fileFirstName?: string,
  filename?: string
): string {
  const extensions = ["jpg", "png", "webp"];
  fileFirstName = fileFirstName || "gallery";
  for (const ext of extensions) {
    filename = filename?.includes(".")
      ? filename
      : filename
      ? `${filename}.${ext}`
      : `${fileFirstName}-${galleryNumber}.${ext}`;
    try {
      const url = new URL(`../assets/img/${filename}`, import.meta.url).href;
      return url; // Return the first valid URL
    } catch {
      // Ignore errors and try the next extension
    }
  }
  throw new Error("No valid image found for the given gallery number.");
}
