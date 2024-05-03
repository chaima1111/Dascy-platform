import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./quizz.css";
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
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption(selectedAnswer);
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setQuizCompleted(true);
      }
    }, 1000);
  };
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setQuizCompleted(false);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setQuizCompleted(false);
  };
  return (
    <div>
      {quizCompleted ? (
        <div className="dascy__quizz">
          <div className="dascy__quizz-container">
            <h2 className="resp_text">
              Quiz completed! Your score is {score}/{questions.length}
            </h2>
            <div className="dascy__quizz-container-buttons">
              <button className="dascy__quizz-btn" onClick={handleRestartQuiz}>
                Restart Quiz
              </button>
              <Link to="/chapterTwo/second">
                <button
                  className="dascy__quizz-btn"
                  onClick={handleNextQuestion}
                >
                  Next Chapter
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="dascy__quizz">
          <div className="dascy__quizz-container">
            <div className="dascy__quizz-container_title">
              <h2>{questions[currentQuestion].question}</h2>
            </div>
            <div className="dascy__quizz-container_choises">
              <ul>
                {questions[currentQuestion].options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleAnswerClick(option)}
                    style={{
                      backgroundColor:
                        selectedOption === option
                          ? option === questions[currentQuestion].correctAnswer
                            ? "lightgreen"
                            : "lightcoral"
                          : "",
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
              <div className="dascy__quizz-container_answer">
                {" "}
                {selectedOption && (
                  <p>
                    The correct answer is:{" "}
                    <strong className="dascy__quizz-container_answer-text">
                      {questions[currentQuestion].correctAnswer}
                    </strong>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quizzes;
