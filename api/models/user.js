// Import mongoose
const mongoose = require('mongoose');

// Define User schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, default: true },
    email: { type: String, required: true, default: true },
    password: { type: String, required: true },
    registrationDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema)