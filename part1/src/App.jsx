import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <div>{text} {value}</div>
  )
}

const Statistics = ({good, neutral, bad, all, calculateAverage, calculatePositive}) => {
  if (!all)  {
    return <p>No feedback given</p> 
  }

  return (
    <>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={calculateAverage(good, bad)} />
      <StatisticLine text="positive" value={calculatePositive(good)} />
    </>
  )
}

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad

  const addGoodFeedback = () => {
    setGood(good + 1)
  }

  const addNeutralFeedback = () => {
    setNeutral(neutral + 1)
  }

  const addBadFeedback = () => {
    setBad(bad + 1)
  }

  const calculateAverage = (good, bad) => {
    if (!good && !bad) return null
    const totalScore = (good * 1) + (bad * -1)
    return totalScore / all
  }

  const calculatePositive = (good) => {
    if (!good) return null
    return `${(good * 100) / all} %`
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={addGoodFeedback} />
      <Button text="neutral" onClick={addNeutralFeedback} />
      <Button text="bad" onClick={addBadFeedback} />

      <h1>statistics</h1>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        calculateAverage={calculateAverage}
        calculatePositive={calculatePositive}
      />
    </div>
  )
}

export default App