import type {
  AlertDeliveryIntent,
  AlertDeliveryResult,
  PropertyAlert,
} from "./alerts.types";

import {
  unavailableEmailAdapter,
} from "./alerts.email";

function dispatchInApp(
  alert: PropertyAlert,
): AlertDeliveryResult {
  return {
    alertId: alert.id,

    channel: "IN_APP",

    status: "DELIVERED",
  };
}

async function dispatchEmail(
  alert: PropertyAlert,
): Promise<AlertDeliveryResult> {
  const result =
    await unavailableEmailAdapter.sendEmail(
      alert.id,

      {
        to: "",

        subject: "MELKIST Alert",

        text:
          "A new alert is available.",
      },
    );

  return {
    alertId: alert.id,

    channel: "EMAIL",

    status: "UNAVAILABLE",

    reason:
      result.reason,
  };
}

function dispatchPush(
  alert: PropertyAlert,
): AlertDeliveryResult {
  return {
    alertId: alert.id,

    channel: "PUSH",

    status: "UNAVAILABLE",

    reason:
      "Push delivery is not available yet.",
  };
}

export async function dispatchAlertDelivery(
  alert: PropertyAlert,

  deliveryIntent: AlertDeliveryIntent,
): Promise<AlertDeliveryResult[]> {
  if (
    !deliveryIntent.shouldDeliver
  ) {
    return [];
  }

  const results:
    AlertDeliveryResult[] = [];

  for (
    const channel of
    deliveryIntent.channels
  ) {
    switch (channel) {
      case "IN_APP":
        results.push(
          dispatchInApp(alert),
        );
        break;

      case "EMAIL":
        results.push(
          await dispatchEmail(alert),
        );
        break;

      case "PUSH":
        results.push(
          dispatchPush(alert),
        );
        break;
    }
  }

  return results;
}