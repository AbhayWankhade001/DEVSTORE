const mongoose = require('mongoose');

// const subscriptionSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     }
// });

// const Subscription = mongoose.model('Subscription', subscriptionSchema);

// module.exports = Subscription;
// Define a schema for the user model
// Assuming you have already defined the mongoose schema
// Define a schema for the user model
const SUBUSchema = new mongoose.Schema({
    email: String,
    fcmToken: String,
  });
  
  // Create a User model based on the schema
  const SUBU = mongoose.model('SUBU', SUBUSchema);
  
  // Create a Subscriptions model if not already defined
  const subscriptionsSchema = new mongoose.Schema({
    email: String,
    // Other subscription-related fields may go here
  });
  
  const Subscriptions = mongoose.model('Subscriptions', subscriptionsSchema);
  module.exports = {
    Subscriptions,
    SUBU
  };
  