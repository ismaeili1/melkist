import type {
  AlertDeliveryIntent,
  AlertPreferences,
  PropertyAlert,
} from "./alerts.types";

export function createAlertDeliveryIntent(
  alert: PropertyAlert,
  preferences: AlertPreferences,
): AlertDeliveryIntent {
  const channels = [];

  if (
    preferences.inApp
  ) {
    channels.push("IN_APP" as const);
  }

  if (
    preferences.email
  ) {
    channels.push("EMAIL" as const);
  }

  if (
    preferences.push
  ) {
    channels.push("PUSH" as const);
  }

  const shouldDeliver =
    preferences.enabled &&
    channels.length > 0;

  return {
    alertId: alert.id,

    enabled:
      preferences.enabled,

    frequency:
      preferences.frequency,

    channels,

    inApp:
      preferences.inApp,

    email:
      preferences.email,

    push:
      preferences.push,

    shouldDeliver,
  };
}