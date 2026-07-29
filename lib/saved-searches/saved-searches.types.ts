export type SavedSearchFilters = {
  transactionType?: string;

  city?: string;

  neighborhood?: string;

  minPrice?: number;

  maxPrice?: number;

  minArea?: number;

  maxArea?: number;

  bedrooms?: number;
};

export type SavedSearchUrlParams = {
  transactionType?: string;

  city?: string;

  neighborhood?: string;

  minPrice?: string;

  maxPrice?: string;

  minArea?: string;

  maxArea?: string;

  bedrooms?: string;

  editSearchId?: string;
};

export type SavedSearch = {
  id: string;

  name: string;

  filters: SavedSearchFilters;

  createdAt: string;

  updatedAt: string;
};