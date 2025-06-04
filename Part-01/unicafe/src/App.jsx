
import Button from './Button';
import StatisticLine from './StatisticLine';
import { useState } from 'react';
const Statistics = ({good,setGood,bad,setBad,neutral,setNeutral}) => {
const totalFeedback = good + neutral + bad;
  return (
    <>
    <h1>give feedback</h1>
    <Button text="good" onClick={() => setGood(good + 1)} />
    <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
    <Button text="bad" onClick={() => setBad(bad + 1)} />
    
    <h1>statistics</h1>
    {
      totalFeedback === 0 
      ? <p>No feedback given</p> 
      : (
        <>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={totalFeedback} />
          <StatisticLine text="average" value={(good - bad) / totalFeedback} />
          <StatisticLine text="positive" value={(good / totalFeedback) * 100 + ' %'} />
        
        </>
      )
    }
    </>
  );
}

const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return <div>
    
    <Statistics 
    good={good}  setGood={setGood} 
    bad={bad} setBad={setBad}
    neutral={neutral} setNeutral={setNeutral}
    />
  </div>;
};

export default App;
