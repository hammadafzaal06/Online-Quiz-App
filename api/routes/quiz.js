const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Quiz = require("../models/quiz");
const { createQuiz, getAllQuiz, getQuizById, updateQuizById, deleteQuizById } = require("../controllers/quiz");

router.post("/quiz", createQuiz);

router.get("/quiz", getAllQuiz);

router.get("/quiz/:id", getQuizById);

router.patch("/quiz/:id", updateQuizById);

router.delete("/quiz/:id", deleteQuizById);

module.exports = router;
