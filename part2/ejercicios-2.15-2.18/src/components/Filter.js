
const Filter = ({ nameFilter, setNameFilter }) => {
  return (
    <div>
      <div>
        filter shown with: <input value={nameFilter} onChange={(e) => setNameFilter(e.target.value)} />
      </div>
    </div>
  )
}


export default Filter