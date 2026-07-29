import type {
  AlertPreferences,
} from "./alerts.types";

import {
  ALERT_PREFERENCES_STORAGE_KEY,
  DEFAULT_ALERT_PREFERENCES,
} from "./alerts.constants";

function isBrowser() {
  return (
    typeof window !== "undefined"
  );
}

export function getAlertPreferences(): AlertPreferences {
  if (!isBrowser()) {
    return {
      ...DEFAULT_ALERT_PREFERENCES,
    };
  }

  const raw =
    window.localStorage.getItem(
      ALERT_PREFERENCES_STORAGE_KEY,
    );

  if (!raw) {
    return {
      ...DEFAULT_ALERT_PREFERENCES,
    };
  }

  try {
    const parsed =
      JSON.parse(raw);

    return {
      ...DEFAULT_ALERT_PREFERENCES,
      ...parsed,
    };
  } catch {
    return {
      ...DEFAULT_ALERT_PREFERENCES,
    };
  }
}

export function saveAlertPreferences(
  preferences: AlertPreferences,
): AlertPreferences {
  if (isBrowser()) {
    window.localStorage.setItem(
      ALERT_PREFERENCES_STORAGE_KEY,
      JSON.stringify(
        preferences,
      ),
    );
  }

  return preferences;
}

export function updateAlertPreferences(
  changes: Partial<AlertPreferences>,
): AlertPreferences {
  const current =
    getAlertPreferences();

  const updated: AlertPreferences = {
    ...current,
    ...changes,
  };

  return saveAlertPreferences(
    updated,
  );
}