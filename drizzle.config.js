import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/db/drizzle/migrations",
  out: "./src/db/drizzle/schemas.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "./db.postgresql",
  },
});
