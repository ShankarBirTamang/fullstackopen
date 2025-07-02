/* eslint-disable jsx-a11y/label-has-associated-control */
import Notes from "./components/Notes";
import { useEffect, useState } from "react";
import noteService from "./services/notes";
import styles from './styles/App.module.css';
import loginService from "./services/login";

const App = () => {
  const [myNotes,setMyNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

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
      let postData = noteService.create(myNote);
      postData.then(response => {
        console.log("Note added successfully:", response.data);
        setMyNotes([...myNotes, response.data]); // Update state after getting response with ID
      }).catch(error => {
        console.error("Error adding note:", error);
      });
      setNewNote("");
  }

  const handleChange = (e)=>{
    setNewNote(e.target.value);
  }

  const notesToShow = myNotes.filter(note => showAll ? true : note.correct);

  const handleShow = () => {
    setShowAll(!showAll);
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
  const handleLogin = async (event) => {
    event.preventDefault()
    console.log('logging in with', username, password)
    const response = await loginService.login({ username, password })
    console.log('login successful', response)
     setUser(response)
    setUsername('')
    setPassword('')
  }
 const loginForm = () => {
  return (
    <div className={styles.loginForm}>
    <form onSubmit={handleLogin}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Username</label>
        <input
          className={styles.input}
          type="text"
          value={username}
          name="Username"
          placeholder="Enter your username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Password</label>
        <input
          className={styles.input}
          type="password"
          value={password}
          name="Password"
          placeholder="Enter your password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button className={styles.button} type="submit">
        Login
      </button>
    </form>
  </div>
  )
 }

 const noteForm = () => {
  return (
    <div>
       <button 
        className={`${styles.button} ${styles.toggleButton}`}
        onClick={handleShow}
      >
        {showAll ? "🎯 Show Correct Only" : "📋 Show All"}
      </button>

      <ul className={styles.notesList}>
        {notesToShow.map(note => (
          <Notes 
            key={note.id} 
            note={note} 
            updateNote={() => updateNote(note.id)}
          />
        ))}
      </ul>

      <form className={styles.addNoteForm} onSubmit={handleSubmit}>
        <input
          className={`${styles.input} ${styles.addNoteInput}`}
          value={newNote}
          onChange={handleChange}
          placeholder="Write a new note..."
        />
        <button className={styles.button}>Add Note</button>
      </form>

      <p className={styles.noteCount}>Total Notes: {myNotes.length}</p>
    </div>
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
