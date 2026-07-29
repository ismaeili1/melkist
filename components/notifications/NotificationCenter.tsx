"use client";

import Link from "next/link";

import {
  useEffect,
  useState,
} from "react";

import {
  deleteAlert,
  getAlerts,
  markAlertAsRead,
  markAllAlertsAsRead,
} from "@/lib/alerts";

import type {
  PropertyAlert,
} from "@/lib/alerts";

import styles from "./NotificationCenter.module.css";

type NotificationCenterProps = {
  onClose: () => void;
};

export function NotificationCenter({
  onClose,
}: NotificationCenterProps) {
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

  function handleMarkAsRead(
    id: string,
  ) {
    markAlertAsRead(id);

    setAlerts(
      getAlerts(),
    );
  }

  function handleMarkAllAsRead() {
    markAllAlertsAsRead();

    setAlerts(
      getAlerts(),
    );
  }

  function handleDelete(
    id: string,
  ) {
    deleteAlert(id);

    setAlerts(
      getAlerts(),
    );
  }

  const unreadCount =
    alerts.filter(
      (alert) =>
        !alert.read,
    ).length;

  return (
    <section
      className={
        styles.panel
      }
      aria-label="مرکز اعلان‌ها"
    >
      <header
        className={
          styles.header
        }
      >
        <div>
          <span
            className={
              styles.eyebrow
            }
          >
            MELKIST
          </span>

          <h2>
            اعلان‌ها
          </h2>
        </div>

        <button
          type="button"
          onClick={
            onClose
          }
          className={
            styles.closeButton
          }
          aria-label="بستن اعلان‌ها"
        >
          ×
        </button>
      </header>

      {unreadCount > 0 && (
        <button
          type="button"
          className={
            styles.markAllButton
          }
          onClick={
            handleMarkAllAsRead
          }
        >
          علامت‌گذاری همه به‌عنوان خوانده‌شده
        </button>
      )}

      {alerts.length === 0 ? (
        <div
          className={
            styles.empty
          }
        >
          <strong>
            اعلان جدیدی ندارید
          </strong>

          <p>
            وقتی ملک جدیدی با
            جستجوهای ذخیره‌شده
            شما مطابقت داشته باشد،
            اینجا نمایش داده می‌شود.
          </p>
        </div>
      ) : (
        <div
          className={
            styles.list
          }
        >
          {alerts.map(
            (alert) => (
              <article
                key={
                  alert.id
                }
                className={
                  alert.read
                    ? styles.item
                    : `${styles.item} ${styles.unread}`
                }
              >
                <div
                  className={
                    styles.itemContent
                  }
                >
                  <span
                    className={
                      styles.status
                    }
                  >
                    {alert.read
                      ? "اعلان"
                      : "جدید"}
                  </span>

                  <h3>
                    {alert.propertyTitle}
                  </h3>

                  {alert.propertyLocation && (
                    <p>
                      {
                        alert.propertyLocation
                      }
                    </p>
                  )}

                  <time
                    dateTime={
                      alert.createdAt
                    }
                  >
                    {formatAlertDate(
                      alert.createdAt,
                    )}
                  </time>
                </div>

                <div
                  className={
                    styles.actions
                  }
                >
                  <Link
                    href={`/property/${alert.propertyId}`}
                    onClick={() =>
                      handleMarkAsRead(
                        alert.id,
                      )
                    }
                  >
                    مشاهده ملک
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      handleDelete(
                        alert.id,
                      )
                    }
                    aria-label="حذف اعلان"
                  >
                    حذف
                  </button>
                </div>
              </article>
            ),
          )}
        </div>
      )}
    </section>
  );
}

function formatAlertDate(
  value: string,
) {
  try {
    return new Intl.DateTimeFormat(
      "fa-IR",
      {
        dateStyle: "short",
        timeStyle: "short",
      },
    ).format(
      new Date(value),
    );
  } catch {
    return "";
  }
}