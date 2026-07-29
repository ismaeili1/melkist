import {
  PROFILE_FIRST_NAME_MAX_LENGTH,
  PROFILE_LAST_NAME_MAX_LENGTH,
  PROFILE_DISPLAY_NAME_MAX_LENGTH,
  PROFILE_DISPLAY_NAME_MIN_LENGTH,
  PROFILE_BIO_MAX_LENGTH,
  PHONE_MAX_LENGTH,
  WEBSITE_MAX_LENGTH,
} from "./profile.constants";

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

function success(): ValidationResult {
  return {
    valid: true,
    errors: [],
  };
}

function failure(message: string): ValidationResult {
  return {
    valid: false,
    errors: [message],
  };
}

export function validateFirstName(
  value: string
): ValidationResult {

  const name = value.trim();

  if (!name.length)
    return failure("First name is required.");

  if (name.length > PROFILE_FIRST_NAME_MAX_LENGTH)
    return failure("First name is too long.");

  return success();

}

export function validateLastName(
  value: string
): ValidationResult {

  const lastName = value.trim();

  if (!lastName.length)
    return failure("Last name is required.");

  if (lastName.length > PROFILE_LAST_NAME_MAX_LENGTH)
    return failure("Last name is too long.");

  return success();

}

export function validateDisplayName(
  value: string
): ValidationResult {

  const displayName = value.trim();

  if (
    displayName.length <
    PROFILE_DISPLAY_NAME_MIN_LENGTH
  )
    return failure("Display name is too short.");

  if (
    displayName.length >
    PROFILE_DISPLAY_NAME_MAX_LENGTH
  )
    return failure("Display name is too long.");

  return success();

}

export function validateBiography(
  value?: string
): ValidationResult {

  if (!value)
    return success();

  if (value.length > PROFILE_BIO_MAX_LENGTH)
    return failure("Biography is too long.");

  return success();

}

export function validatePhone(
  value?: string
): ValidationResult {

  if (!value)
    return success();

  if (value.length > PHONE_MAX_LENGTH)
    return failure("Phone number is invalid.");

  return success();

}

export function validateWebsite(
  value?: string
): ValidationResult {

  if (!value)
    return success();

  if (value.length > WEBSITE_MAX_LENGTH)
    return failure("Website address is too long.");

  try {
    new URL(value);
  } catch {
    return failure("Website address is invalid.");
  }

  return success();

}

import type { UserProfile } from "./profile.types";

export function validateProfile(
  profile: UserProfile
): ValidationResult {

  const errors: string[] = [];

  const validators = [
    validateFirstName(profile.firstName),
    validateLastName(profile.lastName),
    validateDisplayName(profile.displayName),
    validateBiography(profile.biography),
    validatePhone(profile.contact.phone),
    validateWebsite(profile.contact.website),
  ];

  for (const result of validators) {
    if (!result.valid) {
      errors.push(...result.errors);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };

}

