function requireEnv(name: string): string {
  const value = process.env[name];

  if (!value || value.trim() === "") {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export const env = {
  DATABASE_URL: requireEnv("DATABASE_URL"),

  JWT_ACCESS_SECRET: requireEnv("JWT_ACCESS_SECRET"),

  JWT_REFRESH_SECRET: requireEnv("JWT_REFRESH_SECRET"),

  NODE_ENV:
    process.env.NODE_ENV ?? "development",

  APP_URL:
    process.env.APP_URL ??
    "http://localhost:3000",
};