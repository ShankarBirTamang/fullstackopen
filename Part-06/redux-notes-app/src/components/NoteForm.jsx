import React from "react";
import { createNote } from "../reducers/noteReducer";
import { useDispatch, useSelector } from "react-redux";
import noteService from "../services/notes";

const NoteForm = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  const generateId = () => {
    return Math.round(Math.random() * 1000000);
  };
  // event handler
  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.myInput.value;
    console.log("form content:", content);
    event.target.myInput.value = "";
    const newNote = await noteService.createNote(content);
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
