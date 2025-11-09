import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Scenario types for the training application
export const scenarioSchema = z.object({
  module: z.string(),
  moduleNumber: z.number().min(1).max(4),
  scenario_title: z.string(),
  scenario_text: z.string(),
  question: z.string(),
  options: z.object({
    A: z.string(),
    B: z.string(),
    C: z.string(),
    D: z.string(),
  }),
  correct_answer: z.enum(["A", "B", "C", "D"]),
  rationale: z.string(),
});

export type Scenario = z.infer<typeof scenarioSchema>;

// Session tracking for user progress
export const sessionSchema = z.object({
  sessionId: z.string(),
  completedScenarios: z.array(z.number()),
  currentScenarioIndex: z.number(),
  correctAnswers: z.number(),
  totalAttempts: z.number(),
});

export type Session = z.infer<typeof sessionSchema>;
