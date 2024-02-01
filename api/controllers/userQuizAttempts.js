const UserQuizAttempt = require("../models/userQuizAttempt");


const createUserQuizAttempt = async(req, res, next) => {
    try {
        const userQuizAttempt = new UserQuizAttempt(req.body);
        const doc = await userQuizAttempt.save();
        console.log(doc);
        res.status(201).json({
          message: "userQuizAttempt is  created successfully",
          userQuizAttempt: doc,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const getAllUserQuizAttempts = async(req, res, next) => {
    try {
        const docs = await UserQuizAttempt.find();
        console.log(docs);
        res.status(201).json({
          message: "List Of all the UserQuizAttempt",
          userQuizAttempt: docs,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const getUserQuizAttemptById = async(req, res, next) => {
    try {
        const doc = await UserQuizAttempt.findById(req.params.id);
        console.log(doc);
        res.status(201).json({
          message: "This is the UserQuizAttempt",
          userQuizAttempt: doc,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const updateUserQuizAttemptById = async(req, res, next) => {
    try {
        const doc = await UserQuizAttempt.findOneAndUpdate(
          { _id: req.params.id },
          { $set: req.body },
          { new: true }
        );
        console.log(doc);
        res.status(201).json({
          message: " userQuizAttempt is  updated",
          userQuizAttempt: doc,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

const deleteUserQuizAttemptById = async(req, res, next) => {
    try {
        const result = await UserQuizAttempt.findByIdAndDelete(req.params.id);
        console.log(result);
        res.status(201).json({
          message: "The userQuizAttempt is Deleted",
          userQuizAttempt: result,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
};

module.exports = {
    createUserQuizAttempt,
    getAllUserQuizAttempts,
    getUserQuizAttemptById,
    updateUserQuizAttemptById,
    deleteUserQuizAttemptById
};