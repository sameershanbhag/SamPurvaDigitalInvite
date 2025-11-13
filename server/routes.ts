import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getDatabase } from "./db";

export async function registerRoutes(app: Express): Promise<Server> {
  // Initialize MongoDB connection
  await getDatabase();

  // RSVP Routes
  app.post("/api/rsvp", async (req, res) => {
    try {
      const db = await getDatabase();
      const rsvpsCollection = db.collection('rsvps');
      
      const rsvpData = {
        ...req.body,
        attending: req.body.attending === 'yes',
        numberOfGuests: parseInt(req.body.numberOfGuests) || 1,
        createdAt: new Date(),
      };
      
      const result = await rsvpsCollection.insertOne(rsvpData);
      
      res.status(201).json({
        message: 'RSVP submitted successfully',
        id: result.insertedId,
      });
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      res.status(500).json({ message: 'Failed to submit RSVP' });
    }
  });

  // Get all RSVPs (optional - for viewing submissions)
  app.get("/api/rsvps", async (req, res) => {
    try {
      const db = await getDatabase();
      const rsvpsCollection = db.collection('rsvps');
      
      const rsvps = await rsvpsCollection.find({}).sort({ createdAt: -1 }).toArray();
      
      res.json(rsvps);
    } catch (error) {
      console.error('Error fetching RSVPs:', error);
      res.status(500).json({ message: 'Failed to fetch RSVPs' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
