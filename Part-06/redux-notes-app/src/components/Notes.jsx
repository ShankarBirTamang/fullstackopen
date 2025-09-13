import { useSelector, useDispatch } from "react-redux";
import { toggleImportanceOf } from "../reducers/noteReducer";

const Notes = () => {
  const filter = useSelector((state) => state.filter);
  const notes = useSelector((state) =>
    filter === "ALL"
      ? state.notes
      : filter === "IMPORTANT"
      ? state.notes.filter((note) => note.important)
      : state.notes.filter((note) => !note.important)
  );
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
