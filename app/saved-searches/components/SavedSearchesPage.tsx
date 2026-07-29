"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  deleteSavedSearch,
  getSavedSearches,
  renameSavedSearch,
} from "@/lib/saved-searches";

import type {
  SavedSearch,
} from "@/lib/saved-searches";

import {
  SavedSearchCard,
} from "./SavedSearchCard";

export function SavedSearchesPage() {
  const [
    searches,
    setSearches,
  ] = useState<SavedSearch[]>(
    [],
  );

  const [
    isLoading,
    setIsLoading,
  ] = useState(true);

  useEffect(() => {
    setSearches(
      getSavedSearches(),
    );

    setIsLoading(false);
  }, []);

  function handleDelete(
    id: string,
  ) {
    deleteSavedSearch(id);

    setSearches(
      getSavedSearches(),
    );
  }

  function handleRename(
    search: SavedSearch,
  ) {
    const name =
      window.prompt(
        "نام جدید جستجو را وارد کنید:",
        search.name,
      );

    if (
      name === null ||
      !name.trim()
    ) {
      return;
    }

    renameSavedSearch(
      search.id,
      name,
    );

    setSearches(
      getSavedSearches(),
    );
  }

  if (isLoading) {
    return (
      <main>
        در حال بارگذاری...
      </main>
    );
  }

  return (
    <main>
      {searches.map(
        (search) => (
          <SavedSearchCard
            key={search.id}
            search={search}
            onRename={
              handleRename
            }
            onEdit={() => {}}
            onDelete={
              handleDelete
            }
          />
        ),
      )}
    </main>
  );
}