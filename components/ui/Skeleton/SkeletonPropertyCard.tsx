import {
  Skeleton,
} from "./Skeleton";

import {
  SkeletonText,
} from "./SkeletonText";

import styles from "./SkeletonPropertyCard.module.css";

export function SkeletonPropertyCard() {
  return (
    <article
      className={
        styles.card
      }
    >
      <div
        className={
          styles.image
        }
      >
        <Skeleton
          width="100%"
          height="100%"
          variant="rounded"
        />
      </div>

      <div
        className={
          styles.content
        }
      >
        <Skeleton
          variant="text"
          width="75%"
          height={24}
        />

        <Skeleton
          variant="text"
          width="45%"
        />

        <SkeletonText
          lines={2}
          lastLineWidth="60%"
        />

        <div
          className={
            styles.footer
          }
        >
          <Skeleton
            variant="text"
            width="35%"
          />

          <Skeleton
            variant="text"
            width="25%"
          />
        </div>
      </div>
    </article>
  );
}