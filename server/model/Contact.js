const mongoose = require('mongoose');

// Define Contact schema
const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

// Create Contact model
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
