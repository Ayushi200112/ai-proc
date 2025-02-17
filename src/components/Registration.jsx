/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('learner'); // Default role: Learner
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
        role,
      });

      if (response.data.success) {
        alert('Registration successful! Please log in.');
        navigate('/login'); // Redirect to login page
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="learner">Learner</option>
          <option value="creator">Creator</option>
        </select>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <a href="/login">Login here</a></p>
    </div>
  );
};

export default Registration;*/

/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('learner');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    console.log('Form submitted for registration'); // Add log here

    try {
      const response = await axios.post('http://localhost:5001/api/auth/register', {
        name,
        email,
        password,
        role,
      });
      
      console.log('Registration response:', response.data); // Add log here

      if (response.data.success) {
        alert('Registration successful! Please log in.');
        navigate('/login');
      }
    } catch (error) {
      console.log('Registration error:', error); // Log the error if it occurs
      setError(error.response?.data?.message || 'Registration failed');
    }
  };

  console.log('Rendering Registration Component'); // Add log for component render

  return (
    <div>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="learner">Learner</option>
          <option value="creator">Creator</option>
        </select>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <a href="/login">Login here</a></p>
    </div>
  );
};

export default Registration;*/


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('learner');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    console.log('Form submitted for registration'); // Add log here

    try {
      const response = await axios.post('http://localhost:5001/api/auth/register', {
        name,
        email,
        password,
        role,
      });
      
      console.log('Registration response:', response.data); // Add log here

      if (response.data.success) {
        alert('Registration successful! Please log in.');
        navigate('/login');
      }
    } catch (error) {
      console.log('Registration error:', error); // Log the error if it occurs
      setError(error.response?.data?.message || 'Registration failed');
    }
  };

  console.log('Rendering Registration Component'); // Add log for component render

  return (
    <div className="registration-container">
      <h2 className="registration-title">Register</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="registration-form" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="input-field"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="input-field"
        />
        <select value={role} onChange={(e) => setRole(e.target.value)} className="select-role">
          <option value="learner">Learner</option>
          <option value="creator">Creator</option>
        </select>
        <button type="submit" className="submit-button">Register</button>
      </form>
      <p className="login-link">
        Already have an account? <a href="/login">Login here</a>
      </p>

      <style>
        {`
          .registration-container {
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f7f7f7;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .registration-title {
            text-align: center;
            font-size: 2rem;
            color: #333;
            margin-bottom: 20px;
          }

          .error-message {
            color: red;
            font-size: 14px;
            text-align: center;
            margin-bottom: 15px;
          }

          .registration-form {
            display: flex;
            flex-direction: column;
          }

          .input-field {
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 1rem;
          }

          .select-role {
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 1rem;
          }

          .submit-button {
            padding: 10px;
            margin: 15px 0;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 1rem;
            cursor: pointer;
          }

          .submit-button:hover {
            background-color: #45a049;
          }

          .login-link {
            text-align: center;
            font-size: 0.9rem;
          }

          .login-link a {
            color: #4CAF50;
            text-decoration: none;
          }

          .login-link a:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  );
};

export default Registration;

