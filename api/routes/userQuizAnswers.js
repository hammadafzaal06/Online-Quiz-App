const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const UserQuizAnswer = require("../models/userQuizAnswer");
const { createUserQuizAnswer, getAllUserQuizAnswers, getUserQuizAnswerById, updateUserQuizAnswerById, deleteUserQuizAnswerById } = require("../controllers/userQuizAnswers");

router.post("/userQuizAnswer", createUserQuizAnswer);

router.get("/userQuizAnswer", getAllUserQuizAnswers);

router.get("/userQuizAnswer/:id", getUserQuizAnswerById);

router.patch("/userQuizAnswer/:id", updateUserQuizAnswerById);

router.delete("/userQuizAnswer/:id", deleteUserQuizAnswerById);

module.exports = router;
