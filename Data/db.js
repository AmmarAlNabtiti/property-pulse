import mongoose from 'mongoose';

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log('MongoDB is already connected.');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: 'property-pulse-db',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Database connection failed:', error);
    throw new Error('Failed to connect to database');
  }
};

export default connectDB;
