import {
  ProfileRepository,
  UpdateProfileInput,
} from "@/lib/repositories/profile";

import {
  DuplicateEmailError,
  ProfileNotFoundError,
} from "./profile.errors";

import { validateProfileUpdate } from "./profile.validators";

export class ProfileService {
  constructor(
    private readonly repository = new ProfileRepository(),
  ) {}

  async getProfile(userId: string) {
    const profile = await this.repository.findById(userId);

    if (!profile) {
      throw new ProfileNotFoundError();
    }

    return profile;
  }

  async updateProfile(
    userId: string,
    data: UpdateProfileInput,
  ) {
    validateProfileUpdate(data);

    const profile = await this.repository.findById(userId);

    if (!profile) {
      throw new ProfileNotFoundError();
    }



    return this.repository.update(userId, data);
  }

  async deleteProfile(userId: string) {
    const exists =
      await this.repository.exists(userId);

    if (!exists) {
      throw new ProfileNotFoundError();
    }

    await this.repository.delete(userId);

    return {
      success: true,
    };
  }

  async getDashboardSummary(userId: string) {
    const summary =
      await this.repository.getProfileSummary(userId);

    if (!summary) {
      throw new ProfileNotFoundError();
    }

    return summary;
  }
}