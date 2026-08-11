import { UpdateProfileInput } from "@/lib/repositories/profile";

import { InvalidProfileDataError } from "./profile.errors";

export function validateProfileUpdate(
  data: UpdateProfileInput,
): void {
  if (
    data.firstName !== undefined &&
    data.firstName.trim().length < 2
  ) {
    throw new InvalidProfileDataError(
      "First name must contain at least 2 characters",
    );
  }

  if (
    data.lastName !== undefined &&
    data.lastName.trim().length < 2
  ) {
    throw new InvalidProfileDataError(
      "Last name must contain at least 2 characters",
    );
  }

  if (
    data.phone &&
    !/^[0-9+\-() ]+$/.test(data.phone)
  ) {
    throw new InvalidProfileDataError(
      "Phone number is invalid",
    );
  }
}