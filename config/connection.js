// Imports the Mongoose library
const mongoose = require("mongoose");

// Connect to the MongoDB database
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/socialNetworkDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
  }
);

// Export the mongoose connection object
module.exports = mongoose.connection;
