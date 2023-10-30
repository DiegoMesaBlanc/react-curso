import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Numbers from './components/Numbers'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [nameFilter, setNameFilter] = useState('')
  const [message, setMessage] = useState({})

  const personsToShow = !nameFilter ? persons : persons.filter(note => note.name === nameFilter)

  const notesHook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
        setMessage({ mssg: `People succes`, type: 1 })
        setTimeout(() => setMessage({}), 5000)
      })
      .catch(error => {
        setMessage({ mssg: `Something went wrong list people`, type: 0 })
        setTimeout(() => setMessage({}), 5000)
      })
  }

  useEffect(notesHook, [])


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message.mssg} type={message.type} />

      <Filter nameFilter={nameFilter} setNameFilter={setNameFilter} setMessage={setMessage} />

      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} setMessage={setMessage} />

      <h2>Numbers</h2>
      <Numbers nums={personsToShow} setPersons={setPersons} setMessage={setMessage} />
    </div>
  )
}

export default App