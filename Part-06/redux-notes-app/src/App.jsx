import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";
import VisibilityFilter from "./components/VisibilityFilter";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllAndInitializeNotes } from "./reducers/noteReducer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAndInitializeNotes());
  }, []);
  return (
    <div>
      <VisibilityFilter />
      <NoteForm />
      <Notes />
    </div>
  );
};

export default App;
