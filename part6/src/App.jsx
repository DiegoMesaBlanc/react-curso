import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
import VisibilityFilter from "./components/VisibilityFilter"

const App = () => {
  return (
    <div>
      <AnecdoteForm />
      <VisibilityFilter />
      <AnecdoteList />
    </div>
  )
}

export default App