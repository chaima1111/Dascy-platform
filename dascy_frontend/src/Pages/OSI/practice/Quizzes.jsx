import React, { useState } from "react";

const Quizzes = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: [
        "Harper Lee",
        "J.K. Rowling",
        "Stephen King",
        "Ernest Hemingway",
      ],
      correctAnswer: "Harper Lee",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // End of quiz
      // You can display the score here or navigate to another component to display the score
      alert(`Quiz completed! Your score is ${score}/${questions.length}`);
    }
  };

  return (
    <div>
      <h2>{questions[currentQuestion].question}</h2>
      <ul>
        {questions[currentQuestion].options.map((option, index) => (
          <li key={index} onClick={() => handleAnswerClick(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quizzes;
