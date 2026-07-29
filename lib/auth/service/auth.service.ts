import { UserRepository } from "@/lib/repositories/user";

import { hashPassword } from "@/lib/auth/password/hash";
import { verifyPassword } from "@/lib/auth/password/verify";

import { createSession } from "@/lib/auth/session/createSession";
import { destroySession } from "@/lib/auth/session/destroySession";
import { getSession } from "@/lib/auth/session/getSession";

import type { UserSession } from "@/lib/auth/session/session.types";

import type {
  LoginInput,
  RegisterInput,
  AuthUser,
} from "./auth.types";

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
        });

    await createSession({
      userId: user.id,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
    });

    return user;
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

    await createSession({
      userId: user.id,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
    });

    return user;
  }

  async logout(): Promise<void> {
    await destroySession();
  }

  async currentUser(): Promise<UserSession | null> {
    const session = await getSession();

    if (!session) {
      return null;
    }

    return session;
  }
}

export const authService =
  new AuthenticationService();