import crypto from "crypto";

import type { FingerprintInput } from "./fingerprint.types";

export function createFingerprint(
  input: FingerprintInput,
): string {

  const raw = [
    input.userAgent,
    input.ipAddress,
    input.language ?? "",
    input.timezone ?? "",
  ].join("|");

  return crypto
    .createHash("sha256")
    .update(raw)
    .digest("hex");
}
