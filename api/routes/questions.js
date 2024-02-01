const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Question = require("../models/question");
const { createQuestion, getAllQuestions, getQuestionById, updateQuestionById, deleteQuestionById } = require("../controllers/questions");

router.post("/questions", createQuestion);

router.get("/questions", getAllQuestions);

router.get("/questions/:id", getQuestionById);

router.patch("/questions/:id", updateQuestionById);

router.delete("/questions/:id", deleteQuestionById);

module.exports = router;
