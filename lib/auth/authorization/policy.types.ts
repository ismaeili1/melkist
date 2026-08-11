import { UserRole } from "@prisma/client";

import type {
    Action,
} from "./actions";

import type {
    Resource,
} from "./resources";

export interface AuthorizationContext {

    userId:string;

    role:UserRole;

}

export interface AuthorizationRequest {

    action:Action;

    resource:Resource;

    ownerId?:string;

}