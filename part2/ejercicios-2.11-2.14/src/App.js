import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DataCountry from './components/datacountry.js'

const App = () => {
  const [nameFilter, setNameFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState({})

  const countriesHook = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }

  useEffect(countriesHook, [])

  const countriesFilter = !nameFilter ? [] : countries.filter(el => el.name.common.toLowerCase().includes(nameFilter.toLowerCase()))

  const handleClick = (i) => {
    setCountry(countriesFilter[i])
  }

  const handleFilter = (e) => {
    setNameFilter(e.target.value)
    const ctr = countriesFilter.length === 1 ? countriesFilter[0] : {}
    setCountry(ctr)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value={nameFilter} onChange={handleFilter} />
      </div>

      {(countriesFilter.length > 10 && nameFilter && countriesFilter.length !== 1)
        ? 'Too many matches, specify another filter'
        : countriesFilter.map((country, index) => (
          <p key={country.fifa}>
            {country.name.common}
            <button onClick={() => handleClick(index)} >show</button>
          </p>
        ))}

      {Object.keys(country).length > 0 ? <DataCountry countryData={country} /> : []}
    </div>
  )
}

export default App