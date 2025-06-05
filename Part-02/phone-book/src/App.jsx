import { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , phone: '040-123456' },
    { name: 'Ada Lovelace' , phone: '39-44-532352' },
    { name: 'Dan Abramov' , phone: '12-43-234345' },
    { name: 'Mary Poppendieck' , phone: '39-23-642'},
    { name: 'John Doe' , phone: '123-456789' },
    { name: 'Jane Smith' , phone: '987-654321' },
    { name: 'Alice Johnson' , phone: '555-1234' },
    { name: 'Bob Brown' , phone: '555-5678' },
    { name: 'Charlie White' , phone: '555-8765' },
    { name: 'Diana Green' , phone: '555-4321' }

  ]) 
  const [newName, setNewName] = useState('');
  const [searchName, setSearchName] = useState('');
  const [newPhoneNo, setNewPhoneNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Adding a new person");
        if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewPhoneNo("");
      return;
    }
    setPersons([...persons, { name: newName , phone: newPhoneNo }]);
    setNewName("");
    setNewPhoneNo("");
  }

  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchName.toLowerCase())  
    );

  return (
    <div>
      <h2>Phonebook</h2>
    
      <Filter searchName={searchName} handleSearchChange={handleSearchChange} />

      <h2>Add a New</h2>
      <PersonForm 
      handleSubmit={handleSubmit} newName={newName} 
      setNewName={setNewName} newPhoneNo={newPhoneNo} 
      setNewPhoneNo={setNewPhoneNo} />

      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  )
}

export default App