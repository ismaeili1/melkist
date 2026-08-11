export const Resources = {
  Profile: "profile",
  Property: "property",
  Favorite: "favorite",
  Session: "session",
  User: "user",
  Admin: "admin",
} as const;

export type Resource =
  typeof Resources[keyof typeof Resources];