// Dashboard.jsx
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Creators = () => {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  

  useEffect(() => {
    const fetchQuizzes = async () => {
      const token = localStorage.getItem('token');
      console.log('Token being sent:', token); // Debugging
  
      if (!token) {
        console.error('Error: No token found in localStorage');
        return;
      }
  
      try {
        const response = await axios.get('http://localhost:5001/api/quiz/creator', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setQuizzes(response.data);
      } catch (error) {
        console.error('Error fetching quizzes:', error.response?.data || error);
      }
    };
  
    fetchQuizzes();
  }, []);
  

  const handleCreateQuiz = () => {
    navigate('/create-quiz');
  };

  const handleEditQuiz = (quizId) => {
    navigate(`/edit-quiz/${quizId}`);
  };

  const handleDeleteQuiz = async (quizId) => {
    await axios.delete(`http://localhost:5001/api/quiz/delete/${quizId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setQuizzes(quizzes.filter((quiz) => quiz._id !== quizId));
  };

  return (
    <div>
      <h1>Creator Dashboard</h1>
      <button onClick={handleCreateQuiz}>Create New Quiz</button>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz._id}>
            <div>{quiz.title}</div>
            <div>Questions: {quiz.questions.length}</div>
            <div>Duration: {quiz.duration} mins</div>
            <button onClick={() => handleEditQuiz(quiz._id)}>Edit</button>
            <button onClick={() => handleDeleteQuiz(quiz._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Creators;*/





/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Creators = () => {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizzes = async () => {
      const token = localStorage.getItem('token');
      console.log('Token being sent:', token); // Debugging
  
      if (!token) {
        console.error('Error: No token found in localStorage');
        return;
      }
  
      try {
        const response = await axios.get('http://localhost:5001/api/quiz/creator', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setQuizzes(response.data);
      } catch (error) {
        console.error('Error fetching quizzes:', error.response?.data || error);
      }
    };
  
    fetchQuizzes();
  }, []);

  const handleCreateQuiz = () => {
    navigate('/create-quiz');
  };

  const handleEditQuiz = (quizId) => {
    navigate(`/edit-quiz/${quizId}`);
  };

  const handleDeleteQuiz = async (quizId) => {
    await axios.delete(`http://localhost:5001/api/quiz/delete/${quizId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setQuizzes(quizzes.filter((quiz) => quiz._id !== quizId));
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar *//*}
      <div className="sidebar">
        <h2>Creator Dashboard</h2>
        <button className="create-quiz-button" onClick={handleCreateQuiz}>Create New Quiz</button>
      </div>

      {/* Content Area *//*}
      <div className="content-area">
        <h2>My Quizzes</h2>
        <ul className="quiz-list">
          {quizzes.map((quiz) => (
            <li key={quiz._id} className="quiz-item">
              <div className="quiz-title">{quiz.title}</div>
              <div>Questions: {quiz.questions.length}</div>
              <div>Duration: {quiz.duration} mins</div>
              <button onClick={() => handleEditQuiz(quiz._id)} className="action-button">Edit</button>
              <button onClick={() => handleDeleteQuiz(quiz._id)} className="action-button">Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Inline CSS *//*}
      <style>
        {`
          .dashboard-container {
            display: flex;
          }
          
          .sidebar {
            width: 250px;
            height: 100vh;
            background-color: #2c3e50;
            color: white;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
          }

          .sidebar h2 {
            margin-bottom: 20px;
            font-size: 24px;
          }

          .create-quiz-button {
            padding: 10px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 20px;
          }

          .create-quiz-button:hover {
            background-color: #2980b9;
          }

          .content-area {
            flex-grow: 1;
            padding: 20px;
            background-color: #ecf0f1;
          }

          .quiz-list {
            list-style-type: none;
            padding: 0;
          }

          .quiz-item {
            background-color: white;
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }

          .quiz-title {
            font-size: 20px;
            font-weight: bold;
          }

          .action-button {
            padding: 8px 12px;
            background-color: #e67e22;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin: 5px;
          }

          .action-button:hover {
            background-color: #d35400;
          }
        `}
      </style>
    </div>
  );
};

export default Creators;*/


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Creators = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [lectures, setLectures] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      console.log('Token being sent:', token); // Debugging
  
      if (!token) {
        console.error('Error: No token found in localStorage');
        return;
      }
  
      try {
        const quizRes = await axios.get('http://localhost:5001/api/quiz/creator', {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        const lectureRes = await axios.get('http://localhost:5001/api/lecture/creator', {
          headers: { Authorization: `Bearer ${token}` }
        });

        setQuizzes(quizRes.data);
        setLectures(lectureRes.data);
      } catch (error) {
        console.error('Error fetching data:', error.response?.data || error);
      }
    };
  
    fetchData();
  }, []);

  const handleCreateQuiz = () => {
    navigate('/create-quiz');
  };

  const handleScheduleLecture = () => {
    navigate('/lecture');
  };

  const handleEditQuiz = (quizId) => {
    navigate(`/edit-quiz/${quizId}`);
  };

  const handleDeleteQuiz = async (quizId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this quiz?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5001/api/quiz/delete/${quizId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setQuizzes(quizzes.filter((quiz) => quiz._id !== quizId));
    } catch (error) {
      console.error('Error deleting quiz:', error);
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Creator Dashboard</h2>
        <button className="create-quiz-button" onClick={handleCreateQuiz}>Create New Quiz</button>
        <button className="schedule-lecture-button" onClick={handleScheduleLecture}>Schedule Live Lecture</button>
      </div>

      {/* Content Area */}
      <div className="content-area">
        <h2>My Quizzes</h2>
        <ul className="quiz-list">
          {quizzes.map((quiz) => (
            <li key={quiz._id} className="quiz-item">
              <div className="quiz-title">{quiz.title}</div>
              <div>Questions: {quiz.questions.length}</div>
              <div>Duration: {quiz.duration} mins</div>
              <button onClick={() => handleEditQuiz(quiz._id)} className="action-button">Edit</button>
              <button onClick={() => handleDeleteQuiz(quiz._id)} className="action-button">Delete</button>
            </li>
          ))}
        </ul>

        <h2>Scheduled Lectures</h2>
        <ul className="lecture-list">
          {lectures.map((lecture) => (
            <li key={lecture._id} className="lecture-item">
              <div className="lecture-title">{lecture.topic}</div>
              <div>Date: {lecture.date}</div>
              <div>Time: {lecture.time}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Inline CSS */}
      <style>
        {`
          .dashboard-container {
            display: flex;
          }
          
          .sidebar {
            width: 250px;
            height: 100vh;
            background-color: #2c3e50;
            color: white;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
          }

          .sidebar h2 {
            margin-bottom: 20px;
            font-size: 24px;
          }

          .create-quiz-button, .schedule-lecture-button {
            padding: 10px;
            margin-top: 10px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .create-quiz-button:hover, .schedule-lecture-button:hover {
            background-color: #2980b9;
          }

          .content-area {
            flex-grow: 1;
            padding: 20px;
            background-color: #ecf0f1;
          }

          .quiz-list, .lecture-list {
            list-style-type: none;
            padding: 0;
          }

          .quiz-item, .lecture-item {
            background-color: white;
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }

          .quiz-title, .lecture-title {
            font-size: 20px;
            font-weight: bold;
          }

          .action-button {
            padding: 8px 12px;
            background-color: #e67e22;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin: 5px;
          }

          .action-button:hover {
            background-color: #d35400;
          }
        `}
      </style>
    </div>
  );
};

export default Creators;

