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
  User = "user",
  Session = "session",
}

export interface Permission {
  action: Action;
  resource: Resource;
}