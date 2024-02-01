const mongoose = require('mongoose');


// Define Quiz schema
const quizSchema = new mongoose.Schema({
    title: { type: String, required:true },
    description: {type: String, required:true},
    category: {type: String, required:true},
    difficultyLevel: {type:String, required:true},
    timeLimit: {type:Number, required:true},
    creator: { type: mongoose.Schema.Types.ObjectId, ref:'User', required: true }
});

module.exports = mongoose.model('Quiz', quizSchema)