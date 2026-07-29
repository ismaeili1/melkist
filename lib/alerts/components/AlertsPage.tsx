"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getAlerts,
} from "@/lib/alerts";

import type {
  PropertyAlert,
} from "@/lib/alerts";

import {
  AlertCard,
} from "@/lib/alerts/AlertCard";

export function AlertsPage() {
  const [
    alerts,
    setAlerts,
  ] = useState<PropertyAlert[]>(
    [],
  );

  useEffect(() => {
    setAlerts(
      getAlerts(),
    );
  }, []);

  return (
    <main>
      <h1>
        هشدارهای ملکی
      </h1>

      {alerts.length === 0 ? (
        <p>
          هنوز هشدار جدیدی ندارید.
        </p>
      ) : (
        alerts.map(
          (alert) => (
            <AlertCard
              key={alert.id}
              alert={alert}
            />
          ),
        )
      )}
    </main>
  );
}