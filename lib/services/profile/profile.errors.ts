export class ProfileNotFoundError extends Error {
  constructor() {
    super("Profile not found");
    this.name = "ProfileNotFoundError";
  }
}

export class DuplicateEmailError extends Error {
  constructor() {
    super("Email already exists");
    this.name = "DuplicateEmailError";
  }
}

export class InvalidProfileDataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidProfileDataError";
  }
}