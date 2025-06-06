import { useState ,useEffect} from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [searchName, setSearchName] = useState('');
  const [newPhoneNo, setNewPhoneNo] = useState('');

  useEffect(() => {
    const myAxiosData = axios.get("http://localhost:3001/persons");
    myAxiosData.then(response => {
      console.log("Data fetched successfully:", response.data);
      setPersons(response.data);
    }).catch(error => {
      console.error("Error fetching persons:", error);
    });
  },[]);

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