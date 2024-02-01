const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const UserQuizAttempt = require("../models/userQuizAttempt");
const { createUserQuizAttempt, getAllUserQuizAttempts, updateUserQuizAttemptById, getUserQuizAttemptById, deleteUserQuizAttemptById } = require("../controllers/userQuizAttempts");
const { getUserQuizAnswerById } = require("../controllers/userQuizAnswers");

router.post("/userQuizAttempt", createUserQuizAttempt);

router.get("/userQuizAttempt", getAllUserQuizAttempts);

router.get("/userQuizAttempt/:id", getUserQuizAttemptById);

router.patch("/userQuizAttempt/:id", updateUserQuizAttemptById);

router.delete("/userQuizAttempt/:id", deleteUserQuizAttemptById);

module.exports = router;
