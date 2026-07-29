import {
  Image,
} from "./Image";

export interface AvatarProps {
  src?: string;

  alt: string;

  size?: number;

  fallback?: string;
}

export function Avatar({
  src,
  alt,
  size = 48,
  fallback,
}: AvatarProps) {
  if (!src) {
    return (
      <div
        style={{
          width: size,

          height: size,

          borderRadius:
            "var(--radius-full)",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          background:
            "var(--color-surface-muted)",

          color:
            "var(--color-text-secondary)",
        }}
        role="img"
        aria-label={alt}
      >
        {alt.charAt(0)}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      aspectRatio="1 / 1"
      fit="cover"
      fallback={fallback}
    />
  );
}