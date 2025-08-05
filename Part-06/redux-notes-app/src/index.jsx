import { createRoot } from "react-dom/client";
// import { useState } from "react";
import { createStore } from "redux";
import notesReducer from "./reducers/noteReducer";
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
  return (
    <div>
      <ul>
        {store.getState().map((note) => (
          <li key={note.id}>
            {note.content} <strong>{note.important ? "important" : ""}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

root.render(<App />);
// store.subscribe(() => {
//   root.render(<App />);
// });
