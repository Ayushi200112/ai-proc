const mongoose = require("mongoose");

const LectureSchema = new mongoose.Schema({
  topic: String,
  description: String,
  date: String,
  time: String,
  creatorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Lecture", LectureSchema);
