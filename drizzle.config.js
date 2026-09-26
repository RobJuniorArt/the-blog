import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/drizzle/schemas.ts",
  out: "./src/db/drizzle/migrations",
  dialect: "postgresql", // era 'sqlite'
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
