const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/test01', {
            useNewUrlParser: true, // This option is still required
            // Other mongoose options like poolSize, autoIndex, etc.
        });
        
        mongoose.connection.on('error', error => {
            console.error('MongoDB connection error:', error);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB disconnected');
            // Optionally, attempt to reconnect here
        });

        mongoose.connection.on('connected', () => {
            console.log('MongoDB connected');
        });

        mongoose.connection.on('reconnected', () => {
            console.log('MongoDB reconnected');
        });

        console.log('Database Connected');
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw error; // Rethrow the error so the caller can handle it
    }
}

module.exports = connect;
