import { useState } from "react";

const Button = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

const StatisticsLine = ({ title, value }) => (
  <tr>
    <td>{title}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad, all, average, possitive }) => {
  return (
    <>
      <h3>statistics</h3>
      {all ? (
        <table>
          <tbody>
            <StatisticsLine title='good' value={good} />
            <StatisticsLine title='neutral' value={neutral} />
            <StatisticsLine title='bad' value={bad} />
            <StatisticsLine title='all' value={all} />
            <StatisticsLine title='average' value={average.toFixed(1)} />
            <StatisticsLine title='positive' value={possitive.toFixed(1)} />
          </tbody>
        </table>
      ) : (
        <div>No feedback given</div>
      )}
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const possitive = (good / all) * 100;

  const handleFeedback = (feedback) => {
    if (feedback === "good") setGood(good + 1);
    if (feedback === "neutral") setNeutral(neutral + 1);
    if (feedback === "bad") setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => handleFeedback("good")}>good</Button>
      <Button onClick={() => handleFeedback("neutral")}>neutral</Button>
      <Button onClick={() => handleFeedback("bad")}>bad</Button>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        possitive={possitive}
      />
    </div>
  );
};

export default App;
