import type {
  AlertEmailMessage,
  PropertyAlert,
} from "./alerts.types";

export function createAlertEmailMessage(
  alert: PropertyAlert,
  recipientEmail: string,
): AlertEmailMessage {
  return {
    to: recipientEmail,

    subject:
      "ملک جدید مطابق جستجوی ذخیره‌شده شما",

    text:
      `یک ملک جدید با جستجوی ذخیره‌شده شما مطابقت دارد.\n\n` +
      `عنوان ملک: ${alert.propertyTitle}\n` +
      `موقعیت: ${
        alert.propertyLocation ??
        "نامشخص"
      }\n\n` +
      `مشاهده ملک:\n` +
      `/property/${alert.propertyId}`,
  };
}

export const unavailableEmailAdapter = {
  async sendEmail(
    alertId: string,
    message: AlertEmailMessage,
  ) {
    return {
      alertId,

      status:
        "UNAVAILABLE" as const,

      reason:
        "Email delivery is not available yet.",
    };
  },
};