// EditQuiz.jsx
/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditQuiz = () => {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await axios.get(`http://localhost:5001/api/quiz/${quizId}`);
      setQuiz(response.data);
    };

    fetchQuiz();
  }, [quizId]);

  const handleChange = (e, index) => {
    const newQuiz = { ...quiz };
    newQuiz[e.target.name] = e.target.value;
    setQuiz(newQuiz);
  };

  const handleUpdateQuiz = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5001/api/quiz/edit/${quizId}`,
        quiz,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      navigate('/creatorss');
    } catch (error) {
      console.error('Error updating quiz:', error);
    }
  };

  return (
    <div>
      <h1>Edit Quiz</h1>
      {quiz && (
        <>
          <input
            type="text"
            value={quiz.title}
            name="title"
            onChange={handleChange}
          />
          <div>
            {quiz.questions.map((question, index) => (
              <div key={index}>
                <input
                  type="text"
                  name="questionText"
                  value={question.questionText}
                  onChange={(e) => handleChange(e, index)}
                />
                {question.options.map((option, i) => (
                  <input
                    key={i}
                    type="text"
                    name={`option-${i}`}
                    value={option}
                    onChange={(e) => handleChange(e, index)}
                  />
                ))}
                <select
                  name="correctAnswer"
                  value={question.correctAnswer}
                  onChange={(e) => handleChange(e, index)}
                >
                  {question.options.map((option, i) => (
                    <option key={i} value={i}>
                      {`Option ${i + 1}`}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <input
            type="number"
            name="duration"
            value={quiz.duration}
            onChange={handleChange}
          />
          <button onClick={handleUpdateQuiz}>Update Quiz</button>
        </>
      )}
    </div>
  );
};

export default EditQuiz;*/


/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditQuiz = () => {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await axios.get(`http://localhost:5001/api/quiz/${quizId}`);
      setQuiz(response.data);
    };

    fetchQuiz();
  }, [quizId]);

  // ✅ Handle changes for title and duration
  const handleChange = (e) => {
    setQuiz({
      ...quiz,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Handle changes for question text
  const handleQuestionChange = (e, index) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[index][e.target.name] = e.target.value;
    setQuiz({
      ...quiz,
      questions: updatedQuestions
    });
  };

  // ✅ Handle changes for options inside questions
  const handleOptionChange = (e, questionIndex, optionIndex) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[questionIndex].options[optionIndex] = e.target.value;
    setQuiz({
      ...quiz,
      questions: updatedQuestions
    });
  };

  // ✅ Handle quiz update
  const handleUpdateQuiz = async () => {
    try {
      await axios.put(
        `http://localhost:5001/api/quiz/edit/${quizId}`,
        quiz,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      navigate('/creatorss');
    } catch (error) {
      console.error('Error updating quiz:', error);
    }
  };

  return (
    <div>
      <h1>Edit Quiz</h1>
      {quiz && (
        <>
          {/* Edit Title *//*}/*
          <input
            type="text"
            value={quiz.title}
            name="title"
            onChange={handleChange}
          />

          {/* Edit Questions *//*}/*
          <div>
            {quiz.questions.map((question, qIndex) => (
              <div key={qIndex}>
                {/* Edit Question Text *//*}/*
                <input
                  type="text"
                  name="questionText"
                  value={question.questionText}
                  onChange={(e) => handleQuestionChange(e, qIndex)}
                />

                {/* Edit Options *//*}/*
                {question.options.map((option, oIndex) => (
                  <input
                    key={oIndex}
                    type="text"
                    name={`option-${oIndex}`}
                    value={option}
                    onChange={(e) => handleOptionChange(e, qIndex, oIndex)}
                  />
                ))}

                {/* Edit Correct Answer *//*}/*
                <select
                  name="correctAnswer"
                  value={question.correctAnswer}
                  onChange={(e) => handleQuestionChange(e, qIndex)}
                >
                  {question.options.map((option, i) => (
                    <option key={i} value={i}>
                      {`Option ${i + 1}`}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          {/* Edit Duration *//*}/*
          <input
            type="number"
            name="duration"
            value={quiz.duration}
            onChange={handleChange}
          />

          {/* Update Button *//*}/*
          <button onClick={handleUpdateQuiz}>Update Quiz</button>
        </>
      )}
    </div>
  );
};

export default EditQuiz;*/



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditQuiz = () => {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await axios.get(`http://localhost:5001/api/quiz/${quizId}`);
      setQuiz(response.data);
    };

    fetchQuiz();
  }, [quizId]);

  // Handle changes for title and duration
  const handleChange = (e) => {
    setQuiz({
      ...quiz,
      [e.target.name]: e.target.value
    });
  };

  // Handle changes for question text
  const handleQuestionChange = (e, index) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[index][e.target.name] = e.target.value;
    setQuiz({
      ...quiz,
      questions: updatedQuestions
    });
  };

  // Handle changes for options inside questions
  const handleOptionChange = (e, questionIndex, optionIndex) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[questionIndex].options[optionIndex] = e.target.value;
    setQuiz({
      ...quiz,
      questions: updatedQuestions
    });
  };

  // Handle quiz update
  const handleUpdateQuiz = async () => {
    try {
      await axios.put(
        `http://localhost:5001/api/quiz/edit/${quizId}`,
        quiz,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      navigate('/creatorss');
    } catch (error) {
      console.error('Error updating quiz:', error);
    }
  };

  return (
    <div className="edit-quiz-container">
      <h1>Edit Quiz</h1>
      {quiz && (
        <>
          {/* Edit Title */}
          <div className="form-group">
            <label htmlFor="title">Quiz Title</label>
            <input
              type="text"
              id="title"
              value={quiz.title}
              name="title"
              onChange={handleChange}
              className="input-field"
            />
          </div>

          {/* Edit Questions */}
          <div className="questions-container">
            {quiz.questions.map((question, qIndex) => (
              <div key={qIndex} className="question-group">
                {/* Edit Question Text */}
                <div className="form-group">
                  <label htmlFor={`questionText-${qIndex}`}>Question Text</label>
                  <input
                    type="text"
                    id={`questionText-${qIndex}`}
                    name="questionText"
                    value={question.questionText}
                    onChange={(e) => handleQuestionChange(e, qIndex)}
                    className="input-field"
                  />
                </div>

                {/* Edit Options */}
                <div className="options-container">
                  {question.options.map((option, oIndex) => (
                    <div key={oIndex} className="form-group">
                      <label htmlFor={`option-${oIndex}`}>{`Option ${oIndex + 1}`}</label>
                      <input
                        type="text"
                        id={`option-${oIndex}`}
                        name={`option-${oIndex}`}
                        value={option}
                        onChange={(e) => handleOptionChange(e, qIndex, oIndex)}
                        className="input-field"
                      />
                    </div>
                  ))}
                </div>

                {/* Edit Correct Answer */}
                <div className="form-group">
                  <label htmlFor={`correctAnswer-${qIndex}`}>Correct Answer</label>
                  <select
                    id={`correctAnswer-${qIndex}`}
                    name="correctAnswer"
                    value={question.correctAnswer}
                    onChange={(e) => handleQuestionChange(e, qIndex)}
                    className="input-field"
                  >
                    {question.options.map((option, i) => (
                      <option key={i} value={i}>
                        {`Option ${i + 1}`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>

          {/* Edit Duration */}
          <div className="form-group">
            <label htmlFor="duration">Duration (minutes)</label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={quiz.duration}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          {/* Update Button */}
          <button onClick={handleUpdateQuiz} className="update-button">Update Quiz</button>
        </>
      )}
      <style>
        {`
          .edit-quiz-container {
            padding: 20px;
            background-color: #ecf0f1;
            font-family: Arial, sans-serif;
          }

          h1 {
            text-align: center;
            font-size: 2rem;
            margin-bottom: 20px;
          }

          .form-group {
            margin-bottom: 15px;
          }

          .form-group label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
          }

          .input-field {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            font-size: 1rem;
            border-radius: 5px;
            border: 1px solid #ccc;
            box-sizing: border-box;
          }

          .questions-container {
            margin-top: 20px;
          }

          .question-group {
            padding: 15px;
            background-color: white;
            margin-bottom: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }

          .options-container {
            margin-top: 10px;
          }

          .update-button {
            background-color: #3498db;
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            width: 100%;
            font-size: 1rem;
            margin-top: 20px;
          }

          .update-button:hover {
            background-color: #2980b9;
          }
        `}
      </style>
    </div>
  );
};

export default EditQuiz;

