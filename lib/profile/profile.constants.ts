/**
 * MELKIST
 * Profile Constants
 * v1.3.1
 */

import type {
  ProfileLanguage,
  ProfileTheme,
  ProfileVisibility,
} from "./profile.types";

/* -------------------------------------------------------------------------- */
/*                               General Profile                              */
/* -------------------------------------------------------------------------- */

export const PROFILE_DISPLAY_NAME_MAX_LENGTH = 100;
export const PROFILE_DISPLAY_NAME_MIN_LENGTH = 3;

export const PROFILE_FIRST_NAME_MAX_LENGTH = 50;
export const PROFILE_LAST_NAME_MAX_LENGTH = 50;

export const PROFILE_BIO_MAX_LENGTH = 1000;

/* -------------------------------------------------------------------------- */
/*                                  Avatar                                    */
/* -------------------------------------------------------------------------- */

export const PROFILE_AVATAR_MAX_SIZE = 5 * 1024 * 1024;

export const PROFILE_ALLOWED_AVATAR_EXTENSIONS = [
  "jpg",
  "jpeg",
  "png",
  "webp",
] as const;

export const PROFILE_AVATAR_MAX_WIDTH = 2048;

export const PROFILE_AVATAR_MAX_HEIGHT = 2048;

/* -------------------------------------------------------------------------- */
/*                                 Languages                                  */
/* -------------------------------------------------------------------------- */

export const SUPPORTED_PROFILE_LANGUAGES: readonly ProfileLanguage[] = [
  "fa",
  "en",
  "ar",
  "tr",
];

export const DEFAULT_PROFILE_LANGUAGE: ProfileLanguage = "fa";

/* -------------------------------------------------------------------------- */
/*                                    Theme                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_PROFILE_THEME: ProfileTheme = "system";

/* -------------------------------------------------------------------------- */
/*                                 Visibility                                 */
/* -------------------------------------------------------------------------- */

export const DEFAULT_PROFILE_VISIBILITY: ProfileVisibility = "public";

/* -------------------------------------------------------------------------- */
/*                               Contact Limits                               */
/* -------------------------------------------------------------------------- */

export const PHONE_MAX_LENGTH = 20;

export const WEBSITE_MAX_LENGTH = 255;

/* -------------------------------------------------------------------------- */
/*                                Address                                     */
/* -------------------------------------------------------------------------- */

export const COUNTRY_MAX_LENGTH = 100;

export const PROVINCE_MAX_LENGTH = 100;

export const CITY_MAX_LENGTH = 100;

export const DISTRICT_MAX_LENGTH = 100;

export const NEIGHBORHOOD_MAX_LENGTH = 100;

export const POSTAL_CODE_MAX_LENGTH = 20;

export const ADDRESS_LINE_MAX_LENGTH = 500;

/* -------------------------------------------------------------------------- */
/*                                Company                                     */
/* -------------------------------------------------------------------------- */

export const COMPANY_NAME_MAX_LENGTH = 150;

export const COMPANY_POSITION_MAX_LENGTH = 100;

/* -------------------------------------------------------------------------- */
/*                                Social                                      */
/* -------------------------------------------------------------------------- */

export const SOCIAL_LINK_MAX_LENGTH = 255;

/* -------------------------------------------------------------------------- */
/*                               Dashboard                                    */
/* -------------------------------------------------------------------------- */

export const DASHBOARD_WIDGET_LIMIT = 20;

/* -------------------------------------------------------------------------- */
/*                            Notification Defaults                           */
/* -------------------------------------------------------------------------- */

export const DEFAULT_NOTIFICATION_SETTINGS = {
  email: true,
  sms: false,
  push: true,
  inApp: true,
} as const;


