const Answer = require("../models/answer");

const createAnswer = async(req, res, next) => {
    try {
        const answer = new Answer(req.body);
        const doc = await answer.save();
        console.log(doc);
        res.status(201).json({
          message: "Answer is  created successfully",
          answer: doc,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const getAllAnswers = async(req, res, next) => {
    try {
        const docs = Answer.find();
        console.log(docs);
        res.status(201).json({
          message: "List Of all the Answer",
          answer: docs,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const getAnswerById = async(req, res, next) => {
    try {
        const doc = await Answer.findById(req.params.id);
        console.log(doc);
        res.status(201).json({
          message: "This is the Answers",
          answer: doc,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const updateAnswerById = async(req, res, next) => {
    try {
        const doc = await Answer.findOneAndUpdate(
          { _id: req.params.id },
          { $set: req.body },
          { new: true }
        );
        console.log(doc);
        res.status(201).json({
          message: " Answer is  updated",
          answer: doc,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const deleteAnswerById = async(req, res, next) => {
    try {
        const result = await Answer.findByIdAndDelete(req.params.id);
        console.log(result);
        res.status(201).json({
          message: "The Answer is Deleted",
          answer: result,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

module.exports = {
    createAnswer,
    getAllAnswers,
    getAnswerById,
    updateAnswerById,
    deleteAnswerById
};