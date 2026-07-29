import { UserRepository } from "@/lib/repositories";

export const UserService = {
  async getUsers() {
    return UserRepository.findAll();
  },

  async getUser(id: string) {
    return UserRepository.findById(id);
  },

    async findAll() {

    return [];

  },

  async createUser(
    data: Parameters<typeof UserRepository.create>[0],
  ) {
    if (!data.email?.trim()) {
      throw new Error("Email is required.");
    }

    return UserRepository.create(data);
  },
};



