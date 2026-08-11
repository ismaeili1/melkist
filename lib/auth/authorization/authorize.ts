import { can } from "./ability";
import { Action, Resource } from "./permissions";

type SessionUser = {
  id: string;
  role: string;
};

type AuthorizeInput = {
  session: SessionUser;
  action: Action;
  resource: Resource;
  ownerId?: string;
};

export function authorize({
  session,
  action,
  resource,
  ownerId,
}: AuthorizeInput): void {

  if (
    !can(
      session,
      action,
      resource,
      ownerId,
    )
  ) {
    throw new Error("Forbidden");
  }

}