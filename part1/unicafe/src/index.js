import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      <p>{text}: {value}</p>
    </div>
  )
}

const Statistics = ({ statics }) => {
  return (
    <div>
      <StatisticLine text="good" value={statics.good} />
      <StatisticLine text="neutral" value={statics.neutral} />
      <StatisticLine text="bad" value={statics.bad} />
      <StatisticLine text="all" value={statics.all} />
      <StatisticLine text="average" value={(statics.good - statics.bad) / statics.all} />
      <StatisticLine text="positive" value={(statics.good / statics.all) * 100 + '%'} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const summ = (who) => () => {
    setAll(all + 1)

    if (who === 1) setGood(good + 1)
    if (who === 2) setNeutral(neutral + 1)
    if (who === 3) setBad(bad + 1)
  }

  return (
    <div>
      <Display text="give feedback" />
      <Button handleClick={summ(1)} text='good' />
      <Button handleClick={summ(2)} text='neutral' />
      <Button handleClick={summ(3)} text='bad' />

      <Display text="statics" />
      <Statistics statics={{ good, neutral, bad, all }} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)