import React, { useState } from 'react'

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addNote = (event) => {
    event.preventDefault()
    const numbersObj = {
      name: newName,
      phone: newNumber,
    }

    setPersons(persons.concat(numbersObj))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}


export default PersonForm