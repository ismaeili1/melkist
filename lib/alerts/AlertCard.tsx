"use client";

import Link from "next/link";

import type {
  PropertyAlert,
} from "@/lib/alerts";

type AlertCardProps = {
  alert: PropertyAlert;
};

export function AlertCard({
  alert,
}: AlertCardProps) {
  return (
    <article>
      <div>
        <span>
          {alert.read
            ? "هشدار"
            : "هشدار جدید"}
        </span>

        <h2>
          {alert.propertyTitle}
        </h2>

        {alert.propertyLocation && (
          <p>
            {alert.propertyLocation}
          </p>
        )}
      </div>

      <Link
        href={`/property/${alert.propertyId}`}
      >
        مشاهده ملک
      </Link>
    </article>
  );
}