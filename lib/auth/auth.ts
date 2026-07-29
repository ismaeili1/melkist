import {
  authController,
} from "./auth.controller";

export const Auth = {
  login:
    authController.login.bind(
      authController,
    ),

  register:
    authController.register.bind(
      authController,
    ),

  logout:
    authController.logout.bind(
      authController,
    ),

  currentUser:
    authController.currentUser.bind(
      authController,
    ),
};