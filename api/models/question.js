const mongoose = require('mongoose');



// Define Question schema
const questionSchema = new mongoose.Schema({
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
    text: { type: String, required: true },
    explanation: {type: String, required: true},
});

module.exports = mongoose.model('Question', questionSchema)