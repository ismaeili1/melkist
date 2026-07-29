import type {
  LoginInput,
  RegisterInput,
  AuthUser,
} from "./auth.types";

export class AuthenticationService {
  async register(
    input: RegisterInput,
  ): Promise<AuthUser> {
    throw new Error(
      "Register is not implemented.",
    );
  }

  async login(
    input: LoginInput,
  ): Promise<AuthUser> {
    throw new Error(
      "Login is not implemented.",
    );
  }

  async logout(): Promise<void> {
    return;
  }

  async currentUser(): Promise<AuthUser | null> {
    return null;
  }
}

export const authService =
  new AuthenticationService();