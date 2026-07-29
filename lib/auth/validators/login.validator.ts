export interface LoginValidatorInput {
  email: string;
  password: string;
}

export function validateLogin(
  input: LoginValidatorInput,
): boolean {
  return (
    input.email.trim().length > 0 &&
    input.password.trim().length > 0
  );
}