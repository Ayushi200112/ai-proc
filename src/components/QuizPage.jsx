// src/components/QuizPage.js
/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//import * as faceapi from 'face-api.js';

const QuizPage = () => {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [timer, setTimer] = useState(10 * 60); // 10 minutes timer
  //const [isProctoring] = useState(true);
  const { quizId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await axios.get(`http://localhost:5000/api/quiz/${quizId}`);
      setQuiz(response.data);
    };

    fetchQuiz();

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
      if (timer === 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [quizId, timer]);*/

 /* useEffect(() => {
    if (isProctoring) {
      const video = document.getElementById('video');
      faceapi.nets.ssdMobilenetv1.loadFromUri('/models').then(() => {
        setInterval(async () => {
          const detections = await faceapi.detectAllFaces(video);
          if (detections.length === 0) {
            alert('No face detected!');
          }
        }, 100);
      });
    }
  }, [isProctoring]);*/

  /*const handleAnswerChange = (e, questionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/api/quiz/attempt/${quizId}`, {
        answers,
      });
      navigate(`/scorecard/${response.data.attemptId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>{quiz ? quiz.title : 'Loading quiz...'}</h1>
      <video id="video" width="720" height="560" autoPlay muted>
        <source src="video.mp4" />
      </video>
      <p>Time remaining: {Math.floor(timer / 60)}:{timer % 60}</p>
      {quiz && quiz.questions.map((q, index) => (
        <div key={index}>
          <p>{q.questionText}</p>
          {q.options.map((option, i) => (
            <div key={i}>
              <input
                type="radio"
                name={`question-${index}`}
                value={i}
                onChange={(e) => handleAnswerChange(e, index)}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
};

export default QuizPage;*/
/*import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import * as faceapi from "face-api.js";

const QuizPage = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600); // 10-minute timer
  const [violations, setViolations] = useState([]);
  const videoRef = useRef(null);

  useEffect(() => {
    // Fetch quiz data from backend
    axios
      .get(`http://localhost:5000/api/quiz/${quizId}`)
      .then((response) => setQuiz(response.data))
      .catch((error) => console.error("Error fetching quiz:", error));
  }, [quizId]);

  useEffect(() => {
    // Timer countdown
    if (timeLeft <= 0) {
      handleSubmit(); // Auto-submit when timer reaches 0
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    // Load AI Proctoring models
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.ssdMobilenetv1.loadFromUri("/models");
      startVideo();
    };
    loadModels();
  }, []);

  const startVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      if (videoRef.current) videoRef.current.srcObject = stream;
    });
  };

  useEffect(() => {
    // AI Face Detection
    const interval = setInterval(async () => {
      if (!videoRef.current) return;
      const detections = await faceapi.detectAllFaces(
        videoRef.current,
        new faceapi.TinyFaceDetectorOptions()
      );

      if (detections.length === 0) {
        setViolations((prev) => [...prev, "No face detected! Stay in front of the camera."]);
      } else if (detections.length > 1) {
        setViolations((prev) => [...prev, "Multiple faces detected! Exam may be disqualified."]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setAnswers({ ...answers, [questionIndex]: selectedOption });
  };

  const handleSubmit = () => {
    axios
      .post(`http://localhost:5000/api/quiz/attempt/${quizId}`, { answers })
      .then((response) => {
        navigate(`/scorecard/${response.data.attemptId}`);
      })
      .catch((error) => console.error("Error submitting quiz:", error));
  };

  if (!quiz) return <p>Loading quiz...</p>;

  return (
    <div>
      <h2>{quiz.title}</h2>
      <p>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}</p>

      <video ref={videoRef} autoPlay muted width="400" height="300" />

      {violations.length > 0 && (
        <div style={{ color: "red" }}>
          <h3>Warnings:</h3>
          <ul>
            {violations.map((v, index) => (
              <li key={index}>{v}</li>
            ))}
          </ul>
        </div>
      )}

      {quiz.questions.map((question, index) => (
        <div key={index}>
          <p>{index + 1}. {question.text}</p>
          {question.options.map((option, optIndex) => (
            <label key={optIndex}>
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={answers[index] === option}
                onChange={() => handleAnswerChange(index, option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}

      <button onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
};

export default QuizPage;*/



/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [timer, setTimer] = useState(10 * 60);
  const { quizId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      console.log(`Fetching quiz with ID: ${quizId}`); // Log fetching state
      const response = await axios.get(`http://localhost:5001/api/quiz/${quizId}`);
      console.log('Fetched quiz:', response.data); // Log fetched quiz
      setQuiz(response.data);
    };

    fetchQuiz();

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
      if (timer === 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [quizId, timer]);

  const handleAnswerChange = (e, questionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = e.target.value;
    setAnswers(newAnswers);
  };*/

  /*const handleSubmit = async () => {
    console.log('Submitting answers...'); // Log submit attempt
    try {
      const response = await axios.post(`http://localhost:5001/api/quiz/attempt/${quizId}`, {
        answers,
      });
      console.log('Quiz submission response:', response.data); // Log response
      navigate(`/scorecard/${response.data.attemptId}`);
    } catch (error) {
      console.error('Error submitting quiz:', error); // Log error
    }
  };*/


  /*const handleSubmit = async () => {
    console.log('Submitting answers...');
    const token = localStorage.getItem('token');
  
    if (!token) {
      console.error('No token found, user must be logged in');
      alert('You must be logged in to submit the quiz.');
      return;
    }
  
    try {
      const response = await axios.post(
        `http://localhost:5001/api/quiz/attempt/${quizId}`,
        { answers },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Quiz submission response:', response.data);
      navigate(`/scorecard/${response.data.attemptId}`);
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };*/

  /*const handleSubmit = async () => {
    console.log('Submitting answers...');
    const token = localStorage.getItem('token');
    
    if (!token) {
      console.error('No token found, user must be logged in');
      alert('You must be logged in to submit the quiz.');
      return;
    }
  
    // Calculate correct answers and score
    let score = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;
  
    quiz.questions.forEach((q, index) => {
      if (q.correctOption === parseInt(answers[index])) {
        score += 1;
        correctAnswers += 1;
      } else {
        wrongAnswers += 1;
      }
    });
  
    try {
      const response = await axios.post(
        `http://localhost:5001/api/quiz/attempt/${quizId}`,
        { answers, score, correctAnswers, wrongAnswers }, // Send the additional data
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Quiz submission response:', response.data);
      navigate(`/scorecard/${response.data.attemptId}`);
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };
  
  

  console.log('Rendering QuizPage Component'); // Log render

  return (
    <div>
      <h1>{quiz ? quiz.title : 'Loading quiz...'}</h1>
      <p>Time remaining: {Math.floor(timer / 60)}:{timer % 60}</p>
      {quiz && quiz.questions.map((q, index) => (
        <div key={index}>
          <p>{q.questionText}</p>
          {q.options.map((option, i) => (
            <div key={i}>
              <input
                type="radio"
                name={`question-${index}`}
                value={i}
                onChange={(e) => handleAnswerChange(e, index)}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
};

export default QuizPage;*/



/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [timer, setTimer] = useState(10 * 60);
  const { quizId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await axios.get(`http://localhost:5001/api/quiz/${quizId}`);
      setQuiz(response.data);
      setTimer(response.data.duration * 60); // Set timer dynamically
    };

    fetchQuiz();

    /*const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
      if (timer === 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [quizId, timer]);*/

  /*const interval = setInterval(() => {
    setTimer((prev) => (prev > 0 ? prev - 1 : 0)); // Prevent negative time
  }, 1000);

  return () => clearInterval(interval);
}, [quizId]); 

  const handleAnswerChange = (e, questionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      alert('You must be logged in to submit the quiz.');
      return;
    }
  
    // Calculate correct answers and score
    let score = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;
  
    quiz.questions.forEach((q, index) => {
      //if (q.correctOption === parseInt(answers[index]))
      if (q.correctAnswer === parseInt(answers[index])) 
        {
        score += 1;
        correctAnswers += 1;
      } else {
        wrongAnswers += 1;
      }
    });
  
    try {
      const response = await axios.post(
        `http://localhost:5001/api/quiz/attempt/${quizId}`,
        { answers, score, correctAnswers, wrongAnswers },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate(`/scorecard/${response.data.attemptId}`);
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>{quiz ? quiz.title : 'Loading quiz...'}</h1>
        <div className="timer">
          <p>Time remaining: {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}{timer % 60}</p>
        </div>
      </div>
      
      <div className="questions-container">
        {quiz && quiz.questions.map((q, index) => (
          <div key={index} className="question-card">
            <p className="question-text">{q.questionText}</p>
            <div className="options">
              {q.options.map((option, i) => (
                <div key={i} className="option">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={i}
                    onChange={(e) => handleAnswerChange(e, index)}
                  />
                  <label>{option}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="submit-button" onClick={handleSubmit}>Submit Quiz</button>

      <style>
        {`
          .quiz-container {
            background-color: #f8f9fa;
            font-family: 'Arial', sans-serif;
            padding: 40px;
            max-width: 1200px;
            margin: 0 auto;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }

          .quiz-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
          }

          .quiz-header h1 {
            font-size: 2rem;
            color: #2c3e50;
          }

          .timer {
            font-size: 1.2rem;
            color: #e74c3c;
            font-weight: bold;
          }

          .questions-container {
            margin-top: 20px;
          }

          .question-card {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
          }

          .question-text {
            font-size: 1.2rem;
            color: #34495e;
            margin-bottom: 10px;
          }

          .options {
            display: flex;
            flex-direction: column;
          }

          .option {
            margin-bottom: 10px;
          }

          .option input {
            margin-right: 10px;
          }

          .submit-button {
            background-color: #3498db;
            color: #fff;
            padding: 15px 25px;
            font-size: 1.1rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            display: block;
            margin: 20px auto;
          }

          .submit-button:hover {
            background-color: #2980b9;
          }

          .submit-button:active {
            background-color: #1abc9c;
          }
        `}
      </style>
    </div>
  );
};

export default QuizPage;*/
//import React, { useState } from "react"; 
/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
//import { Controlled as CodeMirror } from "@uiw/react-codemirror";

import  CodeMirror  from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";


const QuizPage = () => {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [timer, setTimer] = useState(10 * 60);
  const { quizId } = useParams();
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await axios.get(`http://localhost:5001/api/quiz/${quizId}`);
      setQuiz(response.data);
    };

    fetchQuiz();

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
      if (timer === 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [quizId, timer]);

  const handleAnswerChange = (value, index) => {
    setAnswers((prev) => ({ ...prev, [index]: value }));
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to submit the quiz.');
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:5001/api/quiz/attempt/${quizId}`,
        { answers },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      navigate(`/scorecard/${response.data.attemptId}`);
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>{quiz ? quiz.title : 'Loading quiz...'}</h1>
        <div className="timer">
          <p>Time remaining: {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}{timer % 60}</p>
        </div>
      </div>
      
      <div className="questions-container">
        {quiz && quiz.questions.map((q, index) => (
          <div key={index} className="question-card">
            <p className="question-text">{q.questionText}</p>

            {q.isCodingQuestion ? (
              // Code Editor for coding questions
              <CodeMirror
  value={code}
  height="200px"
  theme={oneDark}
  extensions={[javascript()]}
  onChange={(value) => setCode(value)}
/>

              /*<CodeMirror
                value={answers[index] || ""}
                options={{
                  mode: "javascript",
                  theme: "dracula",
                  lineNumbers: true,
                }}
                onChange={(value) => handleAnswerChange(value, index)}
              />*/
           /* ) : (
              // MCQ Options
              <div className="options">
                {q.options.map((option, i) => (
                  <div key={i} className="option">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={i}
                      onChange={(e) => handleAnswerChange(e.target.value, index)}
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="submit-button" onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
};

export default QuizPage;*/

/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

const QuizPage = () => {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [timer, setTimer] = useState(10 * 60);
  const { quizId } = useParams();
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await axios.get(`http://localhost:5001/api/quiz/${quizId}`);
      setQuiz(response.data);
    };

    fetchQuiz();

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
      if (timer === 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [quizId, timer]);

  const handleAnswerChange = (value, index) => {
    setAnswers((prev) => ({ ...prev, [index]: value }));
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to submit the quiz.');
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:5001/api/quiz/attempt/${quizId}`,
        { answers },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      navigate(`/scorecard/${response.data.attemptId}`);
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  return (
    <div className="quiz-container" style={{ width: '80%', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <div className="quiz-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#282c34', color: 'white', padding: '10px 20px', borderRadius: '8px' }}>
        <h1>{quiz ? quiz.title : 'Loading quiz...'}</h1>
        <div className="timer" style={{ fontSize: '18px', fontWeight: 'bold' }}>
          <p>Time remaining: {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}{timer % 60}</p>
        </div>
      </div>
      
      <div className="questions-container" style={{ marginTop: '20px' }}>
        {quiz && quiz.questions.map((q, index) => (
          <div key={index} className="question-card" style={{ background: '#f9f9f9', padding: '15px', marginBottom: '15px', borderRadius: '8px', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)' }}>
            <p className="question-text" style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{q.questionText}</p>

            {q.isCodingQuestion ? (
              <CodeMirror
                value={code}
                height="200px"
                theme={oneDark}
                extensions={[javascript()]}
                onChange={(value) => setCode(value)}
              />
            ) : (
              <div className="options" style={{ display: 'flex', flexDirection: 'column' }}>
                {q.options.map((option, i) => (
                  <div key={i} className="option" style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={i}
                      onChange={(e) => handleAnswerChange(e.target.value, index)}
                      style={{ marginRight: '10px' }}
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="submit-button" onClick={handleSubmit} style={{ display: 'block', width: '100%', padding: '10px', fontSize: '18px', background: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>Submit Quiz</button>
    </div>
  );
};

export default QuizPage;*/


/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import * as faceapi from 'face-api.js';

const QuizPage = () => {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [timer, setTimer] = useState(10 * 60);
  const { quizId } = useParams();
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const [warningCount, setWarningCount] = useState(0);

  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await axios.get(`http://localhost:5001/api/quiz/${quizId}`);
      setQuiz(response.data);
    };
    fetchQuiz();

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
      if (timer === 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [quizId, timer]);

  useEffect(() => {
    const startProctoring = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
      const video = document.getElementById('video');
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        video.srcObject = stream;
      });

      video.addEventListener('play', () => {
        setInterval(async () => {
          const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions());
          if (detections.length === 0) {
            setWarningCount((prev) => {
              if (prev + 1 >= 3) {
                alert('Quiz terminated due to AI proctoring violations.');
                navigate('/');
              }
              return prev + 1;
            });
          }
        }, 3000);
      });
    };
    startProctoring();
  }, [navigate]);

  const handleAnswerChange = (value, index) => {
    setAnswers((prev) => ({ ...prev, [index]: value }));
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to submit the quiz.');
      return;
    }
    try {
      const response = await axios.post(
        `http://localhost:5001/api/quiz/attempt/${quizId}`,
        { answers },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      navigate(`/scorecard/${response.data.attemptId}`);
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  return (
    <div className="quiz-container" style={{ width: '80%', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <video id="video" autoPlay style={{ display: 'none' }}></video>
      <div className="quiz-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#282c34', color: 'white', padding: '10px 20px', borderRadius: '8px' }}>
        <h1>{quiz ? quiz.title : 'Loading quiz...'}</h1>
        <div className="timer" style={{ fontSize: '18px', fontWeight: 'bold' }}>
          <p>Time remaining: {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}{timer % 60}</p>
        </div>
      </div>
      <div className="questions-container" style={{ marginTop: '20px' }}>
        {quiz && quiz.questions.map((q, index) => (
          <div key={index} className="question-card" style={{ background: '#f9f9f9', padding: '15px', marginBottom: '15px', borderRadius: '8px', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)' }}>
            <p className="question-text" style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{q.questionText}</p>
            {q.isCodingQuestion ? (
              <CodeMirror
                value={code}
                height="200px"
                theme={oneDark}
                extensions={[javascript()]}
                onChange={(value) => setCode(value)}
              />
            ) : (
              <div className="options" style={{ display: 'flex', flexDirection: 'column' }}>
                {q.options.map((option, i) => (
                  <div key={i} className="option" style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={i}
                      onChange={(e) => handleAnswerChange(e.target.value, index)}
                      style={{ marginRight: '10px' }}
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="submit-button" onClick={handleSubmit} style={{ display: 'block', width: '100%', padding: '10px', fontSize: '18px', background: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>Submit Quiz</button>
    </div>
  );
};

export default QuizPage;*/


/*import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import * as faceapi from 'face-api.js';

const QuizPage = () => {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [timer, setTimer] = useState(10 * 60);
  const { quizId } = useParams();
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const [warningCount, setWarningCount] = useState(0);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await axios.get(`http://localhost:5001/api/quiz/${quizId}`);
      setQuiz(response.data);
    };
    fetchQuiz();

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
      if (timer === 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [quizId, timer]);

  useEffect(() => {
    const startProctoring = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri('/models');

      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        streamRef.current = stream; // Store the stream to stop it later
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing webcam:", error);
        alert("Webcam access is required for AI proctoring.");
        navigate('/');
      }

      videoRef.current.addEventListener('play', () => {
        setInterval(async () => {
          const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions());
          if (detections.length === 0) {
            setWarningCount((prev) => {
              const newCount = prev + 1;
              if (newCount < 3) {
                alert(`Warning ${newCount}/3: Face not detected. Please stay in front of the camera.`);
              } else {
                alert("Quiz terminated due to AI proctoring violations.");
                stopCamera();
                navigate('/dashboard');
              }
              return newCount;
            });
          }
        }, 3000);
      });
    };

    startProctoring();

    return () => {
      stopCamera(); // Ensure camera stops when the component unmounts
    };
  }, [navigate]);

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
  };

  const handleAnswerChange = (value, index) => {
    setAnswers((prev) => ({ ...prev, [index]: value }));
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to submit the quiz.');
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:5001/api/quiz/attempt/${quizId}`,
        { answers },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      stopCamera(); // Stop camera after submitting
      navigate(`/scorecard/${response.data.attemptId}`);
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  return (
    <div className="quiz-container" style={{ width: '80%', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      {/* Display Camera Feed *//*}
      <div className="video-container" style={{ textAlign: 'center', marginBottom: '10px' }}>
        <video ref={videoRef} id="video" autoPlay style={{ width: '200px', height: '150px', border: '2px solid black', borderRadius: '8px' }}></video>
      </div>

      <div className="quiz-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#282c34', color: 'white', padding: '10px 20px', borderRadius: '8px' }}>
        <h1>{quiz ? quiz.title : 'Loading quiz...'}</h1>
        <div className="timer" style={{ fontSize: '18px', fontWeight: 'bold' }}>
          <p>Time remaining: {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}{timer % 60}</p>
        </div>
      </div>

      <div className="questions-container" style={{ marginTop: '20px' }}>
        {quiz && quiz.questions.map((q, index) => (
          <div key={index} className="question-card" style={{ background: '#f9f9f9', padding: '15px', marginBottom: '15px', borderRadius: '8px', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)' }}>
            <p className="question-text" style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{q.questionText}</p>

            {q.isCodingQuestion ? (
              <CodeMirror
                value={code}
                height="200px"
                theme={oneDark}
                extensions={[javascript()]}
                onChange={(value) => setCode(value)}
              />
            ) : (
              <div className="options" style={{ display: 'flex', flexDirection: 'column' }}>
                {q.options.map((option, i) => (
                  <div key={i} className="option" style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={i}
                      onChange={(e) => handleAnswerChange(e.target.value, index)}
                      style={{ marginRight: '10px' }}
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="submit-button" onClick={handleSubmit} style={{ display: 'block', width: '100%', padding: '10px', fontSize: '18px', background: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>
        Submit Quiz
      </button>
    </div>
  );
};

export default QuizPage;*/




/*import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import * as faceapi from 'face-api.js';

const QuizPage = () => {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [timer, setTimer] = useState(10 * 60);
  const { quizId } = useParams();
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const [warningCount, setWarningCount] = useState(0);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const detectionIntervalRef = useRef(null); // Store the interval ID

  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await axios.get(`http://localhost:5001/api/quiz/${quizId}`);
      setQuiz(response.data);
    };
    fetchQuiz();

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
      if (timer === 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [quizId, timer]);

  useEffect(() => {
    const startProctoring = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri('/models');

      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing webcam:", error);
        alert("Webcam access is required for AI proctoring.");
        navigate('/');
      }

      videoRef.current.addEventListener('play', () => {
        detectionIntervalRef.current = setInterval(async () => {
          if (!videoRef.current || videoRef.current.srcObject === null) return; // ✅ Prevent error when video is stopped
          
          const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions());
          if (detections.length === 0) {
            setWarningCount((prev) => {
              const newCount = prev + 1;
              if (newCount < 3) {
                alert(`Warning ${newCount}/3: Face not detected. Please stay in front of the camera.`);
              } else {
                alert("Quiz terminated due to AI proctoring violations.");
                stopCamera();
                navigate('/dashboard');
              }
              return newCount;
            });
          }
        }, 3000);
      });
    };

    startProctoring();

    return () => {
      stopCamera();
    };
  }, [navigate]);

  const stopCamera = () => {
    if (detectionIntervalRef.current) {
      clearInterval(detectionIntervalRef.current); // ✅ Stop face detection when camera stops
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
  };

  const handleAnswerChange = (value, index) => {
    setAnswers((prev) => ({ ...prev, [index]: value }));
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to submit the quiz.');
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:5001/api/quiz/attempt/${quizId}`,
        { answers },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      stopCamera();
      navigate(`/scorecard/${response.data.attemptId}`);
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  return (
    <div className="quiz-container" style={{ width: '80%', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      {/* Display Camera Feed *//*}
      <div className="video-container" style={{ textAlign: 'center', marginBottom: '10px' }}>
        <video ref={videoRef} id="video" autoPlay style={{ width: '200px', height: '150px', border: '2px solid black', borderRadius: '8px' }}></video>
      </div>

      <div className="quiz-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#282c34', color: 'white', padding: '10px 20px', borderRadius: '8px' }}>
        <h1>{quiz ? quiz.title : 'Loading quiz...'}</h1>
        <div className="timer" style={{ fontSize: '18px', fontWeight: 'bold' }}>
          <p>Time remaining: {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}{timer % 60}</p>
        </div>
      </div>

      <div className="questions-container" style={{ marginTop: '20px' }}>
        {quiz && quiz.questions.map((q, index) => (
          <div key={index} className="question-card" style={{ background: '#f9f9f9', padding: '15px', marginBottom: '15px', borderRadius: '8px', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)' }}>
            <p className="question-text" style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{q.questionText}</p>

            {q.isCodingQuestion ? (
              <CodeMirror
                value={code}
                height="200px"
                theme={oneDark}
                extensions={[javascript()]}
                onChange={(value) => setCode(value)}
              />
            ) : (
              <div className="options" style={{ display: 'flex', flexDirection: 'column' }}>
                {q.options.map((option, i) => (
                  <div key={i} className="option" style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={i}
                      onChange={(e) => handleAnswerChange(e.target.value, index)}
                      style={{ marginRight: '10px' }}
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="submit-button" onClick={handleSubmit} style={{ display: 'block', width: '100%', padding: '10px', fontSize: '18px', background: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>
        Submit Quiz
      </button>
    </div>
  );
};

export default QuizPage;*/


/*import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import * as faceapi from 'face-api.js';

const QuizPage = () => {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [timer, setTimer] = useState(10 * 60);
  const timerRef = useRef(10 * 60); // Use useRef for stability
  const { quizId } = useParams();
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const [warningCount, setWarningCount] = useState(0);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const detectionIntervalRef = useRef(null);

  // Fetch quiz data
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/quiz/${quizId}`);
        setQuiz(response.data);
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    };
    fetchQuiz();
  }, [quizId]);

  // Timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      timerRef.current -= 1;
      setTimer(timerRef.current);
      if (timerRef.current <= 0) {
        clearInterval(interval);
        alert("Time's up! Submitting quiz...");
        handleSubmit();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // AI Proctoring - Face Detection
  useEffect(() => {
    const startProctoring = async () => {
      const modelPath = process.env.PUBLIC_URL + "/models"; // Ensure correct path
      await faceapi.nets.tinyFaceDetector.loadFromUri(modelPath);
     //await faceapi.nets.faceLandmark68Net.loadFromUri(modelPath);
      //await faceapi.nets.faceRecognitionNet.loadFromUri(modelPath);
      //await faceapi.nets.ssdMobilenetv1.loadFromUri(modelPath); // Optional, better accuracy
     //await faceapi.nets.faceExpressionNet.loadFromUri(modelPath);
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing webcam:", error);
        alert("Webcam access is required for AI proctoring.");
        navigate('/');
        return;
      }

      videoRef.current.addEventListener('play', () => {
        detectionIntervalRef.current = setInterval(async () => {
          if (!videoRef.current || !videoRef.current.srcObject || videoRef.current.readyState !== 4) return;

          const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())//.withFaceLandmarks().withFaceExpressions();

          if (detections.length === 0) {
            setWarningCount((prev) => { 
              const newCount = prev + 1;
              if (newCount < 3) {
                alert(`Warning ${newCount}/3: Face not detected. Please stay in front of the camera.`);
              } else {
                alert("Quiz terminated due to AI proctoring violations.");
                stopCamera();
                navigate('/dashboard');
              }
              return newCount;
            });
          }
        }, 3000);
      });
    };

    startProctoring();

    return () => {
      stopCamera();
    };
  }, [navigate]);

  // Stop Camera
  const stopCamera = () => {
    if (detectionIntervalRef.current) {
      clearInterval(detectionIntervalRef.current);
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
  };

  // Handle Answer Selection
  const handleAnswerChange = (value, index) => {
    setAnswers((prev) => ({ ...prev, [index]: value }));
  };

  // Submit Quiz
  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to submit the quiz.');
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:5001/api/quiz/attempt/${quizId}`,
        { answers },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      stopCamera();
      navigate(`/scorecard/${response.data.attemptId}`);
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  /*return (
    <div className="quiz-container" style={{ width: '80%', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      {/* Display Camera Feed *//*}
      <div className="video-container" style={{ textAlign: 'center', marginBottom: '10px' }}>
        <video ref={videoRef} id="video" autoPlay style={{ width: '200px', height: '150px', border: '2px solid black', borderRadius: '8px' }}></video>
      </div>

      <div className="quiz-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#282c34', color: 'white', padding: '10px 20px', borderRadius: '8px' }}>
        <h1>{quiz ? quiz.title : 'Loading quiz...'}</h1>
        <div className="timer" style={{ fontSize: '18px', fontWeight: 'bold' }}>
          <p>Time remaining: {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}{timer % 60}</p>
        </div>
      </div>

      <div className="questions-container" style={{ marginTop: '20px' }}>
        {quiz && quiz.questions.map((q, index) => (
          <div key={index} className="question-card" style={{ background: '#f9f9f9', padding: '15px', marginBottom: '15px', borderRadius: '8px', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)' }}>
            <p className="question-text" style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{q.questionText}</p>

            {q.isCodingQuestion ? (
              <CodeMirror
                value={code}
                height="200px"
                theme={oneDark}
                extensions={[javascript()]}
                onChange={(value) => setCode(value)}
              />
            ) : (
              <div className="options" style={{ display: 'flex', flexDirection: 'column' }}>
                {q.options.map((option, i) => (
                  <div key={i} className="option" style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={i}
                      onChange={(e) => handleAnswerChange(e.target.value, index)}
                      style={{ marginRight: '10px' }}
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="submit-button" onClick={handleSubmit} style={{ display: 'block', width: '100%', padding: '10px', fontSize: '18px', background: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>
        Submit Quiz
      </button>
    </div>
  );*/

 /* return (
    <div className="quiz-container" style={{ width: '80%', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Video Feed (Fixed in Original Position) *//*}
      <div className="video-container" 
           style={{ 
             position: 'sticky', 
             top: '0px',  // Stays at the very top
             textAlign: 'center', 
             marginBottom: '10px', 
             zIndex: 1000, 
             background: 'white', 
             padding: '10px'  // Prevents content overlap
           }}>
        <video ref={videoRef} id="video" autoPlay 
               style={{ width: '200px', height: '150px', border: '2px solid black', borderRadius: '8px' }}>
        </video>
      </div>
  
      {/* Quiz Header (Fixed Just Below the Video) *//*}
      <div className="quiz-header" 
           style={{ 
             position: 'sticky', 
             top: '170px',  // Positioned below the video
             display: 'flex', 
             justifyContent: 'space-between', 
             alignItems: 'center', 
             background: '#282c34', 
             color: 'white', 
             padding: '10px 20px', 
             borderRadius: '8px', 
             zIndex: 999
           }}>
        <h1>{quiz ? quiz.title : 'Loading quiz...'}</h1>
        <div className="timer" style={{ fontSize: '18px', fontWeight: 'bold' }}>
          <p>Time remaining: {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}{timer % 60}</p>
        </div>
      </div>
  
      {/* Questions Section *//*}
      <div className="questions-container" style={{ marginTop: '20px' }}>
        {quiz && quiz.questions.map((q, index) => (
          <div key={index} className="question-card" 
               style={{ background: '#f9f9f9', padding: '15px', marginBottom: '15px', borderRadius: '8px', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)' }}>
            <p className="question-text" style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{q.questionText}</p>
  
            {q.isCodingQuestion ? (
              <CodeMirror
                value={code}
                height="200px"
                theme={oneDark}
                extensions={[javascript()]}
                onChange={(value) => setCode(value)}
              />
            ) : (
              <div className="options" style={{ display: 'flex', flexDirection: 'column' }}>
                {q.options.map((option, i) => (
                  <div key={i} className="option" style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={i}
                      onChange={(e) => handleAnswerChange(e.target.value, index)}
                      style={{ marginRight: '10px' }}
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
  
      <button className="submit-button" onClick={handleSubmit} 
              style={{ display: 'block', width: '100%', padding: '10px', fontSize: '18px', background: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>
        Submit Quiz
      </button>
    </div>
  );
  
};

export default QuizPage;*/

import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import * as faceapi from 'face-api.js';

const QuizPage = () => {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [timer, setTimer] = useState(10 * 60);
  const { quizId } = useParams();
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const [warningCount, setWarningCount] = useState(0);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const detectionIntervalRef = useRef(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/quiz/${quizId}`);
        setQuiz(response.data);
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    };
    fetchQuiz();
  }, [quizId]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer <= 1) {
          clearInterval(interval);
          alert("Time's up! Submitting quiz...");
          handleSubmit();
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const startProctoring = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri(process.env.PUBLIC_URL + "/models");

      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing webcam:", error);
        alert("Webcam access is required for AI proctoring.");
        navigate('/');
        return;
      }

      let consecutiveWarnings = 0;
      detectionIntervalRef.current = setInterval(async () => {
        if (!videoRef.current || videoRef.current.readyState !== 4) return;
        
        const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions());
        
        if (detections.length === 0) {
          consecutiveWarnings++;
          if (consecutiveWarnings >= 3) {
            setWarningCount(prev => {
              const newCount = prev + 1;
              if (newCount >= 3) {
                alert("Quiz terminated due to AI proctoring violations.");
                stopCamera();
                navigate('/dashboard');
              } else {
                alert(`Warning ${newCount}/3: Face not detected. Please stay in front of the camera.`);
              }
              return newCount;
            });
          }
        } else {
          consecutiveWarnings = 0;
        }
      }, 3000);
    };

    startProctoring();
    return () => stopCamera();
  }, [navigate]);

  const stopCamera = () => {
    if (detectionIntervalRef.current) {
      clearInterval(detectionIntervalRef.current);
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
  };

  const handleAnswerChange = (value, index) => {
    setAnswers(prev => ({ ...prev, [index]: value }));
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to submit the quiz.');
      return;
    }
    try {
      const response = await axios.post(
        `http://localhost:5001/api/quiz/attempt/${quizId}`,
        { answers },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      stopCamera();
      navigate(`/scorecard/${response.data.attemptId}`);
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  return (
    <div style={{ width: '80%', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ position: 'sticky', top: '0px', textAlign: 'center', marginBottom: '10px', zIndex: 1000, background: 'white', padding: '10px' }}>
        <video ref={videoRef} autoPlay style={{ width: '200px', height: '150px', border: '2px solid black', borderRadius: '8px' }}></video>
      </div>

      <div style={{ position: 'sticky', top: '170px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#282c34', color: 'white', padding: '10px 20px', borderRadius: '8px', zIndex: 999 }}>
        <h1>{quiz ? quiz.title : 'Loading quiz...'}</h1>
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Time remaining: {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        {quiz && quiz.questions.map((q, index) => (
          <div key={index} style={{ background: '#f9f9f9', padding: '15px', marginBottom: '15px', borderRadius: '8px', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{q.questionText}</p>
            {q.isCodingQuestion ? (
              <CodeMirror value={code} height="200px" theme={oneDark} extensions={[javascript()]} onChange={setCode} />
            ) : (
              q.options.map((option, i) => (
                <label key={i}><input type="radio" name={`question-${index}`} value={i} onChange={(e) => handleAnswerChange(e.target.value, index)} />{option}</label>
              ))
            )}
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
};

export default QuizPage;



