// src/components/Login.js
/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      if (role === 'creator') {
        navigate('/dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="creator">Creator</option>
          <option value="learner">Learner</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;*/


/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Form submitted for login'); // Add log here

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      
      console.log('Login response:', response.data); // Log the response

      localStorage.setItem('token', response.data.token);
      if (role === 'creator') {
        navigate('/dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      console.log('Login error:', error); // Log the error if it occurs
    }
  };

  console.log('Rendering Login Component'); // Log the render

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="creator">Creator</option>
          <option value="learner">Learner</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;*/

/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState(''); // New state for success/error messages
  const navigate = useNavigate();

  
  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage(''); // Reset message
    console.log('Form submitted for login');
  
    try {
      const response = await axios.post('http://localhost:5001/api/auth/login', { email, password });
  
      // Check if the response contains the token and store it in localStorage
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);  // Save token in localStorage
        console.log('Token stored:', response.data.token);
      }
  
      // Show success message
      setMessage('✅ Login successful! Redirecting...');
  
      // Redirect based on role
      setTimeout(() => {
        if (role === 'creator') {
          navigate('/creatorss');
        } else {
          navigate('/dashboard');
        }
      }, 2000); // Redirect after 2 seconds
  
    } catch (error) {
      console.log('Login error:', error);
      setMessage('❌ Invalid email or password. Please try again.');
    }
  };
  

  console.log('Rendering Login Component');

  return (
    <div>
      <h2>Login</h2>
      {message && <p style={{ color: message.includes('✅') ? 'green' : 'red' }}>{message}</p>}
      <form onSubmit={handleLogin}>
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
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="">Select Role</option>
          <option value="creator">Creator</option>
          <option value="learner">Learner</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;*/


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState(''); // New state for success/error messages
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage(''); // Reset message
    console.log('Form submitted for login');
  
    try {
      const response = await axios.post('http://localhost:5001/api/auth/login', { email, password });
  
      // Check if the response contains the token and store it in localStorage
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);  // Save token in localStorage
        console.log('Token stored:', response.data.token);
      }
  
      // Show success message
      setMessage('✅ Login successful! Redirecting...');
  
      // Redirect based on role
      setTimeout(() => {
        if (role === 'creator') {
          navigate('/creatorss');
        } else {
          navigate('/dashboard');
        }
      }, 2000); // Redirect after 2 seconds
  
    } catch (error) {
      console.log('Login error:', error);
      setMessage('❌ Invalid email or password. Please try again.');
    }
  };

  console.log('Rendering Login Component');

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      {message && <p className={`message ${message.includes('✅') ? 'success' : 'error'}`}>{message}</p>}
      <form className="login-form" onSubmit={handleLogin}>
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
        <select value={role} onChange={(e) => setRole(e.target.value)} required className="role-select">
          <option value="">Select Role</option>
          <option value="creator">Creator</option>
          <option value="learner">Learner</option>
        </select>
        <button type="submit" className="submit-button">Login</button>
      </form>

      <style>
        {`
          .login-container {
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f7f7f7;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .login-title {
            text-align: center;
            font-size: 2rem;
            color: #333;
            margin-bottom: 20px;
          }

          .message {
            text-align: center;
            font-size: 1rem;
            margin-bottom: 15px;
          }

          .success {
            color: green;
          }

          .error {
            color: red;
          }

          .login-form {
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

          .role-select {
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
        `}
      </style>
    </div>
  );
};

export default Login;

