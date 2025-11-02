import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const rsvps = pgTable("rsvps", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  guestName: text("guest_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  attending: boolean("attending").notNull(),
  numberOfGuests: integer("number_of_guests").notNull().default(1),
  dietaryPreferences: text("dietary_preferences").array(),
  message: text("message"),
});

export const insertRsvpSchema = createInsertSchema(rsvps).omit({
  id: true,
});

export type InsertRsvp = z.infer<typeof insertRsvpSchema>;
export type Rsvp = typeof rsvps.$inferSelect;
