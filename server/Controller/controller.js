const Contact = require('../model/Contact');
const Subscription = require('../model/Subscription');

// Controller for creating a new contact
async function createContact(req, res) {
    try {
        const { firstName, lastName, email, contact, message } = req.body;
        const newContact = new Contact({ firstName, lastName, email, contact, message });
        await newContact.save();
        res.status(201).json({ message: 'Contact created successfully' });
    } catch (error) {
        console.error('Error creating contact:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


async function saveSubscription(req, res) {
    try {
        const { email } = req.body;

        // Save the subscription to your database
        await Subscription.create({ email });

        // Send a notification to the newly subscribed email
        await sendNotification('Thank you for subscribing!');

        res.status(200).json({ message: 'Subscription saved successfully' });
    } catch (error) {
        console.error('Error saving subscription:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}






module.exports = {
    createContact,
    saveSubscription,
};
