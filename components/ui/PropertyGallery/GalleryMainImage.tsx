import {
  PropertyImage,
} from "@/components/ui/Image";

import type {
  GalleryImage,
} from "./PropertyGallery";


interface GalleryMainImageProps {
  image: GalleryImage;

  aspectRatio?: string;
}


export function GalleryMainImage({
  image,

  aspectRatio = "16 / 10",
}: GalleryMainImageProps) {
  return (
    <PropertyImage
      src={image.src}
      alt={image.alt}
      aspectRatio={aspectRatio}
    />
  );
}