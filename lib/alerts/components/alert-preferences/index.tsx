"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getAlertPreferences,
  updateAlertPreferences,
} from "@/lib/alerts";

import type {
  AlertFrequency,
  AlertPreferences as AlertPreferencesType,
} from "@/lib/alerts";

export function AlertPreferences() {
  const [
    preferences,
    setPreferences,
  ] = useState<AlertPreferencesType | null>(
    null,
  );

  useEffect(() => {
    setPreferences(
      getAlertPreferences(),
    );
  }, []);

  if (!preferences) {
    return (
      <main>
        <p>
          در حال بارگذاری تنظیمات اعلان‌ها...
        </p>
      </main>
    );
  }

  function update(
    changes: Partial<AlertPreferencesType>,
  ) {
    const updated =
      updateAlertPreferences(
        changes,
      );

    setPreferences(updated);
  }

  return (
    <main
      style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "40px 20px",
        direction: "rtl",
      }}
    >
      <h1>
        تنظیمات اعلان‌ها
      </h1>

      <p>
        نحوه دریافت اعلان‌های مربوط به
        جستجوهای ذخیره‌شده خود را مدیریت کنید.
      </p>

      <section
        style={{
          marginTop: "32px",
          display: "grid",
          gap: "20px",
        }}
      >
        <label>
          <input
            type="checkbox"
            checked={preferences.enabled}
            onChange={(event) =>
              update({
                enabled:
                  event.target.checked,
              })
            }
          />

          {" "}
          فعال‌سازی اعلان‌های ملکی
        </label>

        <label>
          فرکانس اعلان‌ها

          <select
            value={preferences.frequency}
            onChange={(event) =>
              update({
                frequency:
                  event.target
                    .value as AlertFrequency,
              })
            }
          >
            <option value="INSTANT">
              فوری
            </option>

            <option value="DAILY_DIGEST">
              خلاصه روزانه
            </option>
          </select>
        </label>

        <label>
          <input
            type="checkbox"
            checked={preferences.inApp}
            onChange={(event) =>
              update({
                inApp:
                  event.target.checked,
              })
            }
          />

          {" "}
          اعلان داخل سایت
        </label>

        <label>
          <input
            type="checkbox"
            checked={preferences.email}
            onChange={(event) =>
              update({
                email:
                  event.target.checked,
              })
            }
          />

          {" "}
          اعلان ایمیلی
        </label>

        <label>
          <input
            type="checkbox"
            checked={preferences.push}
            onChange={(event) =>
              update({
                push:
                  event.target.checked,
              })
            }
          />

          {" "}
          اعلان Push
        </label>
      </section>
    </main>
  );
}