// models/Quiz.js
/*const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: String,
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  questions: [{
    questionText: String,
    options: [String],
    correctAnswer: Number,
  }],
});

module.exports = mongoose.model('Quiz', quizSchema);*/
// models/Quiz.js
/*const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: String,
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  questions: [{
    questionText: String,
    options: [String],
    correctAnswer: Number,
  }],
  duration: Number, // Adding duration field
});

module.exports = mongoose.model('Quiz', quizSchema);*/


const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: String,
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  questions: [{
    questionText: String,
    options: [String], // Only for MCQs
    correctAnswer: Number, // Only for MCQs
    isCodingQuestion: { type: Boolean, default: false }, // New field for coding questions
    codingTestCases: [{
      input: String,
      expectedOutput: String
    }] // Test cases for coding questions
  }],
  duration: Number,
});

module.exports = mongoose.model('Quiz', quizSchema);

