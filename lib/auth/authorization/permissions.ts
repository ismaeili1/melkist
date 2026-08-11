export enum Action {
  Create = "create",
  Read = "read",
  Update = "update",
  Delete = "delete",
  Manage = "manage",
}

export enum Resource {
  Profile = "profile",
  Property = "property",
  Favorite = "favorite",
  User = "user",
  Session = "session",
  Admin = "admin",
}

export interface Permission {
  action: Action;
  resource: Resource;
}
