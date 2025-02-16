import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';
import PrevPapers from './components/PrevPapers';
import AttendExam from './components/AttendExam';
import Result from './components/Result';
import Instructions from './components/Instructions';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
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
          <Route path="/AttendExam/:examid" element={<AttendExam />} />
          <Route path="/result/:score" element={<Result />} />
          <Route path="/Instructions/:examid" element={<Instructions />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
