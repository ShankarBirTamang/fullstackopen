import { createSlice } from "@reduxjs/toolkit";
import noteService from "../services/notes";

const notesSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    appendNote(state, action) {
      console.log("appendNote", action);
      const content = action.payload;
      const newState = state.concat(content);
      return newState;
    },
    initializeNotes(state, action) {
      console.log("initializeNotes", action);
      return action.payload;
    },
    updateNote(state, action) {
      console.log("updateNote", action);
      const updatedNote = action.payload;
      return state.map((prevNote) =>
        prevNote.id === updatedNote.id ? updatedNote : prevNote
      );
    },
  },
});

//async thunk action creator
export const getAllAndInitializeNotes = () => {
  return async (dispatch) => {
    const getAllNotes = await noteService.getAll();
    dispatch(initializeNotes(getAllNotes));
  };
};

export const createNewNoteWithThunk = (content) => {
  return async (dispatch) => {
    const newNote = await noteService.createNote(content);
    dispatch(appendNote(newNote));
  };
};

export const updateNoteWithThunk = (id, note) => {
  return async (dispatch) => {
    const updatedNote = await noteService.updateNote(id, note);
    dispatch(updateNote(updatedNote));
  };
};

export const { appendNote, initializeNotes, updateNote } = notesSlice.actions;
export default notesSlice.reducer;
