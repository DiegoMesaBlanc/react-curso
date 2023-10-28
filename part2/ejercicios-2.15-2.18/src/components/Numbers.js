import noteService from '../services/note'

const Numbers = ({ nums, setPersons }) => {
  const handleClick = (person) => {
    if (window.confirm(`¿Delete ${person.name}?`)) {
      noteService
        .trash(person.id)
        .then(() => {
          setPersons(nums.filter(note => note.id !== person.id))
        })
    }
  }

  return (
    <div>
      {nums.map((num) => (
        <p key={num.name}>
          {num.name} {num.number}
          <button onClick={() => handleClick(num)} >delete</button>
        </p>
      ))}
    </div>
  )
}


export default Numbers