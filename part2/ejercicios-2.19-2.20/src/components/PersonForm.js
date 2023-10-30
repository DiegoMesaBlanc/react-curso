import React, { useState } from 'react'
import noteService from '../services/note'

const PersonForm = ({ persons, setPersons, setMessage }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addNote = (event) => {
    event.preventDefault()
    const persFound = persons.find(p => p.name === newName)
    const numbersObj = {
      name: newName,
      number: newNumber,
    }

    if (persFound !== undefined) {
      if (window.confirm(`${persFound.name} is already added to phonebook, replace the old number with a new one`)) {
        const changedPerson = { ...persFound, number: newNumber }
        noteService
          .update(persFound.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== persFound.id ? person : returnedPerson))
            setNewName('')
            setNewNumber('')
            setMessage({ mssg: `Person updated`, type: 1 })
            setTimeout(() => setMessage({}), 5000)
          })
          .catch(error => {
            setMessage({ mssg: `Person '${persFound.name}' was already removed from server`, type: 0 })
            setTimeout(() => {
              setMessage({})
              setPersons(persons.filter(n => n.id !== persFound.id))
            }, 5000)
          })
      }
    } else {
      noteService
        .create(numbersObj)
        .then(returnedNote => {
          setPersons(persons.concat(returnedNote))
          setNewName('')
          setNewNumber('')
          setMessage({ mssg: `Person created`, type: 1 })
          setTimeout(() => setMessage({}), 5000)
        })
        .catch(error => {
          setMessage({ mssg: `Something went wrong list people`, type: 0 })
          setTimeout(() => setMessage({}), 5000)
        })
    }
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