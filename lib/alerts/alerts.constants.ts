import type {
  AlertPreferences,
} from "./alerts.types";

export const ALERTS_STORAGE_KEY =
  "melkist_alerts";

export const ALERT_PREFERENCES_STORAGE_KEY =
  "melkist_alert_preferences";

export const DEFAULT_ALERT_PREFERENCES:
  AlertPreferences = {
  enabled: true,

  frequency: "INSTANT",

  inApp: true,

  email: false,

  push: false,
};