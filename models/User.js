const { Schema, model } = require("mongoose");
// Import the formatDate function
const formatDate = require('../utils/formatDate'); 

// Define the schema for User
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match a valid email address"],
    },
    thoughts: [
      {
        // Reference Thought model
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        // Reference User model for friends
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => formatDate(timestamp),
    },
  },
  {
    toJSON: {
      // Include virtuals when data is output as JSON
      virtuals: true,
    },
  }
);

// Virtual to get the number of friends
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Create the User model using the schema
const User = model("User", userSchema);

// Export the User model
module.exports = User;
