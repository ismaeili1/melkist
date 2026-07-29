import {
  Skeleton,
} from "./Skeleton";

export interface SkeletonAvatarProps {
  size?: number;
}

export function SkeletonAvatar({
  size = 48,
}: SkeletonAvatarProps) {
  return (
    <Skeleton
      variant="circle"
      width={size}
      height={size}
    />
  );
}