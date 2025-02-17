const mongoose = require('mongoose');

// MongoDB URI (Directly provided, replace with your actual connection string)
const MONGO_URI = 'mongodb://localhost:27017/';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB Connection Failed', error);
    process.exit(1);
  }
};

module.exports = connectDB;
