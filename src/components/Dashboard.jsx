// src/components/Dashboard.js
/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizzes = async () => {
      const response = await axios.get('http://localhost:5000/api/quiz');
      setQuizzes(response.data);
    };

    fetchQuizzes();
  }, []);

  const handleQuizClick = (quizId) => {
    navigate(`/quiz/${quizId}`);
  };

  return (
    <div>
      <h1>Available Quizzes</h1>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz._id} onClick={() => handleQuizClick(quiz._id)}>
            {quiz.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;*/


/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizzes = async () => {
      console.log('Fetching quizzes...'); // Log fetching state
      const response = await axios.get('http://localhost:5001/api/quiz');
      console.log('Fetched quizzes:', response.data); // Log fetched quizzes
      setQuizzes(response.data);
    };

    fetchQuizzes();
  }, []);

  const handleQuizClick = (quizId) => {
    console.log(`Navigating to quiz with ID: ${quizId}`); // Log quiz click
    navigate(`/quiz/${quizId}`);
  };

  console.log('Rendering Dashboard Component'); // Log the render

  return (
    <div>
      <h1>Available Quizzes</h1>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz._id} onClick={() => handleQuizClick(quiz._id)}>
            {quiz.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;*/




/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizzes = async () => {
      console.log('Fetching quizzes...');
      const response = await axios.get('http://localhost:5001/api/quiz');
      console.log('Fetched quizzes:', response.data);
      setQuizzes(response.data);
    };

    fetchQuizzes();
  }, []);

  const handleQuizClick = (quizId) => {
    console.log(`Navigating to quiz with ID: ${quizId}`);
    navigate(`/quiz/${quizId}`);
  };

  return (
    <div className="dashboard-container">
      <h1>Available Quizzes</h1>
      <div className="quiz-cards-container">
        {quizzes.map((quiz) => (
          <div
            key={quiz._id}
            className="quiz-card"
            onClick={() => handleQuizClick(quiz._id)}
          >
            <h3>{quiz.title}</h3>
            <p>Click to view details</p>
          </div>
        ))}
      </div>
      <style>
        {`
          .dashboard-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #f4f6f7;
            padding: 20px;
            font-family: Arial, sans-serif;
          }

          h1 {
            color: #2c3e50;
            font-size: 2.5rem;
            margin-bottom: 30px;
          }

          .quiz-cards-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            width: 80%;
            max-width: 1200px;
          }

          .quiz-card {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            cursor: pointer;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .quiz-card h3 {
            font-size: 1.5rem;
            color: #3498db;
          }

          .quiz-card p {
            color: #7f8c8d;
            font-size: 1rem;
          }

          .quiz-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }

          .quiz-card:active {
            transform: translateY(0);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
    </div>
  );
};

export default Dashboard;*/



/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizzes = async () => {
      console.log('Fetching quizzes...');
      const response = await axios.get('http://localhost:5001/api/quiz');
      console.log('Fetched quizzes:', response.data);
      setQuizzes(response.data);
    };

    fetchQuizzes();
  }, []);

  const handleQuizClick = (quizId) => {
    console.log(`Navigating to quiz with ID: ${quizId}`);
    navigate(`/quiz/${quizId}`);
  };

  return (
    <div className="dashboard-container">
      <h1>Available Quizzes</h1>
      <div className="quiz-cards-container">
        {quizzes.map((quiz) => (
          <div
            key={quiz._id}
            className="quiz-card"
            onClick={() => handleQuizClick(quiz._id)}
          >
            <h3>{quiz.title}</h3>
            <p>Click to view details</p>
          </div>
        ))}
      </div>
      <style>
        {`
          .dashboard-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #f4f6f7;
            padding: 20px;
            font-family: Arial, sans-serif;
          }

          h1 {
            color: #2c3e50;
            font-size: 2.5rem;
            margin-bottom: 30px;
          }

          .quiz-cards-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            width: 80%;
            max-width: 1200px;
          }

          .quiz-card {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            cursor: pointer;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .quiz-card h3 {
            font-size: 1.5rem;
            color: #3498db;
          }

          .quiz-card p {
            color: #7f8c8d;
            font-size: 1rem;
          }

          .quiz-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }

          .quiz-card:active {
            transform: translateY(0);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
    </div>
  );
};

export default Dashboard;*/


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [lectures, setLectures] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching quizzes and lectures...');
        const [quizRes, lectureRes] = await Promise.all([
          axios.get('http://localhost:5001/api/quiz'),
          axios.get('http://localhost:5001/api/lecture')
        ]);
        
        console.log('Fetched quizzes:', quizRes.data);
        console.log('Fetched lectures:', lectureRes.data);
        
        setQuizzes(quizRes.data);
        setLectures(lectureRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleQuizClick = (quizId) => {
    console.log(`Navigating to quiz with ID: ${quizId}`);
    navigate(`/quiz/${quizId}`);
  };

  const handleJoinLecture = (lectureId) => {
    console.log(`Joining lecture with ID: ${lectureId}`);
    navigate(`/lecture/${lectureId}`);
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      {/* Quizzes Section */}
      <section>
        <h2>Available Quizzes</h2>
        <div className="quiz-cards-container">
          {quizzes.map((quiz) => (
            <div key={quiz._id} className="quiz-card" onClick={() => handleQuizClick(quiz._id)}>
              <h3>{quiz.title}</h3>
              <p>Click to attempt</p>
            </div>
          ))}
        </div>
      </section>

      {/* Live Lectures Section */}
      <section>
        <h2>Upcoming Live Lectures</h2>
        <div className="lecture-cards-container">
          {lectures.map((lecture) => (
            <div key={lecture._id} className="lecture-card">
              <h3>{lecture.topic}</h3>
              <p>{lecture.date} at {lecture.time}</p>
              <button onClick={() => handleJoinLecture(lecture._id)} className="join-button">Join Lecture</button>
            </div>
          ))}
        </div>
      </section>

      <style>
        {`
          .dashboard-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #f4f6f7;
            padding: 20px;
            font-family: Arial, sans-serif;
          }

          h1, h2 {
            color: #2c3e50;
            text-align: center;
          }

          .quiz-cards-container, .lecture-cards-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            width: 80%;
            max-width: 1200px;
          }

          .quiz-card, .lecture-card {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            cursor: pointer;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .quiz-card:hover, .lecture-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }

          .join-button {
            background-color: #27ae60;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.2s ease;
          }

          .join-button:hover {
            background-color: #219150;
          }
        `}
      </style>
    </div>
  );
};

export default Dashboard;




