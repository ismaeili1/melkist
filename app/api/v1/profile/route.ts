import { fail } from "@/lib/api/api-response";

export async function GET() {
  return fail(
    "Use /api/v1/profile/me",
    404,
  );
}