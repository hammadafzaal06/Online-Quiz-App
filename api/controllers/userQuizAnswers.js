const UserQuizAnswer = require("../models/userQuizAnswer");


const createUserQuizAnswer = async(req, res, next) => {
    try {
        const userQuizAnswer = new UserQuizAnswer(req.body);
        const doc = await userQuizAnswer.save();
        console.log(doc);
        res.status(201).json({
          message: "userQuizAnswer is  created successfully",
          userQuizAnswer: doc,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const getAllUserQuizAnswers = async(req, res, next) => {
    try {
        const docs = await UserQuizAnswer.find();
        console.log(docs);
        res.status(201).json({
          message: "List Of all the UserQuizAnswer",
          userQuizAnswer: docs,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const getUserQuizAnswerById = async(req, res, next) => {
    try {
        const doc = await UserQuizAnswer.findById(req.params.id);
        console.log(doc);
        res.status(201).json({
          message: "This is the UserQuizAnswer",
          userQuizAnswer: doc,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const updateUserQuizAnswerById = async(req, res, next) => {
    try {
        const doc = await UserQuizAnswer.findOneAndUpdate(
          { _id: req.params.id },
          { $set: req.body },
          { new: true }
        );
        console.log(doc);
        res.status(201).json({
          message: " userQuizAnswer is  updated",
          userQuizAnswer: doc,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const deleteUserQuizAnswerById = async(req, res, next) => {
    try {
        const result = await UserQuizAnswer.findByIdAndDelete(req.params.id);
        console.log(result);
        res.status(201).json({
          message: "The userQuizAnswer is Deleted",
          userQuizAnswer: result,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

module.exports = {
    createUserQuizAnswer,
    getAllUserQuizAnswers,
    getUserQuizAnswerById,
    updateUserQuizAnswerById,
    deleteUserQuizAnswerById
};