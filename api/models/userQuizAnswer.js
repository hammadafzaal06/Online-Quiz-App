const mongoose = require('mongoose');
// Define UserQuizAnswer schema
const userQuizAnswerSchema = new mongoose.Schema({
    userQuizAttempt: { type: mongoose.Schema.Types.ObjectId, ref: 'UserQuizAttempt', required: true },
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
    selectedAnswer: { type: mongoose.Schema.Types.ObjectId, ref: 'Answer' },
    isCorrect: {type: Boolean}
});

module.exports = mongoose.model('UserQuizAnswer', userQuizAnswerSchema)