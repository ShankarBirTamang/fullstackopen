import styles from '../styles/Notes.module.css';

const Notes = ({ note, updateNote }) => {
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
    </li>
  );
};

export default Notes;
