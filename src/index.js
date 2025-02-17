/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Commenting out reportWebVitals if not needed, for debugging
// import reportWebVitals from './reportWebVitals';

// Accessing the root element and rendering the app
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // Temporarily disable StrictMode to check if it resolves the issue
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// Optional: You can use reportWebVitals if you're tracking performance
// reportWebVitals();

