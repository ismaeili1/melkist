export type ProfileLanguage =
  | "fa"
  | "en"
  | "ar"
  | "tr";

export type ProfileTheme =
  | "system"
  | "light"
  | "dark";

export type ProfileGender =
  | "male"
  | "female"
  | "other"
  | "unknown";

export type ProfileVisibility =
  | "public"
  | "private"
  | "contacts";

export type VerificationStatus =
  | "unverified"
  | "pending"
  | "verified"
  | "rejected";

  export interface ProfileAddress {

  country: string;

  province: string;

  city: string;

  district?: string;

  neighborhood?: string;

  postalCode?: string;

  addressLine?: string;

}

export interface ProfileContact {

  email: string;

  phone?: string;

  mobile?: string;

  website?: string;

}

export interface ProfileSocialLinks {

  instagram?: string;

  telegram?: string;

  linkedin?: string;

  x?: string;

  youtube?: string;

  facebook?: string;

}

export interface ProfileAvatar {

  url?: string;

  thumbnailUrl?: string;

  alt?: string;

  updatedAt?: Date;

}

export interface CompanyInformation {

  companyName?: string;

  registrationNumber?: string;

  taxNumber?: string;

  position?: string;

  website?: string;

}

export interface DashboardPreferences {

  language: ProfileLanguage;

  theme: ProfileTheme;

  sidebarCollapsed: boolean;

  showRecentActivity: boolean;

  showStatistics: boolean;

}

export interface NotificationPreferences {

  email: boolean;

  sms: boolean;

  push: boolean;

  inApp: boolean;

}

export interface VerificationInformation {

  status: VerificationStatus;

  verifiedAt?: Date;

  verifiedBy?: string;

  notes?: string;

}

export interface UserProfile {

  id: string;

  userId: string;

  firstName: string;

  lastName: string;

  displayName: string;

  biography?: string;

  gender: ProfileGender;

  birthDate?: Date;

  language: ProfileLanguage;

  visibility: ProfileVisibility;

  avatar: ProfileAvatar;

  contact: ProfileContact;

  address: ProfileAddress;

  company?: CompanyInformation;

  social: ProfileSocialLinks;

  dashboard: DashboardPreferences;

  notifications: NotificationPreferences;

  verification: VerificationInformation;

  createdAt: Date;

  updatedAt: Date;

}

