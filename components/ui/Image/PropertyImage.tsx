import {
  Image,
} from "./Image";

import {
  ImagePlaceholder,
} from "./ImagePlaceholder";

export interface PropertyImageProps {
  src?: string;

  alt?: string;

  aspectRatio?: string;

  className?: string;

  fallback?: string;

  showPlaceholder?: boolean;
}

export function PropertyImage({
  src,

  alt = "تصویر ملک",

  aspectRatio = "16 / 10",

  className,

  fallback,

  showPlaceholder = true,
}: PropertyImageProps) {
  if (!src) {
    if (!showPlaceholder) {
      return null;
    }

    return (
      <div
        className={className}
        style={{
          aspectRatio,
        }}
      >
        <ImagePlaceholder />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      aspectRatio={aspectRatio}
      fit="cover"
      fallback={fallback}
      showPlaceholder={showPlaceholder}
      className={className}
    />
  );
}