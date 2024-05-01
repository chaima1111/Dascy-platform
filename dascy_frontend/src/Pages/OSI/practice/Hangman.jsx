import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import contP from "../../../assets/nextB.png";

import "./Figure"
import "./hangman.css"
import Figure from "./Figure";
const words = [
  {
    word: "Application",
    hint: "Which layer of the OSI model directly serves the end user with protocols like HTTP and SMTP?",
  },
  {
    word: "Physical",
    hint: "A layer wich define the connector and electrical cable",
  },
  {
    word: "Network",
    hint: "Which layer discovers the best path across a physical network",
  },
  {
    word: "Network",
    hint: "Which layers of the OSI model are responsible for addressing and routing?",
  },
  { word: "bits", hint: "What type of data does the physical layer transmit" },
  {
    word: "DataLink",
    hint: "Which layer uses MAC addresses to connect devices?",
  },
  {
    word: "DataLink",
    hint: "Which layers of the OSI model are responsible for data encapsulation and decapsulation?",
  },
  {
    word: "transport",
    hint: "Which layer of the OSI model provides flow control and error recovery mechanisms?",
  },
];

const Hangman = () => {
    let checkWining = true;
  const [selectedWord, setSelectedWord] = useState("");
  const [hint, setHint] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [guessesLeft, setGuessesLeft] = useState(6);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    setSelectedWord(randomWord.word.toLowerCase());
    setHint(randomWord.hint);
  }, []);

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!selectedWord.includes(letter)) {
        setGuessesLeft(guessesLeft - 1);
      }
    }
  };

  const displayWord = () => {
    return selectedWord
      .split("")
      .map((letter) => (guessedLetters.includes(letter) ? letter : "_"));
  };

  const isGameWon = () => {
    return displayWord().join("") === selectedWord;
  };

  const isGameOver = () => {
    if (guessesLeft === 0) checkWining = false;
    return guessesLeft === 0 || isGameWon();

  };

  const renderGuessButtons = () => {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
      <button
      className="keyboard-letter"
        key={letter}
        onClick={() => handleGuess(letter)}
        disabled={guessedLetters.includes(letter) || isGameOver()}
      >
        {letter}
      </button>
    ));
  };
let nb = 0;
  const restartGame = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    nb= randomIndex;
    const randomWord = words[randomIndex];
    setSelectedWord(randomWord.word.toLowerCase());
    setHint(randomWord.hint);
    setGuessedLetters([]);
    setGuessesLeft(6);
  };
  const replay = () => {
     const wordplayed = words[nb];
    setSelectedWord(wordplayed.word.toLowerCase());
    setHint(wordplayed.hint);
    setGuessedLetters([]);
    setGuessesLeft(6);
  };
   useEffect(() => {
     if (isGameOver() && !isGameWon()) {
              alert(
                "restart the game"
              );
       replay();

     }
   }, [isGameOver, isGameWon]);


  return (
    <>
      <div className="dascy__hangman">
        <div className="dascy__hangman-container">
          <div className="dascy__hangman-figure">
            <Figure wrongLetters={guessesLeft} />
            <h1 className="dascy__hangman-title">Hangman Game</h1>
          </div>

          <div className="dascy__hangman-content">
            <p className="dascy__hangman-word"> {displayWord()}</p>
            <p className="dascy__hangman-hint">Hint: {hint}</p>
            <div className="dascy__hangman-guesses">
              {isGameOver() ? (
                <div>
                  <h2>{isGameWon() ? "You Win!" : "Game Over!"}</h2>
                  <p className="correctword">The word was: {selectedWord}</p>
                  <button className="dascy__hangman-win" onClick={restartGame}>
                    {checkWining ? "Next Quizz" : "Repeat Quizz"}
                  </button>
                </div>
              ) : (
                <div>
                  <div className="left">
                    <p>Guesses Left:</p>
                    <p className="dascy__hangman-gL"> {guessesLeft}</p>
                  </div>
                  <div className="dascy__hangman-keyboard">
                    {renderGuessButtons()}
                  </div>
                </div>
              )}
            </div>
          </div>

          <button className="dascy__hangman-next">
            <Link to="/chapterTwo/first">
              {" "}
              <img src={contP} alt="" />{" "}
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hangman;
