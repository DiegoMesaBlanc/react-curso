import React, { useState } from 'react'
import Numbers from './Numbers'
import Filter from './Filter'
import PersonForm from '../PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [nameFilter, setNameFilter] = useState('')

  const personsToShow = !nameFilter ? persons : persons.filter(note => note.name === nameFilter)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameFilter={nameFilter} setNameFilter={setNameFilter} />

      <h2>add a new</h2>
      <PersonForm setPersons={setPersons} />

      <h2>Numbers</h2>
      <Numbers nums={personsToShow} />
    </div>
  )
}

export default App