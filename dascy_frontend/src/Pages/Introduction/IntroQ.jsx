import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../OSI/practice/quizz.css";
import axios from "axios";

const IntroQ = () => {
  const questions = [
    {
      question: "What is a network",
      options: [
        "building connection",
        "destroy connection",
        "devices",
        "Nothing",
      ],
      correctAnswer: "building connection",
    },
    {
      question: "Is cable trasmit data?",
      options: ["true", "false ", "", ""],
      correctAnswer: "true",
    },
    {
      question: "Do we need three parts to build network?",
      options: ["True", "We need two", "We need four", "We need one "],
      correctAnswer: "We need two",
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
  const [coursePro, setCoursePro] = useState(0);
  const [courseUUID, setCourseUUID] = useState("");
  const [error, setError] = useState(null);
  let pr = 0;
  useEffect(() => {
    const fetchCoursData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/courseNet");
        setCourseUUID(response.data.uuid);
        setCoursePro(response.data.progress);
        setError(null);
      } catch (error) {
        setCourseUUID("");
        setError(error.response ? error.response.data.msg : error.message);
      }
    };

    fetchCoursData();
  }, []);

  const handleScoreChange = (e) => {
    setScore(e.target.value);
  };

  const updateCourse = async () => {
    try {
      //  fetchCoursData();
      pr = score + coursePro;
      const response = await axios.patch(
        `http://localhost:5000/courses/${courseUUID}`,
        {
          name: "network",
          progress: pr,
        }
      );

      if (response.status === 200) {
        alert("Your progress has been updated successfully!");
      }
    } catch (error) {
      console.log({ courseUUID });
      console.error("Error updating course:", error);
      alert("Failed to update course.");
    }
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
                <button className="dascy__quizz-btn" onClick={updateCourse}>
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

export default IntroQ;
