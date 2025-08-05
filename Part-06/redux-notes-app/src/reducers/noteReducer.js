const notesReducer = (state = [], action) => {
  console.log("action", action);
  console.log("state", state);
  switch (action.type) {
    case "NEW_NOTE":
      return state.concat(action.payload);
    case "TOGGLE_IMPORTANCE":
      return state.map((note) =>
        note.id === action.payload.id
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

export default notesReducer;
