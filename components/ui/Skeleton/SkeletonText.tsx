import {
  Skeleton,
} from "./Skeleton";

export interface SkeletonTextProps {
  lines?: number;

  lastLineWidth?: string;
}

export function SkeletonText({
  lines = 3,

  lastLineWidth = "65%",
}: SkeletonTextProps) {
  return (
    <div
      style={{
        display: "flex",

        flexDirection: "column",

        gap: "var(--space-2)",
      }}
    >
      {Array.from({
        length: lines,
      }).map(
        (_, index) => (
          <Skeleton
            key={index}
            variant="text"
            width={
              index ===
              lines - 1
                ? lastLineWidth
                : "100%"
            }
          />
        )
      )}
    </div>
  );
}