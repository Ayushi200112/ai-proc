// src/components/Scorecard.js
/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Scorecard = () => {
  const [attempt, setAttempt] = useState(null);
  const { attemptId } = useParams();

  useEffect(() => {
    const fetchAttempt = async () => {
      const response = await axios.get(`http://localhost:5000/api/attempt/${attemptId}`);
      setAttempt(response.data);
    };

    fetchAttempt();
  }, [attemptId]);

  return (
    <div>
      {attempt ? (
        <div>
          <h1>Scorecard</h1>
          <p>Score: {attempt.score}</p>
          <p>Correct Answers: {attempt.correctAnswers}</p>
          <p>Wrong Answers: {attempt.wrongAnswers}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Scorecard;*/


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Scorecard = () => {
  const [attempt, setAttempt] = useState(null);
  const { attemptId } = useParams();

 


  useEffect(() => {
    const fetchAttempt = async () => {
      try {
        const token = localStorage.getItem('token');
  
        if (!token) {
          console.error('🚨 No token found! User might not be logged in.');
          alert('You must be logged in to view the scorecard.');
          return;
        }
  
        console.log('🔹 Attempting to fetch scorecard with token:', token);
        
        const response = await axios.get(
          `http://localhost:5001/api/quiz/attempt/${attemptId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        console.log('✅ Fetched attempt data:', response.data);
        setAttempt(response.data);
      } catch (error) {
        console.error('❌ Error fetching attempt data:', error.response?.data || error.message);
        alert(error.response?.data?.message || 'Error fetching scorecard.');
      }
    };
  
    fetchAttempt();
  }, [attemptId]);
  
  

  return (
    <div>
      <h1>Scorecard</h1>
      {attempt ? (
        <div>
          <p>Score: {attempt.score}</p>
          <p>Total Questions: {attempt.totalQuestions}</p>
          <p>Correct Answers: {attempt.correctAnswers}</p>
        </div>
      ) : (
        <p>Loading scorecard...</p>
      )}
    </div>
  );
};

export default Scorecard;
