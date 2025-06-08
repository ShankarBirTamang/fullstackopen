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
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const textStyle = {
        margin: '20px auto',
        textAlign: 'center',
        width: '100%',
        color: '#2196F3',
        fontSize: '2em',
        fontWeight: '500'
      };

  const flexContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        margin: '0 auto',
        maxWidth: '900px'
      };

  const subHeadingStyle = {
        ...textStyle,
        fontSize: '1.5em',
        marginBottom: '10px'
      };

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
    
    if (isUpdating) {
      // Handle Update
      const updatedPerson = {
        name: newName,
        phone: newPhoneNo,
        id: updateId
      };
      
      phoneService.update(updateId, updatedPerson)
        .then(response => {
          setPersons(persons.map(person => 
            person.id === updateId ? response.data : person
          ));
          setNewName("");
          setNewPhoneNo("");
          setIsUpdating(false);
          setUpdateId(null);
        })
        .catch(error => {
          console.error("Error updating person:", error);
          if (error.response && error.response.status === 404) {
            alert("Person not found");
          }
        });
    } else {      // Handle Add
      console.log("Adding a new person");
      const existingPerson = persons.find(person => person.name === newName);
      
      if (existingPerson) {
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
          const updatedPerson = {
            ...existingPerson,
            phone: newPhoneNo
          };
          
          phoneService.update(existingPerson.id, updatedPerson)
            .then(response => {
              setPersons(persons.map(person => 
                person.id === existingPerson.id ? response.data : person
              ));
              setNewName("");
              setNewPhoneNo("");
            })
            .catch(error => {
              console.error("Error updating person:", error);
              alert("Failed to update the person's information");
            });
        }
      } else {
        const myNewPerson = {
          name: newName,
          phone: newPhoneNo
        };
        
        phoneService.create(myNewPerson)
          .then(response => {
            console.log("Person added successfully:", response.data);
            setPersons([...persons, response.data]);
            setNewName("");
            setNewPhoneNo("");
          })
          .catch(error => {
            console.error("Error adding person:", error);
            alert("Failed to add the person");
          });
      }
      setNewName("");
      setNewPhoneNo("");
    }
  }
  
  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchName.toLowerCase())  
    );

  const handleUpdate = (id) => {
    console.log("Setting up update for person with id:", id);
    const personToUpdate = persons.find(person => person.id === id);
    if (!personToUpdate) {
      console.error("Person not found for update:", id);
      return;
    }
    // Set form to update mode with current values
    setNewName(personToUpdate.name);
    setNewPhoneNo(personToUpdate.phone);
    setIsUpdating(true);
    setUpdateId(id);
  }
  
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this person?")) {
      let myDelete = phoneService.deletePersons(id);
      myDelete.then(response =>
        setPersons(persons.filter(person =>
          person.id !== id
        ))
      ).catch(error => {
        console.error("Error deleting person:", error);
        if (error.response && error.response.status === 404) {
          alert("Person not found");
        }      });
    }
  }
  
  return (
    <div>
      <h2 style={textStyle}>Phonebook</h2>
      <div style={flexContainerStyle}>
        <div>
          <h2 style={subHeadingStyle}>Search Contacts</h2>
          <Filter searchName={searchName} handleSearchChange={handleSearchChange} />
        </div>
        <div>
          <h2 style={subHeadingStyle}>{isUpdating ? 'Update Contact' : 'Add a New'}</h2>
          <PersonForm 
            handleSubmit={handleSubmit} 
            newName={newName} 
            setNewName={setNewName} 
            newPhoneNo={newPhoneNo} 
            setNewPhoneNo={setNewPhoneNo}
            isUpdating={isUpdating}
            setIsUpdating={setIsUpdating}
          />
        </div>
      </div>

      <h2 style={textStyle}>Numbers Record</h2>      
      <Persons 
        filteredPersons={filteredPersons} 
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App