import { Link } from "react-router-dom";
import { Table, Alert } from "react-bootstrap";

const Notes = ({ notes, message }) => {
  return (
    <div className="container">
      {message && <Alert variant="success">{message}</Alert>}
      <h2>Notes</h2>
      <Table bordered striped hover>
        <tbody>
          {notes.map((note) => (
            <tr key={note.id}>
              <td>
                <Link to={`/notes/${note.id}`}>{note.content}</Link>
              </td>
              <td>
                <strong>
                  {" "}
                  {note.important ? "important" : "non-important"}
                </strong>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default Notes;

/*
<tbody>
        {notes.map(note =>
          <tr key={note.id}>
            <td>
              <Link to={`/notes/${note.id}`}>
                {note.content}
              </Link>
            </td>
            <td>
              {note.user}
            </td>
          </tr>
        )}
      </tbody>

      */
