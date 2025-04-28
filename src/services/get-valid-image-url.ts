export default function getValidImageUrl(
  galleryNumber: number,
  filepath?: string
): string {
  const extensions = ["jpg", "png", "webp"];
  filepath = filepath || "gallery";
  for (const ext of extensions) {
    try {
      const url = new URL(
        `../assets/img/${filepath}-${galleryNumber}.${ext}`,
        import.meta.url
      ).href;
      return url; // Return the first valid URL
    } catch {
      // Ignore errors and try the next extension
    }
  }
  throw new Error("No valid image found for the given gallery number.");
}
