import Notes from "./components/Notes";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [myNotes,setMyNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    let myAxiosData = axios.get("http://localhost:3001/notes");
    console.log("Fetching notes from server");
      myAxiosData.then(response => {
        setMyNotes(response.data);
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
    setMyNotes([...myNotes, newNote]);
    let postData = axios.post("http://localhost:3001/notes", myNote);
    postData.then(response => {
      console.log("Note added successfully:", response.data);
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
   let putPromise = axios.put(`http://localhost:3001/notes/${id}`, updatedNote);
   putPromise.then(response =>{
    let updatedData = response.data;
    console.log("Note updated successfully:", updatedData);
    setMyNotes(myNotes.map(note => note.id === id ? updatedData : note));
   });
  }

  return <>
    <h1>Notes</h1>
    <button onClick={handleShow}>💡 Show {showAll?"Correct Only":"All"}</button>
    <ul>
      {notesToShow.map(note => (
        <Notes key={note.id} note={note} updateNote={()=>{updateNote(note.id)}} />
      ))}
    </ul>
    <p>Note count: {myNotes.length}</p>
    <form onSubmit={handleSubmit}>
      <input value={newNote} onChange={handleChange}/>
      <button >Add Note</button>
    </form>
  </>;
};

export default App;
