
const Numbers = ({ nums }) => {
  return (
    <div>
      {nums.map(num => (
        <p key={num.name}>{num.name} {num.phone}</p>
      ))}
    </div>
  )
}


export default Numbers