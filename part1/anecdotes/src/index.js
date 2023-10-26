import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Display = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
    </div>
  )
}

const Text = ({ text, voteText }) => {
  return (
    <div>
      <p>{text}</p>
      <p>{voteText}</p>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [maximo, setMax] = useState(null)
  const [points, setPoints] = useState({})

  const randomIntFromInterval = (min, max) => () => {
    const number = Math.ceil(Math.random() * max) + min
    setSelected(number)
  }

  const addRate = () => {
    const pts = { ...points }
    pts[selected] = (pts[selected] || 0) + 1
    setPoints(pts)
    const maxx = Object.keys(pts).reduce((a, b) => pts[a] > pts[b] ? a : b);
    setMax(maxx)
  }

  return (
    <div>
      <Display text="Anecdote of the day" />
      <Text text={anecdotes[selected]} voteText={`hasta ${points[selected] ?? 0} votes`} />
      <Button handleClick={addRate} text='vote' />
      <Button handleClick={randomIntFromInterval(0, 5)} text='next anecdote' />

      <Display text="Anecdote with most votes" />
      <Text text={anecdotes[maximo]} voteText={points[maximo] ? 'hasta ' + points[maximo] + ' votes' : null} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)