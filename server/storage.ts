import { type Rsvp, type InsertRsvp } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getRsvp(id: string): Promise<Rsvp | undefined>;
  getAllRsvps(): Promise<Rsvp[]>;
  createRsvp(rsvp: InsertRsvp): Promise<Rsvp>;
}

export class MemStorage implements IStorage {
  private rsvps: Map<string, Rsvp>;

  constructor() {
    this.rsvps = new Map();
  }

  async getRsvp(id: string): Promise<Rsvp | undefined> {
    return this.rsvps.get(id);
  }

  async getAllRsvps(): Promise<Rsvp[]> {
    return Array.from(this.rsvps.values());
  }

  async createRsvp(insertRsvp: InsertRsvp): Promise<Rsvp> {
    const id = randomUUID();
    const rsvp: Rsvp = { 
      ...insertRsvp, 
      id,
      phone: insertRsvp.phone ?? null,
      numberOfGuests: insertRsvp.numberOfGuests ?? 1,
      dietaryPreferences: insertRsvp.dietaryPreferences ?? null,
      message: insertRsvp.message ?? null,
    };
    this.rsvps.set(id, rsvp);
    return rsvp;
  }
}

export const storage = new MemStorage();
