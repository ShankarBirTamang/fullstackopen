import Notes from "./components/Notes";
import { useState } from "react";

const App = ({notes}) => {
  const [myNotes,setMyNotes] = useState(notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

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

  return <>
    <h1>Notes</h1>
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
