import { useState } from 'react'

const Statistics = ({good, neutral, bad, all, calculateAverage, calculatePositive}) => {
  if (!all)  {
    return <p>No feedback given</p> 
  }

  return (
    <>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <div>average {calculateAverage(good, bad)}</div>
      <div>positive {calculatePositive(good)}</div>
    </>
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
      <button onClick={addGoodFeedback}>good</button>
      <button onClick={addNeutralFeedback}>neutral</button>
      <button onClick={addBadFeedback}>bad</button>

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