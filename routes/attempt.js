const express = require('express');
const Attempt = require('../models/Attempt');
const Quiz = require('../models/Quiz');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Attempt Quiz (Learner Only)
router.post('/submit', authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== 'learner') {
      return res.status(403).json({ message: 'Only learners can attempt quizzes' });
    }

    const { quizId, answers } = req.body;
    const quiz = await Quiz.findById(quizId);

    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    let score = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;

    quiz.questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        score += 1;
        correctAnswers += 1;
      } else {
        wrongAnswers += 1;
      }
    });

    const attempt = new Attempt({
      learner: req.user.id,
      quiz: quizId,
      score,
      correctAnswers,
      wrongAnswers,
    });

    await attempt.save();

    res.status(201).json({
      success: true,
      message: 'Quiz submitted successfully',
      score,
      correctAnswers,
      wrongAnswers,
      attemptId: attempt._id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get Attempt Result by ID
/*router.get('/:attemptId', authMiddleware, async (req, res) => {
  try {
    const attempt = await Attempt.findById(req.params.attemptId).populate('quiz', 'title');

    if (!attempt) {
      return res.status(404).json({ message: 'Attempt not found' });
    }


    console.log('Attempt Learner:', attempt.learner);  // Debugging: Check the learner ID
    console.log('Authenticated User ID:', req.user.id);

    if (attempt.learner.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    res.json(attempt);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});*/

router.get('/:attemptId', authMiddleware, async (req, res) => {
  try {
    const attempt = await Attempt.findById(req.params.attemptId).populate('quiz', 'title');

    if (!attempt) {
      console.log("❌ Attempt not found for ID:", req.params.attemptId);
      return res.status(404).json({ message: 'Attempt not found' });
    }

    console.log('🔹 Attempt Learner:', attempt.learner.toString());
    console.log('🔹 Authenticated User ID:', req.user.id);

    // Check if the logged-in user is the one who attempted the quiz
    if (attempt.learner.toString() !== req.user.id) {
      console.log('🚨 Unauthorized access attempt detected');
      return res.status(403).json({ message: 'Unauthorized' });
    }

    res.json(attempt);
  } catch (error) {
    console.error('❌ Server Error fetching attempt:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});


module.exports = router;
