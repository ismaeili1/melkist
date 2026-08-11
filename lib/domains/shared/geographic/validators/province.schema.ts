import { z } from "zod";

export const createProvinceSchema = z.object({

  countryId: z.string().cuid(),

  name: z.string().min(2).max(120),

  code: z.string().optional(),

  isoCode: z.string().optional(),

  latitude: z.number().optional(),

  longitude: z.number().optional()

});