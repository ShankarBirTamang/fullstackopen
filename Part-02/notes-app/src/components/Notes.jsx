const Notes = ({note,updateNote}) => {
  return (
      <li >
        {note.content} <button onClick={updateNote}>{note.correct ? "🙆‍♂️Yes🙆‍♀️" : "🙅‍♂️No🙅‍♀️"}</button>
      </li>
  )
};

export default Notes;
