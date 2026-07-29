const FAVORITES_STORAGE_KEY =
  "melkist:favorites";

function isBrowser() {
  return (
    typeof window !== "undefined"
  );
}

function readFavorites(): string[] {
  if (!isBrowser()) {
    return [];
  }

  try {
    const stored =
      window.localStorage.getItem(
        FAVORITES_STORAGE_KEY,
      );

    if (!stored) {
      return [];
    }

    const parsed: unknown =
      JSON.parse(stored);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(
      (value): value is string =>
        typeof value === "string",
    );
  } catch {
    return [];
  }
}

function writeFavorites(
  favorites: string[],
) {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(
    FAVORITES_STORAGE_KEY,
    JSON.stringify(favorites),
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
    favorites.includes(propertyId)
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
      (id) => id !== propertyId,
    );

  writeFavorites(updated);

  return updated;
}

export function toggleFavorite(
  propertyId: string,
) {
  if (isFavorite(propertyId)) {
    return {
      saved: false,
      favoriteIds:
        removeFavorite(propertyId),
    };
  }

  return {
    saved: true,
    favoriteIds:
      addFavorite(propertyId),
  };
}