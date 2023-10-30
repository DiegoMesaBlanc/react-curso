import noteService from '../services/note'

const Numbers = ({ nums, setPersons, setMessage }) => {
  const handleClick = (person) => {
    if (window.confirm(`¿Delete ${person.name}?`)) {
      noteService
        .trash(person.id)
        .then(() => {
          setPersons(nums.filter(note => note.id !== person.id))
          setMessage({ mssg: `Person deleted`, type: 1 })
          setTimeout(() => setMessage({}), 5000)
        })
        .catch(error => {
          setMessage({ mssg: `Person '${person.name}' was already removed from server`, type: 0 })
          setTimeout(() => {
            setMessage({})
            setPersons(nums.filter(n => n.id !== person.id))
          }, 5000)
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