
const Notification = ({ message, type }) => {
  const styleNotify = {
    color: 'green',
    background: 'lightgrey',
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }

  if (type === 0) {
    styleNotify.color = 'red'
  }

  return (

    <div>
      {(message !== undefined && type !== undefined)
        ?
        <div style={styleNotify}>
          {message}
        </div>
        : null}
    </div>
  )
}

export default Notification