import type {
  UserProfile,
  ProfileAddress,
} from "./profile.types";

export function buildFullName(
  firstName: string,
  lastName: string
): string {

  return `${firstName.trim()} ${lastName.trim()}`
    .replace(/\s+/g, " ")
    .trim();

}

export function buildDisplayName(
  profile: Pick<UserProfile, "displayName" | "firstName" | "lastName">
): string {

  if (profile.displayName.trim().length > 0) {
    return profile.displayName.trim();
  }

  return buildFullName(
    profile.firstName,
    profile.lastName
  );

}

export function buildAvatarInitials(
  firstName: string,
  lastName: string
): string {

  return (
    firstName.charAt(0) +
    lastName.charAt(0)
  ).toUpperCase();

}

export function buildProfileSlug(
  displayName: string
): string {

  return displayName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");

}

export function formatAddress(
  address: ProfileAddress
): string {

  return [

    address.country,

    address.province,

    address.city,

    address.district,

    address.neighborhood,

  ]

    .filter(Boolean)

    .join(" / ");

}

export function calculateProfileCompletion(
  profile: UserProfile
): number {

  const checks = [

    Boolean(profile.firstName),

    Boolean(profile.lastName),

    Boolean(profile.displayName),

    Boolean(profile.avatar.url),

    Boolean(profile.contact.mobile),

    Boolean(profile.address.country),

    Boolean(profile.address.city),

    Boolean(profile.biography),

  ];

  const completed = checks.filter(Boolean).length;

  return Math.round(
    (completed / checks.length) * 100
  );

}

export function isProfileComplete(
  profile: UserProfile
): boolean {

  return calculateProfileCompletion(profile) >= 90;

}

export function isVerified(
  profile: UserProfile
): boolean {

  return profile.verification.status === "verified";

}

export function hasAvatar(
  profile: UserProfile
): boolean {

  return Boolean(profile.avatar.url);

}

