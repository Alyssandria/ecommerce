
import { defineConfig } from "drizzle-kit";
import { env } from "../config/env";

export default defineConfig({
  dialect: "postgresql",
  out: "./src/db/migrations/",
  dbCredentials: {
    url: env.DB_URL,
  },
  schema: "./src/db/schema.ts",
});
