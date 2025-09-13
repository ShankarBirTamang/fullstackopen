import { useSelector, useDispatch } from "react-redux";
import { toggleImportanceOf, updateNote } from "../reducers/noteReducer";
import noteService from "../services/notes";

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

  const toggleImportance = async (id) => {
    const noteToToggle = notes.find((note) => note.id === id);
    const updatedNote = {
      ...noteToToggle,
      important: !noteToToggle.important,
    };
    console.log("updatedNote", updatedNote);
    const note = await noteService.updateNote(id, updatedNote);
    dispatch(updateNote(note));
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
