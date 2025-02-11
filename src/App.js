import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';
import PrevPapers from './PrevPapers';
import FetchExam from './FetchExam';
import AttendExam from './AttendExam';
import AttendExamstr from './AttendExamstr';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}
function PreviousPapers() {
  return <PrevPapers></PrevPapers>;
}
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/PrevPapers">Previous Papers</Link>
            </li>
          </ul>
        </nav>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/PrevPapers" element={<PrevPapers />} />
          <Route path="/FetchExam" element={<FetchExam />} />
          <Route path="/AttendExam/:examid" element={<AttendExam />} />
          <Route path="/AttendExamstr/:examid" element={<AttendExamstr />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
