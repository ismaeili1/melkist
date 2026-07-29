import type {
  SVGProps,
} from "react";

export type ErrorStateIconName =
  | "error"
  | "network"
  | "server"
  | "lock"
  | "not-found";

export interface ErrorStateIconProps
  extends SVGProps<SVGSVGElement> {
  name: ErrorStateIconName;
}

export function ErrorStateIcon({
  name,
  ...props
}: ErrorStateIconProps) {
  if (name === "network") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        {...props}
      >
        <path
          d="M3 8.5a13 13 0 0 1 18 0"
        />

        <path
          d="M6.5 12a8 8 0 0 1 11 0"
        />

        <path
          d="M10 15.5a3.5 3.5 0 0 1 4 0"
        />

        <circle
          cx="12"
          cy="19"
          r="1"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    );
  }

  if (name === "server") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        {...props}
      >
        <rect
          x="4"
          y="4"
          width="16"
          height="6"
          rx="1"
        />

        <rect
          x="4"
          y="14"
          width="16"
          height="6"
          rx="1"
        />

        <path d="M8 7h.01" />
        <path d="M8 17h.01" />
      </svg>
    );
  }

  if (name === "lock") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        {...props}
      >
        <rect
          x="5"
          y="10"
          width="14"
          height="10"
          rx="2"
        />

        <path
          d="M8 10V7a4 4 0 0 1 8 0v3"
        />
      </svg>
    );
  }

  if (name === "not-found") {
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

        <path
          d="M11 8v4"
        />

        <path
          d="M11 15h.01"
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
      <circle
        cx="12"
        cy="12"
        r="9"
      />

      <path
        d="M12 7v5"
      />

      <path
        d="M12 16h.01"
      />
    </svg>
  );
}