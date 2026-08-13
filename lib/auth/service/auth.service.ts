import { toAuthUser } from "@/lib/auth/types/auth-user.mapper";
import { UserRepository } from "@/lib/repositories/user";

import { hashPassword } from "@/lib/auth/password/hash";
import { verifyPassword } from "@/lib/auth/password/verify";

import {
  createUserSession,
} from "@/lib/auth/session/services";

import {
  logoutCurrentSession,
} from "@/lib/auth/session/services/logout-current-session";

import {
  getCurrentUser,
  } from "@/lib/auth/session/services/get-current-user";

import type {
  LoginInput,
  RegisterInput,
  AuthUser,
} from "@/lib/auth/types";

export class AuthenticationService {
  async register(
    input: RegisterInput,
  ): Promise<AuthUser> {
    const existing =
      await UserRepository.findByEmail(
        input.email,
      );

    if (existing) {
      throw new Error("Email already exists.");
    }

    const password =
      await hashPassword(
        input.password,
      );

    const user =
      await UserRepository.create({
        email: input.email,
        password,
        firstName: input.firstName,
        lastName: input.lastName,
      });

    await createUserSession({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return toAuthUser(user);
  }

  async login(
    input: LoginInput,
  ): Promise<AuthUser> {
    const user =
      await UserRepository.findByEmail(
        input.email,
      );

    if (!user) {
      throw new Error("Invalid credentials.");
    }

    const ok =
      await verifyPassword(
        input.password,
        user.password,
      );

    if (!ok) {
      throw new Error("Invalid credentials.");
    }

    await createUserSession({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return toAuthUser(user);
  }

  async logout(): Promise<void> {
    await logoutCurrentSession();
  }

  async currentUser(): Promise<AuthUser | null> {
    return getCurrentUser();
  }
}

export const authService =
  new AuthenticationService();
