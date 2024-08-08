import 'dotenv/config'
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "sqlite", // "mysql" | "sqlite" | "postgresql"
  driver:"turso",
  schema: "./drizzle/schema.ts",
  dbCredentials:{
    url:process.env.DATABASE_URL as string,
    authToken:process.env.AUTH_TOKEN as string
  },
  out: "./drizzle/migrations",
});