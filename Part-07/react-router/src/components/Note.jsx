import { useParams } from "react-router-dom";

const Note = ({ notes }) => {
  const id = useParams().id;
  const note = notes.find((n) => n.id === id);
  if (!note) {
    return <div>note not found</div>;
  }
  return (
    <div>
      <h1>Note</h1>
      <h3>My Note: {note.content}</h3>
      <div>
        <strong>
          Status: {note.important ? "important" : "non-important"}
        </strong>
      </div>
    </div>
  );
};
export default Note;
