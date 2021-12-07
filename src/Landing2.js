import "./Landing.css";
import { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
export default function Landing() {
  const history = useHistory();

  const [appear, setAppear] = useState(null);
  const [mode, setMode] = useState(null);

  const chooseLevel = (level) => {
    setMode(level);
    console.log(mode);
  };

  const handleConfirm = () => {
    history.push("/game");
  };

  return (
    <>
      <div className="landing-div">
        <button
          onClick={() => {
            setAppear(true);
          }}
          className="landing-button"
        >
          Enter Game
        </button>
        <div className={!appear ? "hide" : ""}>
          <p>Select a difficulty level: </p>
          <div className="game-level">
            <li onClick={() => chooseLevel("easy")}>Easy </li>

            <p className="instructions">
              Finish the game within 5 mins and 30 turns.
            </p>
          </div>
          <div className="game-level">
            <li onClick={() => chooseLevel("medium")}>Medium </li>
            <p className="instructions">
              Finish the game within 3 mins and 20 turns.
            </p>
          </div>
          <div className="game-level">
            <li onClick={() => chooseLevel("hard")}>Hard </li>
            <p className="instructions">
              Finish the game within 1 min and 15 turns.
            </p>
          </div>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      </div>
    </>
  );
}
