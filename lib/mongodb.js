import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const MONGODB_URI = process.env.MONGODB_URI;

// For development, use in-memory MongoDB if no URI is provided
let mongoServer = null;

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    let uri = MONGODB_URI;

    // If no MongoDB URI is provided, use in-memory server for development
    if (!uri && process.env.NODE_ENV !== 'production') {
      console.log('📦 Starting in-memory MongoDB for development...');
      if (!mongoServer) {
        try {
          mongoServer = await MongoMemoryServer.create();
          uri = mongoServer.getUri();
          console.log('✅ In-memory MongoDB started:', uri);
        } catch (error) {
          console.error('❌ Failed to start in-memory MongoDB:', error);
          // Use a simple fallback URI that won't fail
          uri = 'mongodb://127.0.0.1:27017/lafun-dev';
          console.log('🔄 Using fallback MongoDB URI:', uri);
        }
      } else {
        uri = mongoServer.getUri();
      }
    } else if (!uri) {
      // Use fallback for development
      uri = 'mongodb://127.0.0.1:27017/lafun-dev';
      console.log('🔄 Using fallback MongoDB URI:', uri);
    }

    cached.promise = mongoose.connect(uri, opts).then((mongoose) => {
      console.log('✅ MongoDB connected successfully');
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error('❌ MongoDB connection error:', e);
    throw e;
  }

  return cached.conn;
}

export default connectDB;

