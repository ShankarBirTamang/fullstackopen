import { createRoot } from "react-dom/client";
// import { useState } from "react";
import { createStore } from "redux";
import notesReducer, {
  createNote,
  toggleImportanceOf,
} from "./reducers/noteReducer";
// import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

const store = createStore(notesReducer);

store.dispatch({
  type: "NEW_NOTE",
  payload: {
    content: "the app state is in redux store",
    important: true,
    id: 1,
  },
});

store.dispatch({
  type: "NEW_NOTE",
  payload: {
    content: "state changes are made with actions",
    important: false,
    id: 2,
  },
});

const App = () => {
  // event handler
  const addNote = (event) => {
    event.preventDefault();
    const content = event.target.myInput.value;
    console.log(content);
    event.target.myInput.value = "";
    const newNote = {
      content,
      important: true,
      id: store.getState().length + 1,
    };
    store.dispatch(createNote(newNote));
  };

  // event handler
  const toggleImportance = (id) => {
    store.dispatch(toggleImportanceOf(id));
  };
  return (
    <div>
      <form onSubmit={addNote}>
        <input name="myInput" />
        <button type="submit">Add Note</button>
      </form>
      <ul>
        {store.getState().map((note) => (
          <li key={note.id} onClick={() => toggleImportance(note.id)}>
            {note.content} <strong>{note.important ? "important" : ""}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

root.render(<App />);
store.subscribe(() => {
  root.render(<App />);
});
