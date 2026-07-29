export interface RegisterValidatorInput {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export function validateRegister(
  input: RegisterValidatorInput,
): boolean {
  return (
    input.email.trim().length > 0 &&
    input.password.trim().length >= 8
  );
}