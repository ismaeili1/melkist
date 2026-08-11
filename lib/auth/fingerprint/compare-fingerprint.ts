import type { FingerprintInput } from "./fingerprint.types";

import { createFingerprint } from "./create-fingerprint";

export function compareFingerprint(
  input: FingerprintInput,
  fingerprint: string,
): boolean {

  return (
    createFingerprint(input) === fingerprint
  );

}
