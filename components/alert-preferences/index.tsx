"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  getAlertPreferences,
  updateAlertPreferences,
} from "@/lib/alerts";
import type {
  AlertFrequency,
  AlertPreferences as AlertPreferencesType,
} from "@/lib/alerts";

export function AlertPreferences() {
  const t = useTranslations("settings.alerts");
  const [preferences, setPreferences] = useState<AlertPreferencesType | null>(
    null,
  );

  useEffect(() => {
    setPreferences(getAlertPreferences());
  }, []);

  if (!preferences) {
    return (
      <main style={{ padding: "40px" }}>
        <p>{t("loading")}</p>
      </main>
    );
  }

  function update(changes: Partial<AlertPreferencesType>) {
    const updated = updateAlertPreferences(changes);
    setPreferences(updated);
  }

  return (
    <main style={{ maxWidth: "720px", margin: "0 auto", padding: "40px 20px" }}>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>

      <section style={{ marginTop: "32px", display: "grid", gap: "20px" }}>
        <label>
          <input
            type="checkbox"
            checked={preferences.enabled}
            onChange={(event) =>
              update({ enabled: event.target.checked })
            }
          />
          {" "}
          {t("enableLabel")}
        </label>

        <label>
          {t("frequencyLabel")}{" "}
          <select
            value={preferences.frequency}
            onChange={(event) =>
              update({
                frequency: event.target.value as AlertFrequency,
              })
            }
          >
            <option value="INSTANT">{t("frequencyInstant")}</option>
            <option value="DAILY_DIGEST">{t("frequencyDailyDigest")}</option>
          </select>
        </label>

        <label>
          <input
            type="checkbox"
            checked={preferences.inApp}
            onChange={(event) => update({ inApp: event.target.checked })}
          />
          {" "}
          {t("inAppLabel")}
        </label>

        <label>
          <input
            type="checkbox"
            checked={preferences.email}
            onChange={(event) => update({ email: event.target.checked })}
          />
          {" "}
          {t("emailLabel")}
        </label>

        <label>
          <input
            type="checkbox"
            checked={preferences.push}
            onChange={(event) => update({ push: event.target.checked })}
          />
          {" "}
          {t("pushLabel")}
        </label>
      </section>
    </main>
  );
}
