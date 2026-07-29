import { PropertyRepository } from "@/lib/repositories";

export const PropertyService = {
  async getAllProperties() {
    return PropertyRepository.findAll();
  },

  async getPropertyById(id: string) {
    return PropertyRepository.findById(id);
  },

  async getPropertyBySlug(slug: string) {
    return PropertyRepository.findBySlug(slug);
  },

  async createProperty(data: Parameters<typeof PropertyRepository.create>[0]) {
    if (!data.title?.trim()) {
      throw new Error("Property title is required.");
    }

    if (!data.slug?.trim()) {
      throw new Error("Property slug is required.");
    }

    return PropertyRepository.create(data);
  },

  async updateProperty(
    id: string,
    data: Parameters<typeof PropertyRepository.update>[1],
  ) {
    return PropertyRepository.update(id, data);
  },

  async deleteProperty(id: string) {
    return PropertyRepository.delete(id);
  },
};