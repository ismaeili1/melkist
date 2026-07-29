import type {
  PropertyAlert,
} from "./alerts.types";

import {
  ALERTS_STORAGE_KEY,
} from "./alerts.constants";

function isBrowser() {
  return (
    typeof window !== "undefined"
  );
}

export function getAlerts(): PropertyAlert[] {
  if (!isBrowser()) {
    return [];
  }

  const raw =
    window.localStorage.getItem(
      ALERTS_STORAGE_KEY,
    );

  if (!raw) {
    return [];
  }

  try {
    const parsed =
      JSON.parse(raw);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed;
  } catch {
    return [];
  }
}

function writeAlerts(
  alerts: PropertyAlert[],
) {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(
    ALERTS_STORAGE_KEY,
    JSON.stringify(alerts),
  );
}

export function getAlertById(
  id: string,
): PropertyAlert | null {
  return (
    getAlerts().find(
      (alert) =>
        alert.id === id,
    ) ?? null
  );
}

export function createAlert(
  alert: Omit<
    PropertyAlert,
    "id" | "createdAt" | "read"
  >,
): PropertyAlert {
  const alerts =
    getAlerts();

  const newAlert: PropertyAlert = {
    ...alert,

    id: crypto.randomUUID(),

    createdAt:
      new Date().toISOString(),

    read: false,
  };

  writeAlerts([
    newAlert,
    ...alerts,
  ]);

  return newAlert;
}

export function hasAlertForProperty(
  savedSearchId: string,
  propertyId: string,
): boolean {
  const alerts =
    getAlerts();

  return alerts.some(
    (alert) =>
      alert.savedSearchId ===
        savedSearchId &&
      alert.propertyId ===
        propertyId,
  );
}

export function createAlertIfNew(
  alert: Omit<
    PropertyAlert,
    "id" | "createdAt" | "read"
  >,
): PropertyAlert | null {
  const exists =
    hasAlertForProperty(
      alert.savedSearchId,
      alert.propertyId,
    );

  if (exists) {
    return null;
  }

  return createAlert(
    alert,
  );
}

export function markAlertAsRead(
  id: string,
): PropertyAlert | null {
  const alerts =
    getAlerts();

  let updatedAlert:
    PropertyAlert | null = null;

  const nextAlerts =
    alerts.map(
      (alert) => {
        if (alert.id !== id) {
          return alert;
        }

        updatedAlert = {
          ...alert,

          read: true,
        };

        return updatedAlert;
      },
    );

  if (!updatedAlert) {
    return null;
  }

  writeAlerts(
    nextAlerts,
  );

  return updatedAlert;
}

export function markAllAlertsAsRead(): void {
  const alerts =
    getAlerts();

  const nextAlerts =
    alerts.map(
      (alert) => ({
        ...alert,

        read: true,
      }),
    );

  writeAlerts(
    nextAlerts,
  );
}

export function deleteAlert(
  id: string,
): boolean {
  const alerts =
    getAlerts();

  const nextAlerts =
    alerts.filter(
      (alert) =>
        alert.id !== id,
    );

  if (
    nextAlerts.length ===
    alerts.length
  ) {
    return false;
  }

  writeAlerts(
    nextAlerts,
  );

  return true;
}

export function getUnreadAlertCount(): number {
  return getAlerts().filter(
    (alert) =>
      !alert.read,
  ).length;
}