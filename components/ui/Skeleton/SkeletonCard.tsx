import {
  Skeleton,
} from "./Skeleton";

import {
  SkeletonText,
} from "./SkeletonText";

import styles from "./SkeletonCard.module.css";


export interface SkeletonCardProps {
  imageHeight?: string | number;

  textLines?: number;

  lastLineWidth?: string;

  className?: string;
}


export function SkeletonCard({
  imageHeight = 200,

  textLines = 3,

  lastLineWidth = "65%",

  className,
}: SkeletonCardProps) {
  return (
    <div
      className={[
        styles.card,

        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Skeleton
        variant="rounded"
        width="100%"
        height={imageHeight}
      />

      <div
        className={
          styles.body
        }
      >
        <SkeletonText
          lines={textLines}
          lastLineWidth={
            lastLineWidth
          }
        />
      </div>
    </div>
  );
}