import Link from "next/link";

import {
  PropertyCard,
} from "@/components/real-estate/PropertyCard";

import type {
  PropertyResult,
} from "../../property-data";

import styles from "./SimilarProperties.module.css";

type SimilarPropertiesProps = {
  currentProperty: PropertyResult;

  properties: PropertyResult[];
};


function parsePrice(
  price: string,
): number {
  const normalizedPrice =
    price
      .replace(
        /[۰-۹]/g,
        (digit) =>
          String(
            "۰۱۲۳۴۵۶۷۸۹".indexOf(
              digit,
            ),
          ),
      )
      .replace(
        /,/g,
        "",
      )
      .replace(
        /٫/g,
        ".",
      )
      .replace(
        /[^\d.]/g,
        "",
      );

  return (
    Number(
      normalizedPrice,
    ) || 0
  );
}


function calculateSimilarityScore(
  currentProperty: PropertyResult,

  candidate: PropertyResult,
) {
  let score = 0;


  if (
    currentProperty.city ===
    candidate.city
  ) {
    score += 50;
  }


  if (
    currentProperty.type ===
    candidate.type
  ) {
    score += 30;
  }


  if (
    currentProperty.transaction ===
    candidate.transaction
  ) {
    score += 20;
  }


  const areaDifference =
    Math.abs(
      currentProperty.area -
        candidate.area,
    );


  if (
    areaDifference <= 30
  ) {
    score += 15;
  }


  const currentPrice =
    parsePrice(
      currentProperty.price,
    );


  const candidatePrice =
    parsePrice(
      candidate.price,
    );


  const priceDifference =
    Math.abs(
      currentPrice -
        candidatePrice,
    );


  if (
    currentPrice > 0 &&
    priceDifference <=
      currentPrice * 0.2
  ) {
    score += 15;
  }


  return score;
}


export function SimilarProperties({
  currentProperty,

  properties,
}: SimilarPropertiesProps) {
  const similarProperties =
    properties
      .filter(
        (property) =>
          property.id !==
          currentProperty.id,
      )
      .map(
        (property) => ({
          property,

          score:
            calculateSimilarityScore(
              currentProperty,

              property,
            ),
        }),
      )
      .sort(
        (a, b) =>
          b.score -
          a.score,
      )
      .slice(
        0,
        3,
      )
      .map(
        ({
          property,
        }) =>
          property,
      );


  if (
    similarProperties.length ===
    0
  ) {
    return null;
  }


  return (
    <section
      className={
        styles.section
      }
      aria-labelledby="similar-properties-title"
    >
      <div
        className={
          styles.header
        }
      >
        <div>
          <span
            className={
              styles.eyebrow
            }
          >
            DISCOVER MORE
          </span>


          <h2
            id="similar-properties-title"
          >
            املاک مشابه
          </h2>


          <p>
            گزینه‌های مشابهی که ممکن است
            با نیاز شما هماهنگ باشند.
          </p>
        </div>


        <Link
          href="/property"
          className={
            styles.viewAll
          }
        >
          مشاهده همه املاک


          <span
            aria-hidden="true"
          >
            ←
          </span>
        </Link>
      </div>


      <div
        className={
          styles.grid
        }
      >
        {similarProperties.map(
          (
            property,
          ) => (
            <PropertyCard
              key={
                property.id
              }
              property={
                property
              }
            />
          ),
        )}
      </div>
    </section>
  );
}