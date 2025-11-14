import { MongoClient, ServerApiVersion } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const DATABASE_NAME = process.env.DATABASE_NAME || 'wedding_invitation';

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined in environment variables');
}

let cachedClient: MongoClient | null = null;
let cachedDb: any = null;

export async function connectToDatabase() {
  // Return cached client if available
  if (cachedClient && cachedDb) {
    try {
      // Verify the connection is still alive
      await cachedClient.db().admin().ping();
      return cachedClient;
    } catch (error) {
      console.log('Cached connection failed, reconnecting...');
      cachedClient = null;
      cachedDb = null;
    }
  }

  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined');
  }

  // MongoDB connection options optimized for serverless
  const options = {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
    maxPoolSize: 10,
    minPoolSize: 0,
    maxIdleTimeMS: 10000,
    serverSelectionTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    retryWrites: true,
    retryReads: true,
    connectTimeoutMS: 10000,
  };

  try {
    const client = new MongoClient(MONGODB_URI, options);
    await client.connect();
    
    // Verify connection
    await client.db().admin().ping();
    console.log('Successfully connected to MongoDB');
    
    cachedClient = client;
    cachedDb = client.db(DATABASE_NAME);
    
    return client;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

export async function getDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  
  const client = await connectToDatabase();
  cachedDb = client.db(DATABASE_NAME);
  return cachedDb;
}
