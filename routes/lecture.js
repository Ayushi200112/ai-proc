const express = require("express");
const Lecture = require("../models/Lecture");
const authenticateToken = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/create", authenticateToken, async (req, res) => {
  try {
    const { topic, description, date, time } = req.body;
    const lecture = new Lecture({ topic, description, date, time, creatorId: req.user.id });
    await lecture.save();
    res.status(201).json(lecture);
  } catch (err) {
    res.status(500).json({ error: "Failed to create lecture" });
  }
});

router.get("/", async (req, res) => {
  try {
    const lectures = await Lecture.find();
    res.json(lectures);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch lectures" });
  }
});

router.get("/creator", authenticateToken, async (req, res) => {
  try {
    const lectures = await Lecture.find({ creatorId: req.user.id });
    res.json(lectures);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch creator's lectures" });
  }
});

module.exports = router;
