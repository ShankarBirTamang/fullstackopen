import { useState } from "react";
import styles from "../styles/App.module.css";
import Notes from "./Notes";

const NotesForm = ({myNotes, handleSubmit, handleChange, updateNote, newNote, user}) => {
    const [showAll, setShowAll] = useState(true);
  
    const handleShow = () => {
      setShowAll(!showAll);
    }
  
    const notesToShow = showAll ? myNotes : myNotes.filter(note => note.correct);
  
    return (
      <div>
        <p className={styles.noteCount} >Welcome! {user.name}</p>
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

export default NotesForm;