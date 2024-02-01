const mongoose = require('mongoose');
// Define UserQuizAttempt schema
const userQuizAttemptSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
    startTime: { type: Date, default: Date.now },
    endTime: {type : Date},
    score: {type: Number},
    status: { type: String, enum: ['In Progress', 'Completed'], default: 'In Progress' }
});


module.exports = mongoose.model('UserQuizAttempt', userQuizAttemptSchema)