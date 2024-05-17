import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./quizz.css";
import { useParams } from "react-router-dom";
import axios from "axios";
const Quizzes = () => {
  //  const { id } = useParams();
   const [course, setCourse] = useState(null);
   const [id, setId] = useState(0);
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

  //add progress
//  useEffect(() => {
//    const fetchCourse = async () => {
//      try {
//        const response = await axios.get(`http://localhost:5000/courses`);
//        setId(response.data.uuid);
//        setScore(response.data.progress);
//      } catch (error) {
//        console.error("Error fetching course:", error);
//      }
//    };

//    fetchCourse();
//  }, [id]);
const [courseId, setCourseId] = useState("");
const [userUUID, setUserUUID] = useState("");
const [courseUUID, setCourseUUID] = useState("");
const [error, setError] = useState(null);
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/me");
  //       setUserUUID(response.data.uuid);
  //       setError(null);
  //     } catch (error) {
  //       setUserUUID("");
  //       setError(error.response ? error.response.data.msg : error.message);
  //     }
  //   };

  //   fetchUserData();
  // }, []);
  useEffect(() => {
    const fetchCoursData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/courses");
        setCourseUUID(response.data.uuid);
        setError(null);
      } catch (error) {
        setCourseUUID("");
        setError(error.response ? error.response.data.msg : error.message);
      }
    };

    fetchCoursData();
  }, []);
// const fetchuserById = async () => {
//   try {
//     const response = await axios.get(`http://localhost:5000/me`);
//     const userData = response.data;
//     setUserUUID(userData.uuid); // Assuming courseData contains the course details with UUID
//     setError(null);
//   } catch (error) {
//     setCourseUUID(null);
//     setError(error.response ? error.response.data.msg : error.message);
//   }
// };
// const fetchCourseById = async () => {
//   try {
//     const response = await axios.get(
//       `http://localhost:5000/courses`
//     );
//     const courseData = response.data;
//     setCourseUUID(courseData.uuid); // Assuming courseData contains the course details with UUID
//     setError(null);
//   } catch (error) {
//     setCourseUUID(null);
//     setError(error.response ? error.response.data.msg : error.message);
//   }
// };
  const handleScoreChange = (e) => {
    setScore(e.target.value);
  };

  const updateCourse = async () => {
    try {
      //  fetchCourseById();
    //  score = score+progress;
      const response = await axios.patch(
        `http://localhost:5000/courses/aa0a716c-68d4-45ed-b5ca-a9b758bc9198`,
        {
          name: "network",
          progress:  score,
        }
      );

      if (response.status === 200) {
        alert('Course updated successfully!');
      }
    } catch (error) {
      console.log({ userUUID });
      console.log({ courseUUID });
      console.error('Error updating course:', error);
      alert('Failed to update course.');
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
              <Link to="/chapterTwo/second" onClick={updateCourse}>
                <button
                  className="dascy__quizz-btn"
                  // onClick={handleNextQuestion}
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
