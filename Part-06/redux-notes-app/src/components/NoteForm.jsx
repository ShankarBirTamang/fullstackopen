import React from "react";
import { createNote } from "../reducers/noteReducer";
import { useDispatch, useSelector } from "react-redux";

const NoteForm = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  // event handler
  const addNote = (event) => {
    event.preventDefault();
    const content = event.target.myInput.value;
    console.log(content);
    event.target.myInput.value = "";
    const newNote = {
      content,
      important: true,
      id: notes.length + 1,
    };
    dispatch(createNote(newNote));
  };
  return (
    <form onSubmit={addNote}>
      <input name="myInput" />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
