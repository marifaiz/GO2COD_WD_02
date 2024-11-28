import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'; // Import the Header component
import Quiz from './components/Quiz'; // Import the Quiz component

function App() {
  const [showQuiz, setShowQuiz] = useState(false); // State to show the quiz
  const [score, setScore] = useState(0);

  // Start quiz
  const handleStartQuiz = () => {
    setShowQuiz(true);
    setScore(0); // Reset score when starting the quiz
  };

  return (
    <div className="App">
      <Header handleStartQuiz={handleStartQuiz} />
      {showQuiz && <Quiz setScore={setScore} score={score} />}
    </div>
  );
}

export default App;

