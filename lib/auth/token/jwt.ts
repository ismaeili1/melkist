export interface JwtPayload {
  userId: string;
  email: string;
  role: string;
}

export async function signJwt(
  payload: JwtPayload,
): Promise<string> {
  // TODO:
  // v1.3 JWT Implementation
  return "jwt-token";
}

export async function verifyJwt(
  token: string,
): Promise<JwtPayload | null> {
  // TODO:
  // v1.3 JWT Verification
  return null;
}