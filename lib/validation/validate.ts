import { ZodSchema } from "zod";
import { ValidationError } from "./validation-error";

export function validate<T>(
  schema: ZodSchema<T>,
  input: unknown,
): T {
  const result = schema.safeParse(input);

  if (!result.success) {
    throw new ValidationError(result.error.flatten());
  }

  return result.data;
}
