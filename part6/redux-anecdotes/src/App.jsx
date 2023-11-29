import { useEffect } from "react"
import { useDispatch } from "react-redux"
import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
import Notification from "./components/Notification"
import VisibilityFilter from "./components/VisibilityFilter"
import { initializeAnecdotes } from "./reducers/anecdoteReducer"


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <div>
      <AnecdoteForm />
      <VisibilityFilter />
      <Notification />
      <AnecdoteList />
    </div>
  )
}

export default App