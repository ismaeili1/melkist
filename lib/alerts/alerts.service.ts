import {
  propertyMatchesFilters,
} from "@/lib/saved-searches";

import type {
  SavedSearch,
} from "@/lib/saved-searches";

import {
  createAlertIfNew,
} from "./alerts.storage";

export function processPropertyForSavedSearch(
  property: {
    id: string;

    transactionType?: string;

    city?: string;

    neighborhood?: string;

    price?: number;

    area?: number;

    bedrooms?: number;
  },
  savedSearch: SavedSearch,
) {
  const matches =
    propertyMatchesFilters(
      property,
      savedSearch.filters,
    );

  if (!matches) {
    return null;
  }

  return createAlertIfNew({
    savedSearchId:
      savedSearch.id,

    propertyId:
      property.id,

    propertyTitle:
      "ملک جدید مطابق جستجوی شما",

    propertyLocation:
      property.city,
  });
}