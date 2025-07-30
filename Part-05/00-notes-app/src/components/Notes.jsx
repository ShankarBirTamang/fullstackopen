import styles from '../styles/Notes.module.css';

const Notes = ({ note, updateNote,deleteNote }) => {
  const handleDelete =(id)=>{
    if(window.confirm('Are you sure you want to delete this note?')){
      deleteNote(id);
    }
  }
  return (
    <li className={`${styles.noteItem} noteItem`}>
      <span className={styles.noteContent}>{note.content}</span>
      <button
        className={`${styles.statusButton} ${
          note.correct
            ? styles.statusButtonCorrect
            : styles.statusButtonIncorrect
        }`}
        onClick={updateNote}
      >
        {note.correct ? '✅ Correct' : '❌ Incorrect'}
      </button>

      <button
        className={`${styles.deleteButton} `}
        onClick={handleDelete}
      >
        🗑️ Delete
      </button>
    </li>
  );
};

export default Notes;
