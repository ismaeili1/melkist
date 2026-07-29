import type {
  SavedSearch,
  SavedSearchFilters,
} from "./saved-searches.types";

import {
  SAVED_SEARCHES_STORAGE_KEY,
} from "./saved-searches.constants";

function isBrowser() {
  return (
    typeof window !== "undefined"
  );
}

function readSavedSearches(): SavedSearch[] {
  if (!isBrowser()) {
    return [];
  }

  const raw =
    window.localStorage.getItem(
      SAVED_SEARCHES_STORAGE_KEY,
    );

  if (!raw) {
    return [];
  }

  try {
    const parsed =
      JSON.parse(raw);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed;
  } catch {
    return [];
  }
}

function writeSavedSearches(
  searches: SavedSearch[],
) {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(
    SAVED_SEARCHES_STORAGE_KEY,
    JSON.stringify(searches),
  );
}

export function getSavedSearches() {
  return readSavedSearches();
}

export function createSavedSearch(
  name: string,
  filters: SavedSearchFilters,
): SavedSearch {
  const searches =
    readSavedSearches();

  const now =
    new Date().toISOString();

  const savedSearch: SavedSearch = {
    id: crypto.randomUUID(),

    name: name.trim(),

    filters,

    createdAt: now,

    updatedAt: now,
  };

  writeSavedSearches([
    savedSearch,
    ...searches,
  ]);

  return savedSearch;
}

export function updateSavedSearch(
  id: string,
  updates: {
    filters?: SavedSearchFilters;
  },
): SavedSearch | null {
  const searches =
    readSavedSearches();

  let updatedSearch:
    SavedSearch | null = null;

  const nextSearches =
    searches.map(
      (search) => {
        if (search.id !== id) {
          return search;
        }

        updatedSearch = {
          ...search,

          ...(updates.filters
            ? {
                filters:
                  updates.filters,
              }
            : {}),

          updatedAt:
            new Date().toISOString(),
        };

        return updatedSearch;
      },
    );

  if (!updatedSearch) {
    return null;
  }

  writeSavedSearches(
    nextSearches,
  );

  return updatedSearch;
}

export function renameSavedSearch(
  id: string,
  name: string,
): SavedSearch | null {
  const searches =
    readSavedSearches();

  let renamedSearch:
    SavedSearch | null = null;

  const nextSearches =
    searches.map(
      (search) => {
        if (search.id !== id) {
          return search;
        }

        renamedSearch = {
          ...search,

          name: name.trim(),

          updatedAt:
            new Date().toISOString(),
        };

        return renamedSearch;
      },
    );

  if (!renamedSearch) {
    return null;
  }

  writeSavedSearches(
    nextSearches,
  );

  return renamedSearch;
}

export function deleteSavedSearch(
  id: string,
) {
  const searches =
    readSavedSearches();

  const nextSearches =
    searches.filter(
      (search) =>
        search.id !== id,
    );

  writeSavedSearches(
    nextSearches,
  );
}