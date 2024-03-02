// reviewSchema.js
const mongoose = require('mongoose');
const User = require('./UserSchema'); // Update the path to match your User model file

const reviewSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    feedback: { type: String, required: true },
    rating: { type: Number, required: true },
  });
  
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
