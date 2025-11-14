import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getDatabase } from './lib/mongodb.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
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
      
      return res.status(201).json({
        message: 'RSVP submitted successfully',
        id: result.insertedId,
      });
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      return res.status(500).json({ message: 'Failed to submit RSVP' });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
