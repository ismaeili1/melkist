"use client";

import {
  useEffect,
} from "react";

import type {
  GalleryImage,
} from "./PropertyGallery";

import styles from "./PropertyGallery.module.css";


interface GalleryLightboxProps {
  image: GalleryImage;

  onClose: () => void;

  onPrevious: () => void;

  onNext: () => void;
}


export function GalleryLightbox({
  image,

  onClose,

  onPrevious,

  onNext,
}: GalleryLightboxProps) {
  useEffect(() => {
    function handleKeyDown(
      event: KeyboardEvent
    ) {
      if (
        event.key === "Escape"
      ) {
        onClose();
      }

      if (
        event.key === "ArrowLeft"
      ) {
        onNext();
      }

      if (
        event.key === "ArrowRight"
      ) {
        onPrevious();
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
    onClose,

    onPrevious,

    onNext,
  ]);


  return (
    <div
      className={
        styles.lightbox
      }
      role="dialog"
      aria-modal="true"
      aria-label="نمایش تصویر ملک"
      onClick={onClose}
    >
      <button
        type="button"
        className={
          styles.lightboxClose
        }
        onClick={onClose}
        aria-label="بستن"
      >
        ×
      </button>


      <button
        type="button"
        className={
          styles.lightboxPrevious
        }
        onClick={(event) => {
          event.stopPropagation();

          onPrevious();
        }}
        aria-label="تصویر قبلی"
      >
        ‹
      </button>


      <img
        src={image.src}
        alt={image.alt}
        className={
          styles.lightboxImage
        }
        onClick={(event) => {
          event.stopPropagation();
        }}
      />


      <button
        type="button"
        className={
          styles.lightboxNext
        }
        onClick={(event) => {
          event.stopPropagation();

          onNext();
        }}
        aria-label="تصویر بعدی"
      >
        ›
      </button>
    </div>
  );
}