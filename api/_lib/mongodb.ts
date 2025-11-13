import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const DATABASE_NAME = process.env.DATABASE_NAME || 'wedding_invitation';

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined in environment variables');
}

let cachedClient: MongoClient | null = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined');
  }

  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  cachedClient = client;
  
  return client;
}

export async function getDatabase() {
  const client = await connectToDatabase();
  return client.db(DATABASE_NAME);
}
