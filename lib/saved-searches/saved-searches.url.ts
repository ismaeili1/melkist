import type {
  SavedSearchFilters,
  SavedSearchUrlParams,
} from "./saved-searches.types";

export function filtersToSearchParams(
  filters: SavedSearchFilters,
) {
  const params =
    new URLSearchParams();

  Object.entries(filters).forEach(
    ([key, value]) => {
      if (
        value === undefined ||
        value === null ||
        value === ""
      ) {
        return;
      }

      params.set(
        key,
        String(value),
      );
    },
  );

  return params;
}

export function searchParamsToFilters(
  params: URLSearchParams,
): SavedSearchFilters {
  const filters: SavedSearchFilters = {};

  const transactionType =
    params.get("transactionType");

  const city =
    params.get("city");

  const neighborhood =
    params.get("neighborhood");

  const minPrice =
    params.get("minPrice");

  const maxPrice =
    params.get("maxPrice");

  const minArea =
    params.get("minArea");

  const maxArea =
    params.get("maxArea");

  const bedrooms =
    params.get("bedrooms");

  if (transactionType) {
    filters.transactionType =
      transactionType;
  }

  if (city) {
    filters.city = city;
  }

  if (neighborhood) {
    filters.neighborhood =
      neighborhood;
  }

  if (minPrice) {
    filters.minPrice =
      Number(minPrice);
  }

  if (maxPrice) {
    filters.maxPrice =
      Number(maxPrice);
  }

  if (minArea) {
    filters.minArea =
      Number(minArea);
  }

  if (maxArea) {
    filters.maxArea =
      Number(maxArea);
  }

  if (bedrooms) {
    filters.bedrooms =
      Number(bedrooms);
  }

  return filters;
}

export function filtersToQueryString(
  filters: SavedSearchFilters,
) {
  return filtersToSearchParams(
    filters,
  ).toString();
}

export function urlParamsToFilters(
  params: SavedSearchUrlParams,
): SavedSearchFilters {
  return {
    transactionType:
      params.transactionType,

    city:
      params.city,

    neighborhood:
      params.neighborhood,

    minPrice: params.minPrice
      ? Number(params.minPrice)
      : undefined,

    maxPrice: params.maxPrice
      ? Number(params.maxPrice)
      : undefined,

    minArea: params.minArea
      ? Number(params.minArea)
      : undefined,

    maxArea: params.maxArea
      ? Number(params.maxArea)
      : undefined,

    bedrooms: params.bedrooms
      ? Number(params.bedrooms)
      : undefined,
  };
}