
function Persons({filteredPersons , handleUpdate, handleDelete}) {
  const personStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    margin: '5px 0',
    backgroundColor: '#f5f5f5',
    borderRadius: '5px',
    width: '400px'
  }
  const buttonStyle = {
    padding: '5px 10px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px'
  }

  const editButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4CAF50',
    color: 'white',
    marginRight: '5px'
  }

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f44336',
    color: 'white'
  }

  const buttonContainerStyle = {
    display: 'flex',
    gap: '5px'
  }

  return (
    <div style={{ margin: '20px 0' }}>
      {filteredPersons.map((person, index) => (
        <div key={index} style={personStyle}>
          <span style={{ display: 'flex', gap: '20px' }}>
            <span style={{ minWidth: '150px' }}>{person.name}</span>
            <span>{person.phone}</span>
          </span>            
          <div style={buttonContainerStyle}>
            <button style={editButtonStyle} onClick={() => handleUpdate(person.id)} title="Edit">✎</button>
            <button style={deleteButtonStyle} onClick={() => handleDelete(person.id)} title="Delete">×</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Persons
