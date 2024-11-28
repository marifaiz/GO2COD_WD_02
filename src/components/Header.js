import React from 'react';

function Header({ handleStartQuiz }) {
  return (
    <header className="header">
      <h1>Test Your Knowledge with Our Fun Quiz!</h1>
      <h2>General Knowledge</h2>
      <button onClick={handleStartQuiz}>Start Quiz</button>
    </header>
  );
}

export default Header;
