import { Action, Resource } from "./permissions";

type SessionUser = {
  id: string;
  role: string;
};

export function can(
  session: SessionUser,
  action: Action,
  resource: Resource,
  ownerId?: string,
): boolean {

  if (session.role === "ADMIN") {
    return true;
  }

  switch (resource) {

    case Resource.Profile:
      return (
        action === Action.Read ||
        action === Action.Update
      ) && ownerId === session.id;

    case Resource.Property:
      return true;

    default:
      return false;
  }
}