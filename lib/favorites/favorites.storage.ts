import {
  FAVORITES_STORAGE_KEY,
} from "./favorites.constants";

function isBrowser() {
  return (
    typeof window !==
    "undefined"
  );
}

function readFavorites(): string[] {
  if (!isBrowser()) {
    return [];
  }

  const stored =
    window.localStorage.getItem(
      FAVORITES_STORAGE_KEY,
    );

  if (!stored) {
    return [];
  }

  try {
    const parsed: unknown =
      JSON.parse(stored);

    if (
      !Array.isArray(parsed)
    ) {
      return [];
    }

    return parsed.filter(
      (
        value,
      ): value is string =>
        typeof value ===
        "string",
    );
  } catch {
    return [];
  }
}

function writeFavorites(
  propertyIds: string[],
) {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(
    FAVORITES_STORAGE_KEY,
    JSON.stringify(
      propertyIds,
    ),
  );
}

export function getFavoriteIds() {
  return readFavorites();
}

export function isFavorite(
  propertyId: string,
) {
  return readFavorites().includes(
    propertyId,
  );
}

export function addFavorite(
  propertyId: string,
) {
  const favorites =
    readFavorites();

  if (
    favorites.includes(
      propertyId,
    )
  ) {
    return favorites;
  }

  const updated = [
    ...favorites,
    propertyId,
  ];

  writeFavorites(updated);

  return updated;
}

export function removeFavorite(
  propertyId: string,
) {
  const updated =
    readFavorites().filter(
      (id) =>
        id !== propertyId,
    );

  writeFavorites(updated);

  return updated;
}

export function toggleFavorite(
  propertyId: string,
) {
  if (
    isFavorite(propertyId)
  ) {
    return {
      isFavorite: false,
      ids: removeFavorite(
        propertyId,
      ),
    };
  }

  return {
    isFavorite: true,
    ids: addFavorite(
      propertyId,
    ),
  };
}