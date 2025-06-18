// src/config/schema.ts
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  name: text("name"),
  sessionToken: text("session_token"),
  role: text("role").notNull().default('user'),
});
