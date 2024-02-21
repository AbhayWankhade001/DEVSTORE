const mongoose = require('mongoose');

// Define schema for the reviews collection
const RateSysSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  review: {
    type: String,
    required: true
  }
});

// Create a model for the schema
const RateSys = mongoose.model('RateSys', RateSysSchema);

module.exports = RateSys;
