const Question = require("../models/question");


const createQuestion = async(req, res, next) => {
    try {
        const question = new Question(req.body);
        const doc = await question.save();
        console.log(doc);
        res.status(201).json({
          message: "Question is  created successfully",
          question: doc,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const getAllQuestions = async(req, res, next) => {
    try {
        const docs = await Question.find();
        console.log(docs);
        res.status(201).json({
          message: "List Of all the Questions",
          question: docs,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const getQuestionById = async(req, res, next) => {
    try {
        const doc = await Question.findById(req.params.id);
        console.log(doc);
        res.status(201).json({
          message: "This is the Question",
          question: doc,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const updateQuestionById = async(req, res, next) => {
    try {
        const doc = await Question.findOneAndUpdate(
          { _id: req.params.id },
          { $set: req.body },
          { new: true }
        );
        console.log(doc);
        res.status(201).json({
          message: " Questions is  updated",
          question: doc,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const deleteQuestionById = async(req, res, next) => {
    try {
        const result = await Question.findByIdAndDelete(req.params.id);
        console.log(result);
        res.status(201).json({
          message: "The Question is Deleted",
          question: result,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

module.exports = {
    createQuestion,
    getAllQuestions,
    getQuestionById,
    updateQuestionById,
    deleteQuestionById
};
