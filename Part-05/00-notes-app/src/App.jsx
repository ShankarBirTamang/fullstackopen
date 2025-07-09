/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from "react";
import noteService from "./services/notes";
import styles from './styles/App.module.css';

import LoginForm from "./components/LoginForm";
import NotesForm from "./components/NotesForm";

const App = () => {
  const [myNotes,setMyNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 
  const [user, setUser] = useState(null)

  useEffect(() => {
    let myAxiosData = noteService.getAll();
    console.log("Fetching notes from server");
      myAxiosData.then(myData => {
        myData.push({id: 0, content: "This is a fake note", date: "2023-10-01", correct: true}); // Adding a sample note
        setMyNotes(myData);
      }).catch(error => {
        console.error("Error fetching notes:", error);
      });
    }, []);

  const handleSubmit = (e)=>{
      e.preventDefault();
      console.log("Adding a new note");      
      let myNote = {
          content: newNote,
          date: new Date().toISOString().split('T')[0],
          correct: Math.random() > 0.5 
      }
      
      let postData = noteService.create(myNote,user.token);
      postData.then(response => {
        console.log("Note added successfully:", response.data);
        setMyNotes([...myNotes, response.data]); // Update state after getting response with ID
      }).catch(error => {
        console.error("Error adding note:", error.response.data.error);
        alert(error.response.data.error);
      });
      setNewNote("");
      
  }

  const handleChange = (e)=>{
    setNewNote(e.target.value);
  }




  const updateNote = (id) => {
      console.log("Updating note with id:", id);
      let currentNode = myNotes.find(note => note.id === id);
      let updatedNote ={...currentNode, correct: !currentNode.correct};
      let putPromise = noteService.update(id, updatedNote);

      putPromise.then(response =>{
      let updatedData = response.data;
      console.log("Note updated successfully:", updatedData);
      setMyNotes(myNotes.map(note => note.id === id ? updatedData : note));
    }).catch(error => {
      console.error("Error updating note:", error);
      console.dir(error);
      if(error.response.status === 404) {
        alert(`Sorry! this note ""${currentNode.content}"" does not exist in the database`);
      }else{
        alert("An error occurred while updating the note.");
      }
    });
  }



  const loginForm = () => {
    return (
      <LoginForm 
        username={username} 
        password={password} 
        setUsername={setUsername} 
        setPassword={setPassword} 
        setUser={setUser}
      />
    )
  }


 const noteForm = () => {
  return (
    <NotesForm 
      myNotes={myNotes} 
      handleSubmit={handleSubmit} 
      handleChange={handleChange} 
      updateNote={updateNote} 
      newNote={newNote} 
      user={user}
    />
  )
 }

  return (
   <div className={styles.container}>
      <h1 className={styles.header}>📝 Note App</h1>

     {user === null ? loginForm() : (
      <div>
       {noteForm()}
        <button className={styles.button} onClick={() => setUser(null)}>Logout</button>
      </div>
     )}

    
    </div>
  )
};

export default App;
