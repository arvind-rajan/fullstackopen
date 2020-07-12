import React, { useState } from "react";
import ReactDOM from "react-dom";
// import './index.css';

import Statistics from "./components/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleClick = (name) => {
    if (name === "good") {
      setGood(good + 1);
    } else if (name === "bad") {
      setBad(bad + 1);
    } else {
      setNeutral(neutral + 1);
    }
  };

  return (
    <>
      <h2>Give Feedback</h2>

      <button onClick={() => handleClick("good")}>Good</button>
      <button onClick={() => handleClick("bad")}>Bad</button>
      <button onClick={() => handleClick("neutral")}>Neutral</button>

      <h3>Statistics :</h3>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
