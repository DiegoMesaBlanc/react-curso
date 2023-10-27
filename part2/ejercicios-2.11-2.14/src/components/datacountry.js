

const DataCountry = ({ countryData }) => {
  return (
    <div>
      <h1>{countryData?.name.common}</h1>

      <p>capital: {countryData?.capital[0]}</p>
      <p>population: {countryData?.population}</p>

      <h2>languages:</h2>
      <ul>
        {Object.keys(countryData?.languages).map(key => (
          <li>{countryData?.languages[key]}</li>
        ))}
      </ul>

      <h1>{countryData?.flag}</h1>
    </div>
  )
}

export default DataCountry