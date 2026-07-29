"use client";

import {
  PropertyImage,
} from "@/components/ui/Image";

import type {
  GalleryImage,
} from "./PropertyGallery";

import styles from "./PropertyGallery.module.css";

interface GalleryThumbnailsProps {
  images: GalleryImage[];

  activeIndex: number;

  onSelect: (
    index: number
  ) => void;
}

export function GalleryThumbnails({
  images,
  activeIndex,
  onSelect,
}: GalleryThumbnailsProps) {
  return (
    <div
      className={
        styles.thumbnails
      }
      role="tablist"
      aria-label="تصاویر ملک"
    >
      {images.map(
        (
          image,
          index
        ) => {
          const isActive =
            index === activeIndex;

          return (
            <button
              key={image.id}
              type="button"
              className={[
                styles.thumbnail,

                isActive
                  ? styles.activeThumbnail
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() =>
                onSelect(index)
              }
              role="tab"
              aria-selected={
                isActive
              }
              aria-label={
                `نمایش تصویر ${index + 1}: ${image.alt}`
              }
            >
              <PropertyImage
                src={image.src}
                alt={image.alt}
                aspectRatio="16 / 10"
              />
            </button>
          );
        }
      )}
    </div>
  );
}