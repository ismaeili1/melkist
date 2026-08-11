export const Actions = {
  Create: "create",
  Read: "read",
  Update: "update",
  Delete: "delete",
  Manage: "manage",
} as const;

export type Action =
  typeof Actions[keyof typeof Actions];