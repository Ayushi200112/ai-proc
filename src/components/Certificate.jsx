// src/components/Certificate.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import generateCertificate from '../utils/generateCertificate'; // Import your certificate generation function

const Certificate = () => {
  const [attempt, setAttempt] = useState(null);
  const { attemptId } = useParams();

  useEffect(() => {
    const fetchAttempt = async () => {
      const response = await axios.get(`http://localhost:5001/api/attempt/${attemptId}`);
      setAttempt(response.data);
    };

    fetchAttempt();
  }, [attemptId]);

  const handleDownload = () => {
    generateCertificate(attempt.learnerName, attempt.score, 'certificate.pdf');
    const link = document.createElement('a');
    link.href = 'certificate.pdf';
    link.download = 'certificate.pdf';
    link.click();
  };

  return (
    <div>
      {attempt ? (
        <div>
          <h1>Certificate</h1>
          <p>Congratulations, {attempt.learnerName}!</p>
          <button onClick={handleDownload}>Download Certificate</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Certificate;
