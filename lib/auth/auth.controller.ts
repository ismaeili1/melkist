import { authService } from "./service";

import type {
  LoginInput,
  RegisterInput,
} from "./service/auth.types";

export class AuthenticationController {
  async register(
    input: RegisterInput,
  ) {
    return authService.register(input);
  }

  async login(
    input: LoginInput,
  ) {
    return authService.login(input);
  }

  async logout() {
    return authService.logout();
  }

  async currentUser() {
    return authService.currentUser();
  }
}

export const authController =
  new AuthenticationController();