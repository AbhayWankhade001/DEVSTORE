// userSchema.js
const mongoose = require('mongoose'); // Change this line

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  name: { type: String, required: true},
  designation: { type: String, required: true},
  password: { type: String, required: true },
 
});

const User = mongoose.model('User', userSchema);

module.exports = User;
