import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'; 
import Quiz from './components/Quiz'; 

function App() {
  const [showQuiz, setShowQuiz] = useState(false); 
  const [score, setScore] = useState(0);

  // Start quiz
  const handleStartQuiz = () => {
    setShowQuiz(true);
    setScore(0); 
  };

  return (
    <div className="App">
      <Header handleStartQuiz={handleStartQuiz} />
      {showQuiz && <Quiz setScore={setScore} score={score} />}
    </div>
  );
}

export default App;

