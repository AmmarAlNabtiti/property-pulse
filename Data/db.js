import mongoose from 'mongoose';

let connect = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true);
  if (connect) {
    console.log('mongo is already connected');
  }
  try {
    await mongoose.connect(process.env.MONGO_URL);
    connect = true;
    console.log('database connected');
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
