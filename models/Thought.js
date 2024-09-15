const { Schema, model, Types } = require("mongoose");

// Define the schema for Reaction
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true, 
    maxLength: 280, 
  },
  username: {
    type: String,
    required: true, 
  },
  createdAt: {
    type: Date,
    default: Date.now, 
    get: (timestamp) => dateFormat(timestamp), 
  },
});

// Define the schema for Thought
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      // Set default timestamp to current time
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      // Include virtuals when data is output as JSON
      virtuals: true,
    },
  }
);

// Virtual to get the number of reactions
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Create the Thought model using the schema
const Thought = model("Thought", thoughtSchema);

// Export the Thought model
module.exports = Thought;
