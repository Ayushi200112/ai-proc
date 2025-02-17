// models/Attempt.js
/*const mongoose = require('mongoose');

const attemptSchema = new mongoose.Schema({
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
  learnerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  answers: [Number], // Store answers for comparison
  score: Number,
});

module.exports = mongoose.model('Attempt', attemptSchema);*/
const mongoose = require('mongoose');

const AttemptSchema = new mongoose.Schema({
  learner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  score: { type: Number, required: true },
  correctAnswers: { type: Number, required: true },
  wrongAnswers: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Attempt', AttemptSchema);
