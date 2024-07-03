const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name is required
  },
  password: {
    type: String,
    required: true, // Password is required
  },
  createdAt: {
    type: Date,
    default: Date.now, // Default to current date/time
  },
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
