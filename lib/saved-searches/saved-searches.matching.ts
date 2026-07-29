import type {
  SavedSearchFilters,
} from "./saved-searches.types";

export type SearchableProperty = {
  id: string;

  transactionType?: string;

  city?: string;

  neighborhood?: string;

  price?: number;

  area?: number;

  bedrooms?: number;
};

export function propertyMatchesFilters(
  property: SearchableProperty,
  filters: SavedSearchFilters,
) {
  if (
    filters.transactionType &&
    property.transactionType !==
      filters.transactionType
  ) {
    return false;
  }

  if (
    filters.city &&
    property.city !==
      filters.city
  ) {
    return false;
  }

  if (
    filters.neighborhood &&
    property.neighborhood !==
      filters.neighborhood
  ) {
    return false;
  }

  if (
    filters.minPrice !==
      undefined &&
    (
      property.price ===
        undefined ||
      property.price <
        filters.minPrice
    )
  ) {
    return false;
  }

  if (
    filters.maxPrice !==
      undefined &&
    (
      property.price ===
        undefined ||
      property.price >
        filters.maxPrice
    )
  ) {
    return false;
  }

  if (
    filters.minArea !==
      undefined &&
    (
      property.area ===
        undefined ||
      property.area <
        filters.minArea
    )
  ) {
    return false;
  }

  if (
    filters.maxArea !==
      undefined &&
    (
      property.area ===
        undefined ||
      property.area >
        filters.maxArea
    )
  ) {
    return false;
  }

  if (
    filters.bedrooms !==
      undefined &&
    (
      property.bedrooms ===
        undefined ||
      property.bedrooms <
        filters.bedrooms
    )
  ) {
    return false;
  }

  return true;
}