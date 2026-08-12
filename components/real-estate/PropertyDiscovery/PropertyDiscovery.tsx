"use client";

import {
  useMemo,
  useState,
} from "react";

import {
  propertyResults,
} from "@/app/[locale]/property/property-data";

import {
  PropertyCard,
} from "@/components/real-estate/PropertyCard";

import {
  propertyMatchesFilters,
} from "@/lib/saved-searches";

import type {
  SavedSearchFilters,
  SavedSearchUrlParams,
} from "@/lib/saved-searches";

type PropertyDiscoveryProps = {
  initialSearchParams:
    SavedSearchUrlParams;
};

export function PropertyDiscovery({
  initialSearchParams,
}: PropertyDiscoveryProps) {
  const initialFilters:
    SavedSearchFilters = {
    transactionType:
      initialSearchParams
        .transactionType,

    city:
      initialSearchParams.city,

    neighborhood:
      initialSearchParams
        .neighborhood,

    minPrice:
      initialSearchParams
        .minPrice
        ? Number(
            initialSearchParams
              .minPrice,
          )
        : undefined,

    maxPrice:
      initialSearchParams
        .maxPrice
        ? Number(
            initialSearchParams
              .maxPrice,
          )
        : undefined,

    minArea:
      initialSearchParams
        .minArea
        ? Number(
            initialSearchParams
              .minArea,
          )
        : undefined,

    maxArea:
      initialSearchParams
        .maxArea
        ? Number(
            initialSearchParams
              .maxArea,
          )
        : undefined,

    bedrooms:
      initialSearchParams
        .bedrooms
        ? Number(
            initialSearchParams
              .bedrooms,
          )
        : undefined,
  };

  const [
    filters,
  ] = useState<SavedSearchFilters>(
    initialFilters,
  );

  const filteredProperties =
    useMemo(() => {
      return propertyResults.filter(
        (property) =>
          propertyMatchesFilters(
            {
              id: property.id,

              transactionType:
                property.transaction,

              city:
                property.city,

              neighborhood:
                property.neighborhood,

              price:
                Number(
                  property.price
                    .replace(
                      /[^\d]/g,
                      "",
                    ),
                ),

              area:
                property.area,

              bedrooms:
                property.bedrooms,
            },
            filters,
          ),
      );
    }, [filters]);

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px",
        direction: "rtl",
      }}
    >
      <header>
        <h1>
          فهرست املاک ملکیست
        </h1>

        <p>
          {filteredProperties.length}
          {" "}
          ملک مطابق جستجوی شما
        </p>
      </header>

      {filteredProperties.length ===
      0 ? (
        <section>
          <h2>
            ملکی مطابق فیلترهای شما
            پیدا نشد
          </h2>

          <p>
            فیلترهای جستجو را تغییر
            دهید و دوباره تلاش کنید.
          </p>
        </section>
      ) : (
        <section
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "24px",
            marginTop: "32px",
          }}
        >
          {filteredProperties.map(
            (property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ),
          )}
        </section>
      )}
    </main>
  );
}
