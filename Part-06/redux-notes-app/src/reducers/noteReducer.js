import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    content: "reducer defines how redux store works",
    important: true,
    id: 1,
  },
  {
    content: "state of store can contain any data",
    important: false,
    id: 2,
  },
];

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote(state, action) {
      console.log("createNote", action);
      const content = action.payload;
      const newState = state.concat(content);
      return newState;
    },
    toggleImportanceOf(state, action) {
      console.log("toggleImportanceOf", action);
      const id = action.payload;
      const noteToToggle = state.find((note) => note.id === id);
      const toggledNote = {
        ...noteToToggle,
        important: !noteToToggle.important,
      };
      return state.map((note) => (note.id === id ? toggledNote : note));
    },
  },
});

export const { createNote, toggleImportanceOf } = notesSlice.actions;
export default notesSlice.reducer;
