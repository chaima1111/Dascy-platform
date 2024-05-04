import React, { useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import "./firstChapter.css"
import cab from "../../assets/Osi/second/minicable.png"
import roteur from "../../assets/Osi/second/routerminim.png"
import swit from "../../assets/Osi/second/switchmin.png"
import lay from "../../assets/Osi/first/layss.png"
import layhid from "../../assets/Osi/first/proto.png"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


function ChaptCard({ id, name, description, type }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    gsap.to(`#info-${id}`, { yPercent: 0 });
    gsap.to(`#cover-${id}`, { opacity: 0 });
  };

  const handleMouseLeave = () => {
    gsap.to(`#info-${id}`, { yPercent: 100 });
    gsap.to(`#cover-${id}`, { opacity: 1 });
  };

  return (
    <div
      className="dascy__chapterFirst-container"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div className="dascy__chapterFirst-container-one" id={id}>
        <div className="cover" id={`cover-${id}`}></div>
      </div>
      <div className="card">
        <h1>{name}</h1>
        <div className="information" id={`info-${id}`}>
          <h2 id={`${id}Name`}>{name}</h2>
          <p>{description}</p>
          <p className="type">contains: {type}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="dascy__chapterOne">
      <div className="dascy__chapterOne-content">
        <h1>How to build a network?</h1>
        <div className="dascy__chapterOne-container">
          <ChaptCard
            id="firstIdea"
            name="Hardware"
            description="Hardware consists of network cards, cable,nodes hub switch router."
            type={
              <>
                <button id="grass">Cable</button>{" "}
                <button id="poison">Switch</button>
                <button id="poison">Hub</button>
                <button id="fire">Router</button>
                <img src={cab} alt="" />
                <img src={roteur} alt="" />
                <img src={swit} alt="" />
              </>
            }
          />
          <ChaptCard
            id="secondIdea"
            name="Software"
            description="subdivided into more layers each layer represents a task called protocol
  .A protocol is an agreement between the sender and receiver on communication rules."
            type={
              <>
                <button id="fire">Layers</button>{" "}
                <button id="poison">Protocoles</button>
                <img className="dascy__chapterOne-image" src={lay} alt="" />
                <img className="dascy__chapterOne-image" src={layhid} alt="" />
              </>
            }
          />
        </div>
      </div>
      <Link to="/quizz">
        {" "}
        <p className="para">practise</p>
        <IoIosCheckmarkCircleOutline className="btn" />
      </Link>
    </div>
  );
}

export default App;
