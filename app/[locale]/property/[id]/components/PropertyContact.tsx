"use client";

import { useState } from "react";

import {
FavoriteButton,
} from "@/components/real-estate/FavoriteButton";

import {
ShareButton,
} from "@/components/real-estate/ShareButton";

import type {
PropertyResult,
} from "../../property-data";

import styles from "./PropertyContact.module.css";

type PropertyContactProps = {
property: PropertyResult;
};

type InquiryType =
| "INFORMATION"
| "VIEWING";

export function PropertyContact({
property,
}: PropertyContactProps) {
const [isOpen, setIsOpen] =
useState(false);

const [inquiryType, setInquiryType] =
useState<InquiryType>(
"INFORMATION",
);

const [name, setName] =
useState("");

const [phone, setPhone] =
useState("");

const [message, setMessage] =
useState("");

const [isSubmitting, setIsSubmitting] =
useState(false);

const [submitted, setSubmitted] =
useState(false);

function openInquiry(
type: InquiryType,
) {
setInquiryType(type);
setSubmitted(false);
setIsOpen(true);
}

function closeInquiry() {
if (isSubmitting) {
return;
}

setIsOpen(false);
}

async function handleSubmit(
event: React.FormEvent<HTMLFormElement>,
) {
event.preventDefault();

if (!name.trim()) {
  return;
}

if (!phone.trim()) {
  return;
}

setIsSubmitting(true);

await new Promise((resolve) =>
  setTimeout(resolve, 700),
);

setIsSubmitting(false);

setSubmitted(true);
}

return (
<> <section
     className={styles.section}
   > <div
       className={styles.heading}
     > <span>
CONTACT & LEAD </span>

      <h2>
        درباره این ملک اطلاعات بیشتری
        دریافت کنید
      </h2>
    </div>

    <p
      className={
        styles.description
      }
    >
      برای دریافت اطلاعات بیشتر درباره
      این ملک یا هماهنگی بازدید، درخواست
      خود را ثبت کنید.
    </p>

    <div
      className={styles.actions}
    >
      <button
        type="button"
        className={
          styles.primaryButton
        }
        onClick={() =>
          openInquiry(
            "INFORMATION",
          )
        }
      >
        درخواست اطلاعات
      </button>

      <button
        type="button"
        className={
          styles.secondaryButton
        }
        onClick={() =>
          openInquiry(
            "VIEWING",
          )
        }
      >
        درخواست بازدید
      </button>

      <FavoriteButton
        propertyId={property.id}
      />

      <ShareButton
        title={property.title}
        text={`مشاهده ملک ${property.title} در MELKIST`}
      />
    </div>
  </section>

  {isOpen && (
    <div
      className={styles.overlay}
      role="presentation"
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          closeInquiry();
        }
      }}
    >
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-title"
      >
        <div
          className={
            styles.modalHeader
          }
        >
          <div>
            <span
              className={
                styles.modalEyebrow
              }
            >
              MELKIST INQUIRY
            </span>

            <h3 id="inquiry-title">
              {inquiryType ===
              "VIEWING"
                ? "درخواست بازدید از ملک"
                : "درخواست اطلاعات بیشتر"}
            </h3>
          </div>

          <button
            type="button"
            className={
              styles.closeButton
            }
            onClick={closeInquiry}
            aria-label="بستن فرم"
          >
            ×
          </button>
        </div>

        {submitted ? (
          <div
            className={
              styles.successState
            }
          >
            <strong>
              درخواست شما ثبت شد.
            </strong>

            <p>
              اطلاعات درخواست شما برای
              پیگیری بعدی آماده شد.
            </p>

            <button
              type="button"
              className={
                styles.primaryButton
              }
              onClick={closeInquiry}
            >
              بستن
            </button>
          </div>
        ) : (
          <form
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="propertyId"
              value={property.id}
              readOnly
            />

            <input
              type="hidden"
              name="inquiryType"
              value={inquiryType}
              readOnly
            />

            <label
              className={styles.field}
            >
              <span>
                نام و نام خانوادگی
              </span>

              <input
                type="text"
                name="name"
                value={name}
                onChange={(event) =>
                  setName(
                    event.target.value,
                  )
                }
                placeholder="نام خود را وارد کنید"
                required
              />
            </label>

            <label
              className={styles.field}
            >
              <span>
                شماره تماس
              </span>

              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={(event) =>
                  setPhone(
                    event.target.value,
                  )
                }
                placeholder="شماره تماس"
                required
              />
            </label>

            <label
              className={styles.field}
            >
              <span>
                پیام
              </span>

              <textarea
                name="message"
                value={message}
                onChange={(event) =>
                  setMessage(
                    event.target.value,
                  )
                }
                placeholder={
                  inquiryType ===
                  "VIEWING"
                    ? "زمان پیشنهادی خود برای بازدید را بنویسید"
                    : "سؤال یا درخواست خود را بنویسید"
                }
                rows={5}
              />
            </label>

            <button
              type="submit"
              className={
                styles.submitButton
              }
              disabled={
                isSubmitting
              }
            >
              {isSubmitting
                ? "در حال ثبت..."
                : "ثبت درخواست"}
            </button>
          </form>
        )}
      </div>
    </div>
  )}
</>
);
}
