const mongoose = require('mongoose');

// Define Answer schema
const answerSchema = new mongoose.Schema({
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
    text: { type: String, required: true },
    isCorrect: { type: Boolean, default: false }
});


module.exports = mongoose.model('Answer', answerSchema)