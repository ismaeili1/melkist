"use client";

import {
  useEffect,
  useState,
} from "react";

import type {
  ImgHTMLAttributes,
} from "react";

import styles from "./Image.module.css";

export type ImageFit =
  | "cover"
  | "contain"
  | "fill"
  | "none";

export interface ImageProps
  extends Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    "width" | "height"
  > {
  src: string;

  alt: string;

  width?: number | string;

  height?: number | string;

  fit?: ImageFit;

  aspectRatio?: string;

  fallback?: string;

  showPlaceholder?: boolean;
}

export function Image({
  src,

  alt,

  width,

  height,

  fit = "cover",

  aspectRatio,

  fallback,

  showPlaceholder = true,

  className,

  style,

  onError,

  onLoad,

  ...props
}: ImageProps) {
  const [
    status,
    setStatus,
  ] = useState<
    "loading" | "loaded" | "error"
  >("loading");

  const [
    currentSrc,
    setCurrentSrc,
  ] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);

    setStatus("loading");
  }, [src]);

  function handleLoad(
    event: React.SyntheticEvent<HTMLImageElement>
  ) {
    setStatus("loaded");

    onLoad?.(event);
  }

  function handleError(
    event: React.SyntheticEvent<HTMLImageElement>
  ) {
    if (
      fallback &&
      currentSrc !== fallback
    ) {
      setCurrentSrc(fallback);

      setStatus("loading");

      return;
    }

    setStatus("error");

    onError?.(event);
  }

  return (
    <div
      className={[
        styles.wrapper,

        styles[fit],

        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        width,

        height,

        aspectRatio,

        ...style,
      }}
    >
      {status === "loading" &&
        showPlaceholder && (
          <div
            className={
              styles.placeholder
            }
            role="status"
            aria-label="در حال بارگذاری تصویر..."
          >
            در حال بارگذاری تصویر...
          </div>
        )}

      {status === "error" ? (
        <div
          className={styles.error}
          role="img"
          aria-label={alt}
        >
          تصویر در دسترس نیست
        </div>
      ) : (
        <img
          src={currentSrc}
          alt={alt}
          className={[
            styles.image,

            status === "loaded"
              ? styles.loaded
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}
    </div>
  );
}