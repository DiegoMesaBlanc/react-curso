/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from 'react-redux';
import { addVotes } from '../reducers/anecdoteReducer';
import { appendNotify } from '../reducers/notificationReducer';

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <li>
      {anecdote.content}
      has {anecdote.votes}
      <button onClick={handleClick}>vote</button>
    </li>
  )
}


const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    return filter ? anecdotes.filter(el => el.content.includes(filter)) : anecdotes
  })

  const handleVote = (data) => {
    dispatch(addVotes(data))
    dispatch(appendNotify(`you voted '${data.content}'`, 5))
  }

  return (
    <div>
      <h2>Anecdotes</h2>

      <ul>
        {anecdotes.map(anecdote =>
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={() => handleVote(anecdote)}
          />
        )}
      </ul>
    </div>
  )
}

export default AnecdoteList