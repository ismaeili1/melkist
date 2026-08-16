"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  deleteSavedSearch,
  getSavedSearches,
  renameSavedSearch,
} from "@/lib/saved-searches";
import type { SavedSearch } from "@/lib/saved-searches";
import { SavedSearchCard } from "./SavedSearchCard";
import { EditSavedSearchModal } from "./EditSavedSearchModal";

export function SavedSearchesPage() {
  const t = useTranslations("savedSearches");
  const [searches, setSearches] = useState<SavedSearch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingSearch, setEditingSearch] = useState<SavedSearch | null>(
    null,
  );

  useEffect(() => {
    setSearches(getSavedSearches());
    setIsLoading(false);
  }, []);

  function handleDelete(id: string) {
    deleteSavedSearch(id);
    setSearches(getSavedSearches());
  }

  function handleRename(search: SavedSearch) {
    setEditingSearch(search);
  }

  function handleSaveRename(name: string) {
    if (editingSearch) {
      renameSavedSearch(editingSearch.id, name);
      setSearches(getSavedSearches());
    }

    setEditingSearch(null);
  }

  if (isLoading) {
    return <main>{t("loading")}</main>;
  }

  return (
    <main>
      {searches.map((search) => (
        <SavedSearchCard
          key={search.id}
          search={search}
          onRename={handleRename}
          onEdit={() => {}}
          onDelete={handleDelete}
        />
      ))}

      {editingSearch && (
        <EditSavedSearchModal
          search={editingSearch}
          onClose={() => setEditingSearch(null)}
          onSave={handleSaveRename}
        />
      )}
    </main>
  );
}