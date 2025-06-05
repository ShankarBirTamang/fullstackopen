import Notes from "./components/Notes";

const App = ({notes}) => {
  return <>
    <h1>Notes</h1>
    <ul>
      {notes.map(note => (
        <Notes key={note.id} note={note} />
      ))}
    </ul>
    <p>Note count: {notes.length}</p>
  </>;
};

export default App;
