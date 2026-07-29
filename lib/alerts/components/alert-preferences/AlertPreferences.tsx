"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getAlertPreferences,
  saveAlertPreferences,
} from "@/lib/alerts";

import type {
  AlertFrequency,
  AlertPreferences as AlertPreferencesData,
} from "@/lib/alerts";

import styles from "./AlertPreferences.module.css";

export function AlertPreferences() {
  const [
    preferences,
    setPreferences,
  ] = useState<AlertPreferencesData | null>(
    null,
  );

  const [
    saved,
    setSaved,
  ] = useState(false);

  useEffect(() => {
    setPreferences(
      getAlertPreferences(),
    );
  }, []);

  function handleEnabledChange(
    enabled: boolean,
  ) {
    if (!preferences) {
      return;
    }

    setPreferences({
      ...preferences,
      enabled,
    });

    setSaved(false);
  }

  function handleFrequencyChange(
    frequency: AlertFrequency,
  ) {
    if (!preferences) {
      return;
    }

    setPreferences({
      ...preferences,
      frequency,
    });

    setSaved(false);
  }

  function handleSave() {
    if (!preferences) {
      return;
    }

    const savedPreferences =
      saveAlertPreferences(
        preferences,
      );

    setPreferences(
      savedPreferences,
    );

    setSaved(true);
  }

  if (!preferences) {
    return (
      <section
        className={
          styles.loading
        }
      >
        در حال بارگذاری تنظیمات اعلان‌ها...
      </section>
    );
  }

  return (
    <section
      className={
        styles.panel
      }
    >
      <div
        className={
          styles.header
        }
      >
        <span
          className={
            styles.eyebrow
          }
        >
          MELKIST ALERTS
        </span>

        <h1>
          تنظیمات اعلان‌ها
        </h1>

        <p>
          نحوه دریافت اعلان‌های
          مربوط به جستجوهای ذخیره‌شده
          خود را مدیریت کنید.
        </p>
      </div>

      <div
        className={
          styles.content
        }
      >
        <label
          className={
            styles.toggleRow
          }
        >
          <span>
            <strong>
              فعال‌سازی اعلان‌ها
            </strong>

            <small>
              هنگام پیدا شدن ملک جدید
              مطابق جستجوهای ذخیره‌شده
              اطلاع دهید.
            </small>
          </span>

          <input
            type="checkbox"
            checked={
              preferences.enabled
            }
            onChange={(event) =>
              handleEnabledChange(
                event.target.checked,
              )
            }
          />
        </label>

        <label
          className={
            styles.field
          }
        >
          <span>
            زمان‌بندی اعلان
          </span>

          <select
            value={
              preferences.frequency
            }
            onChange={(event) =>
              handleFrequencyChange(
                event.target
                  .value as AlertFrequency,
              )
            }
          >
            <option value="INSTANT">
              فوری
            </option>

            <option value="DAILY">
              روزانه
            </option>

            <option value="WEEKLY">
              هفتگی
            </option>
          </select>
        </label>

        <div
          className={
            styles.actions
          }
        >
          <button
            type="button"
            onClick={
              handleSave
            }
          >
            ذخیره تنظیمات
          </button>

          {saved && (
            <span
              className={
                styles.success
              }
            >
              تنظیمات ذخیره شد.
            </span>
          )}
        </div>
      </div>
    </section>
  );
}