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

const notesReducer = (state = initialState, action) => {
  console.log("action", action);
  console.log("state", state);
  switch (action.type) {
    case "NEW_NOTE":
      return state.concat(action.payload);
    case "TOGGLE_IMPORTANCE":
      return state.map((note) =>
        note.id === action.payload
          ? {
              ...note,
              important: !note.important,
            }
          : note
      );
    default:
      return state;
  }
};

// action creator
export const toggleImportanceOf = (id) => {
  return {
    type: "TOGGLE_IMPORTANCE",
    payload: id,
  };
};

export const createNote = (newNote) => {
  return {
    type: "NEW_NOTE",
    payload: newNote,
  };
};

export default notesReducer;
