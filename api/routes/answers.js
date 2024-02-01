const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Answer = require("../models/answer");
const { createAnswer, getAllAnswers, getAnswerById, updateAnswerById, deleteAnswerById } = require("../controllers/answers");

router.post("/answers", createAnswer);

router.get("/answers", getAllAnswers);

router.get("/answers/:id", getAnswerById);

router.patch("/answers/:id",updateAnswerById);

router.delete("/answers/:id", deleteAnswerById);

module.exports = router;
