const Quiz = require("../models/quiz");

const createQuiz = async(req, res, next) => {
    try {
        const quiz = new Quiz(req.body);
        const doc = await quiz.save();
        console.log(doc);
        res.status(201).json({
          message: "Quiz created successfully",
          quiz: doc,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const getAllQuiz = async(req, res, next) => {
    try {
        const docs = await Quiz.find();
        console.log(docs);
        res.status(201).json({
          message: "List Of all the Quiz",
          quiz: docs,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const getQuizById = async(req, res, next) => {
    try {
        const doc = await Quiz.findById(req.params.id);
        console.log(doc);
        res.status(201).json({
          message: "This is the Quiz",
          quiz: doc,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const updateQuizById = async(req, res, next) => {
    try {
        const doc = await Quiz.findOneAndUpdate(
          { _id: req.params.id },
          { $set: req.body },
          { new: true }
        );
        console.log(doc);
        res.status(201).json({
          message: " Quiz updated",
          quiz: doc,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const deleteQuizById = async(req, res, next) => {
    try {
        const result = await Quiz.findByIdAndDelete(req.params.id);
        console.log(result);
        res.status(201).json({
          message: "The Quiz is Deleted",
          quiz: result,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

module.exports = {
    createQuiz,
    getAllQuiz,
    getQuizById,
    updateQuizById,
    deleteQuizById
};