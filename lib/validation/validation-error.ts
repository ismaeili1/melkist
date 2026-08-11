export class ValidationError extends Error {
  constructor(
    public readonly details: unknown,
    message = "Validation failed",
  ) {
    super(message);
  }
}