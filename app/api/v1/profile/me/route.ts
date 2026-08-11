import { NextRequest } from "next/server";

import { ProfileService } from "@/lib/services/profile";
import { ok, fail } from "@/lib/api/api-response";

const profileService = new ProfileService();

async function getCurrentUserId(
  request: NextRequest,
): Promise<string | null> {
  /**
   * TODO
   * اتصال به Authentication موجود پروژه
   * (JWT / Session / NextAuth)
   */
  return request.headers.get("x-user-id");
}

export async function GET(
  request: NextRequest,
) {
  try {
    const userId = await getCurrentUserId(request);

    if (!userId) {
      return fail("Unauthorized", 401);
    }

    const profile =
      await profileService.getProfile(userId);

    return ok(profile);
  } catch (error) {
    return fail(
      error instanceof Error
        ? error.message
        : "Unknown error",
      500,
    );
  }
}

export async function PATCH(
  request: NextRequest,
) {
  try {
    const userId = await getCurrentUserId(request);

    if (!userId) {
      return fail("Unauthorized", 401);
    }

    const body = await request.json();

    const profile =
      await profileService.updateProfile(
        userId,
        body,
      );

    return ok(profile);
  } catch (error) {
    return fail(
      error instanceof Error
        ? error.message
        : "Unknown error",
      400,
    );
  }
}

export async function DELETE(
  request: NextRequest,
) {
  try {
    const userId = await getCurrentUserId(request);

    if (!userId) {
      return fail("Unauthorized", 401);
    }

    const result =
      await profileService.deleteProfile(userId);

    return ok(result);
  } catch (error) {
    return fail(
      error instanceof Error
        ? error.message
        : "Unknown error",
      400,
    );
  }
}