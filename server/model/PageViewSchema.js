const mongoose = require('mongoose');

const pageViewSchema = new mongoose.Schema({
    path: String,
    count: { type: Number, default: 0 },
    location: String, // Add field for location
    timestamp: Date ,// Add field for timestamp
    ip: String // Add field for IP address

});

const PageView = mongoose.model('PageView', pageViewSchema);

module.exports = PageView;
