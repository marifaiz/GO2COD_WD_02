import React, { useState } from 'react';

function Quiz({ setScore, score }) {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which language is used to style web pages?",
      options: ["HTML", "Python", "CSS", "Java"],
      correctAnswer: "CSS",
    },
    {
      question: "What does DOM stand for?",
      options: ["Document Object Model", "Data Object Manager", "Digital Office Method", "None of the above"],
      correctAnswer: "Document Object Model",
    },
    {
      question: "Which programming language is known as the backbone of the web?",
      options: ["Python", "Java", "JavaScript", "C++"],
      correctAnswer: "JavaScript",
    },
    {
      question: "Which HTML tag is used to define an unordered list?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      correctAnswer: "<ul>",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
      setFeedback("Correct!");
    } else {
      setFeedback(`Wrong! The correct answer is ${currentQuestion.correctAnswer}.`);
    }

    setTimeout(() => {
      setFeedback(""); // Clear feedback
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < questions.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
      } else {
        setShowResults(true); // Show results when quiz is complete
      }
    }, 2000);
  };

  // Calculate progress as a percentage
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="quiz">
      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {showResults ? (
        <div className="quiz-results">
          <h2>Quiz Completed!</h2>
          <p className="score-text">Your score is {score} out of {questions.length}.</p>
          <button onClick={() => window.location.reload()} className="retake-button">Retake Quiz</button>
        </div>
      ) : (
        <div>
          {/* Question */}
          <h2>{questions[currentQuestionIndex].question}</h2>

          {/* Options */}
          <ul>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleAnswer(option)}>{option}</button>
              </li>
            ))}
          </ul>

          {/* Feedback */}
          {feedback && (
            <p className={feedback.includes("Correct") ? "feedback-correct" : "feedback-wrong"}>
              {feedback}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;
