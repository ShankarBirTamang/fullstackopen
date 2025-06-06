import Notes from "./components/Notes";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [myNotes,setMyNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log("App component mounted or updated");
    //1.Get data from backend server
    let myAxiosData = axios.get("http://localhost:3001/notes");
    console.log(myAxiosData);
    //2.Set the data to myNotes state
    myAxiosData.then(response => {
      console.log("Data fetched successfully:", response.data);
      setMyNotes(response.data);
    }).catch(error => {
      console.error("Error fetching notes:", error);
    });
  }, []);

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("Adding a new note");
    setMyNotes([
      ...myNotes,
      {
        id: myNotes.length + 1,
        content: newNote,
        date: new Date().toISOString().split('T')[0],
        important: Math.random() > 0.5 
      }
    ]);
    setNewNote("");
  }

  const handleChange = (e)=>{
    setNewNote(e.target.value);
  }

  const notesToShow = myNotes.filter(note => showAll ? true : note.important);

  const handleShow = () => {
    setShowAll(!showAll);
  }

  return <>
    <h1>Notes</h1>
    <button onClick={handleShow}>show {showAll?"Important":"All"}</button>
    <ul>
      {notesToShow.map(note => (
        <Notes key={note.id} note={note} />
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
