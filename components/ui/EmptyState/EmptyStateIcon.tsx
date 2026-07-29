import type {
  SVGProps,
} from "react";

export type EmptyStateIconName =
  | "search"
  | "heart"
  | "home"
  | "message"
  | "document";

export interface EmptyStateIconProps
  extends SVGProps<SVGSVGElement> {
  name: EmptyStateIconName;
}

export function EmptyStateIcon({
  name,
  ...props
}: EmptyStateIconProps) {
  if (name === "search") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        {...props}
      >
        <circle
          cx="11"
          cy="11"
          r="7"
        />

        <path
          d="m20 20-4-4"
        />
      </svg>
    );
  }

  if (name === "heart") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        {...props}
      >
        <path
          d="M20.8 8.8c0 5.5-8.8 10.2-8.8 10.2S3.2 14.3 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z"
        />
      </svg>
    );
  }

  if (name === "home") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        {...props}
      >
        <path
          d="m3 10 9-7 9 7"
        />

        <path
          d="M5 9v11h14V9"
        />

        <path
          d="M9 20v-6h6v6"
        />
      </svg>
    );
  }

  if (name === "message") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        {...props}
      >
        <path
          d="M4 5h16v11H8l-4 4V5Z"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path
        d="M6 3h9l3 3v15H6V3Z"
      />

      <path
        d="M15 3v4h4"
      />

      <path
        d="M9 12h6M9 16h6"
      />
    </svg>
  );
}