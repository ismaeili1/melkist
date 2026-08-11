import { hashToken } from "./hash-token";

export function compareToken(
  plain: string,
  hash: string,
): boolean {
  return hashToken(plain) === hash;
}
