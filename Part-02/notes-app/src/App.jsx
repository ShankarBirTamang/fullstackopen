const App = ({notes}) => {
  return <>
    <h1>Notes</h1>
    <ul>
      {notes.map(note => (
        <li key={note.id}>
          {note.content} <strong>{note.important ? "Important" : "Not Important"}</strong>
        </li>
      ))}
    </ul>
    <p>Note count: {notes.length}</p>
  </>;
};

export default App;
