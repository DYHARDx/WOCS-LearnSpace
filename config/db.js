const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    // Get MongoDB URI from environment variables or use default local URI
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/wocslearnspace';
    
    // Connect to MongoDB
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectToDB;