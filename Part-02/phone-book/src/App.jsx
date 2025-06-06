import { useState ,useEffect} from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import phoneService from './services/phoneService'; 

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [searchName, setSearchName] = useState('');
  const [newPhoneNo, setNewPhoneNo] = useState('');

  useEffect(() => {
    const myAxiosData = phoneService.getAll();
    myAxiosData.then(myData => {
      console.log("Data fetched successfully:", myData);
      setPersons(myData);
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
    let myNewPerson = {
      name: newName,
      phone: newPhoneNo
    }
    let postData = phoneService.create(myNewPerson);
    postData.then(response => {
      console.log("Person added successfully:", response.data);
      setPersons([...persons, response.data]); // Update state after getting response with ID
    }).catch(error => {
      console.error("Error adding person:", error);
    });
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