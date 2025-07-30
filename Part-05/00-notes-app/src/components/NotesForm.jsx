import { useState, useRef } from 'react';
import styles from '../styles/App.module.css';
import Notes from './Notes';
import Togglable from './Togglable';
import noteService from '../services/notes';

const NotesForm = ({ myNotes, setMyNotes, updateNote, user }) => {
  const [showAll, setShowAll] = useState(true);
  const [newNote, setNewNote] = useState('');

  const noteFormRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    let myNote = {
      content: newNote,
      date: new Date().toISOString().split('T')[0],
      correct: Math.random() > 0.5,
    };

    noteFormRef.current.toggleVisibility();
    let postData = noteService.create(myNote, user.token);
    postData
      .then((response) => {
        setMyNotes([...myNotes, response.data]); // Update state after getting response with ID
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
    setNewNote('');
  };

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleShow = () => {
    setShowAll(!showAll);
  };

  const notesToShow = showAll
    ? myNotes
    : myNotes.filter((note) => note.correct);

    const deleteNote = async(noteId)=>{
      try {
        console.log('deleting note...',noteId,user.token)
        await noteService.delete(noteId,user.token);
         setMyNotes(prevNotes => prevNotes.filter(note => note.id !== noteId));
      } catch (error) {
         console.error('Error deleting note:', error);
      }
    }

  return (
    <div>
      <p className={styles.noteCount}>Welcome! {user.name}</p>
      <button
        id="showCorrect"
        className={`${styles.button} ${styles.toggleButton}`}
        onClick={handleShow}
      >
        {showAll ? '🎯 Show Correct Only' : '📋 Show All'}
      </button>

      <ul className={styles.notesList}>
        {notesToShow.map((note) => (
          <Notes
            key={note.id}
            note={note}
            updateNote={() => updateNote(note.id)}
            deleteNote={()=>deleteNote(note.id)}
          />
        ))}
      </ul>
      <Togglable id='toggle' buttonLabel="+" ref={noteFormRef}>
        <form className={styles.addNoteForm} onSubmit={handleSubmit}>
          <input
            id='newNote'
            className={`${styles.input} ${styles.addNoteInput}`}
            value={newNote}
            onChange={handleChange}
            placeholder="Write a new note..."
          />
          <button className={styles.button}>Add Note</button>
        </form>
      </Togglable>

      <p className={styles.noteCount}>Total Notes: {myNotes.length}</p>
    </div>
  );
};

export default NotesForm;
