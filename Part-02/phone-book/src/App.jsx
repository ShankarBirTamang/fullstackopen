import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Adding a new person");
    setPersons([...persons, { name: newName }]);
    setNewName("");
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName}
          onChange={(e)=>{setNewName(e.target.value)}}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person, index) => (
          <p key={index}>{person.name}</p>
        ))}
    </div>
    </div>
  )
}

export default App