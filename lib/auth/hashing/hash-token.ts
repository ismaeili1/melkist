import { sha256 } from "./sha256";

export function hashToken(
  token: string,
): string {
  return sha256(token);
}
