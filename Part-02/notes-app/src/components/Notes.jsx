const Notes = ({note}) => {
  return (
      <li >
        {note.content} <strong>{note.important ? "Important" : "Not Important"}</strong>
      </li>
  )
};

export default Notes;
