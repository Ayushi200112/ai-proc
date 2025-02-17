// src/App.js
/*import React from 'react';
import Registration from './components/Registration'; 
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import QuizPage from './components/QuizPage';
import Scorecard from './components/Scorecard';
import Certificate from './components/Certificate';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
function App  ()  {
  console.log("TestComponent rendered");
  return (
    <BrowserRouter>
     
      <Routes>
      <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz/:quizId" element={<QuizPage />} />
        <Route path="/scorecard/:attemptId" element={<Scorecard />} />
        <Route path="/certificate/:attemptId" element={<Certificate />} />
        <Route path="/test" element={<div>Test Component Works!</div>} />
      </Routes>
    
    </BrowserRouter>
  );
};

export default App;*/

/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
//import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </Router>
  );
};

export default App;*/

/*import React from 'react';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div>
      <HelloWorld />
    </div>
  );
}

export default App;*/
/*import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;*/

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Import your components
import Registration from './components/Registration';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import QuizPage from './components/QuizPage';
import Scorecard from './components/Scorecard';
import Certificate from './components/Certificate';
import CreateQuiz from './components/CreateQuiz'; // New component for creating quizzes
import EditQuiz from './components/EditQuiz';
import Creators from './components/Creators';
import ScheduleLecture from './components/ScheduleLecture';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz/:quizId" element={<QuizPage />} />
        <Route path="/scorecard/:attemptId" element={<Scorecard />} />
        <Route path="/certificate/:attemptId" element={<Certificate />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
        <Route path="/edit-quiz/:quizId" element={<EditQuiz />} />
        <Route path="/creatorss" element={<Creators />} />
        <Route path="/lecture" element={<ScheduleLecture />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




