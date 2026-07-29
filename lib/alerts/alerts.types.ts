export type PropertyAlert = {
  id: string;

  savedSearchId: string;

  propertyId: string;

  propertyTitle: string;

  propertyLocation?: string;

  createdAt: string;

  read: boolean;
};

export type AlertFrequency =
  | "INSTANT"
  | "DAILY_DIGEST";

export type AlertPreferences = {
  enabled: boolean;

  frequency: AlertFrequency;

  inApp: boolean;

  email: boolean;

  push: boolean;
};

export type AlertDeliveryChannel =
  | "IN_APP"
  | "EMAIL"
  | "PUSH";

export type AlertDeliveryIntent = {
  alertId: string;

  enabled: boolean;

  frequency: AlertFrequency;

  channels: AlertDeliveryChannel[];

  inApp: boolean;

  email: boolean;

  push: boolean;

  shouldDeliver: boolean;
};

export type AlertDeliveryStatus =
  | "DELIVERED"
  | "SKIPPED"
  | "FAILED"
  | "UNAVAILABLE";

export type AlertDeliveryResult = {
  alertId: string;

  channel: AlertDeliveryChannel;

  status: AlertDeliveryStatus;

  reason?: string;

  error?: string;
};


export type AlertEmailMessage = {
  to: string;

  subject: string;

  text: string;

  html?: string;
};

export type EmailDeliveryStatus =
  | "DELIVERED"
  | "UNAVAILABLE"
  | "FAILED";


  export type EmailDeliveryResult = {
  alertId: string;

  status: EmailDeliveryStatus;

  provider?: string;

  reason?: string;
};


