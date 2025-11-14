import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getDatabase } from './lib/mongodb';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      const db = await getDatabase();
      const rsvpsCollection = db.collection('rsvps');
      
      const rsvps = await rsvpsCollection.find({}).sort({ createdAt: -1 }).toArray();
      
      return res.json(rsvps);
    } catch (error) {
      console.error('Error fetching RSVPs:', error);
      return res.status(500).json({ message: 'Failed to fetch RSVPs' });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
