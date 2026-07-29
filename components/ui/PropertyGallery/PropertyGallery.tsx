"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  GalleryControls,
} from "./GalleryControls";

import {
  GalleryLightbox,
} from "./GalleryLightbox";

import {
  GalleryMainImage,
} from "./GalleryMainImage";

import {
  GalleryThumbnails,
} from "./GalleryThumbnails";

import styles from "./PropertyGallery.module.css";


export interface GalleryImage {
  id: string;

  src: string;

  alt: string;
}


export interface PropertyGalleryProps {
  images: GalleryImage[];

  aspectRatio?: string;

  className?: string;
}


export function PropertyGallery({
  images,

  aspectRatio = "16 / 10",

  className,
}: PropertyGalleryProps) {
  const [
    activeIndex,

    setActiveIndex,
  ] = useState(0);


  const [
    isLightboxOpen,

    setIsLightboxOpen,
  ] = useState(false);


  const hasImages =
    images.length > 0;


  const goPrevious =
    useCallback(() => {
      setActiveIndex(
        (currentIndex) => {
          if (
            currentIndex === 0
          ) {
            return images.length - 1;
          }

          return currentIndex - 1;
        }
      );
    }, [
      images.length,
    ]);


  const goNext =
    useCallback(() => {
      setActiveIndex(
        (currentIndex) => {
          if (
            currentIndex ===
            images.length - 1
          ) {
            return 0;
          }

          return currentIndex + 1;
        }
      );
    }, [
      images.length,
    ]);


  useEffect(() => {
    function handleKeyDown(
      event: KeyboardEvent
    ) {
      if (
        !isLightboxOpen
      ) {
        return;
      }


      if (
        event.key === "ArrowLeft"
      ) {
        goNext();
      }


      if (
        event.key === "ArrowRight"
      ) {
        goPrevious();
      }


      if (
        event.key === "Escape"
      ) {
        setIsLightboxOpen(false);
      }
    }


    window.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    isLightboxOpen,

    goNext,

    goPrevious,
  ]);


  if (
    !hasImages
  ) {
    return (
      <div
        className={
          styles.empty
        }
      >
        تصویری برای نمایش وجود ندارد.
      </div>
    );
  }


  const activeImage =
    images[activeIndex];


  return (
    <>
      <div
        className={[
          styles.gallery,

          className ?? "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div
          className={
            styles.main
          }
        >
          <GalleryMainImage
  image={activeImage}
  aspectRatio={aspectRatio}

          />


          <GalleryControls
            activeIndex={
              activeIndex
            }
            total={
              images.length
            }
            onPrevious={
              goPrevious
            }
            onNext={
              goNext
            }
            onFullscreen={() =>
              setIsLightboxOpen(
                true
              )
            }
          />
        </div>


        {images.length > 1 && (
          <GalleryThumbnails
            images={images}
            activeIndex={
              activeIndex
            }
            onSelect={
              setActiveIndex
            }
          />
        )}
      </div>


      {isLightboxOpen && (
        <GalleryLightbox
          image={activeImage}
          onClose={() =>
            setIsLightboxOpen(
              false
            )
          }
          onPrevious={
            goPrevious
          }
          onNext={
            goNext
          }
        />
      )}
    </>
  );
}