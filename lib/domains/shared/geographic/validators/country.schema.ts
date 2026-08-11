import { z } from "zod";

export const createCountrySchema = z.object({

  name: z.string().min(2).max(120),

  officialName: z.string().optional(),

  iso2: z.string().length(2),

  iso3: z.string().length(3),

  phoneCode: z.string().optional(),

  currencyCode: z.string().optional(),

  currencyName: z.string().optional(),

  languageCode: z.string().optional()

});