import mongoose from 'mongoose';

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Establishing connection to the MongoDB database using the URI from environment variables
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true, // Ensures a stable connection to the MongoDB cluster
      useNewUrlParser: true, // Parses MongoDB connection strings
      useCreateIndex: true, // Creates indexes to optimize performance
    });

    // Logging the success message with the host of the MongoDB connection
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    // Logging any error that occurs during the connection process
    console.error(`Error: ${error.message}`.red.underline.bold);
    // Exiting the process with a failure code
    process.exit(1);
  }
};

export default connectDB;
