import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleImportanceOf } from "../reducers/noteReducer";

const Notes = () => {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();
  const toggleImportance = (id) => {
    dispatch(toggleImportanceOf(id));
  };
  console.log("notes", notes);
  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note.id} onClick={() => toggleImportance(note.id)}>
            {note.content} <strong>{note.important ? "important" : ""}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
