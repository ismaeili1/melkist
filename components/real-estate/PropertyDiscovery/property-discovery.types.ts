export type TransactionType =
  | "SALE"
  | "MORTGAGE"
  | "RENT";

export type PropertyType =
  | "APARTMENT"
  | "VILLA"
  | "HOUSE"
  | "LAND"
  | "OFFICE"
  | "SHOP";

export type PropertySearchState = {
  transactionType: TransactionType | null;
  propertyType: PropertyType | null;
  city: string;
  district: string;
  neighborhood: string;
};