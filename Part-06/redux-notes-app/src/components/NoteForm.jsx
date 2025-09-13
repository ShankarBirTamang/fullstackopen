import React from "react";
import { createNewNoteWithThunk } from "../reducers/noteReducer";
import { useDispatch } from "react-redux";

const NoteForm = () => {
  const dispatch = useDispatch();

  // event handler
  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.myInput.value;
    console.log("form content:", content);
    event.target.myInput.value = "";
    dispatch(createNewNoteWithThunk(content));
  };
  return (
    <form onSubmit={addNote}>
      <input name="myInput" />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
