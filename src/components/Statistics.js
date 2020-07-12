import React from "react";
import Statistic from "./common/Statistic";

export default function Statistics({ good, bad, neutral }) {
  const positive = Math.round((good / (good + bad + neutral)) * 100);
  return good !== 0 || bad !== 0 || neutral !== 0 ? (
    <table>
      <tbody>
        <Statistic name="Good" value={good} />
        <Statistic name="Bad" value={bad} />
        <Statistic name="Neutral" value={neutral} />
        <Statistic name="Total" value={good + bad + neutral} />
        <Statistic name="Positive" value={positive} />
      </tbody>
    </table>
  ) : (
    <p> No Feedback given </p>
  );
}
