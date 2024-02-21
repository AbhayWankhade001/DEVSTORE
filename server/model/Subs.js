

  const mongoose = require('mongoose');


  const SubsUserSchema = new mongoose.Schema({
    userId: String,
    subscription: Object,

  })
// Create Contact model
const SubsUser = mongoose.model('SubsUser', SubsUserSchema);

module.exports = SubsUser;
