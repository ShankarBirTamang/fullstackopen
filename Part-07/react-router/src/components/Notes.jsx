import { Link } from "react-router-dom";
import { Alert } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const Notes = ({ notes, message }) => {
  return (
    <div className="container">
      {message && <Alert severity="success">{message}</Alert>}
      <Typography variant="h4" gutterBottom>
        Notes
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Content</TableCell>
              <TableCell>Importance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notes.map((note) => (
              <TableRow key={note.id}>
                <TableCell>
                  <Typography
                    component={Link}
                    to={`/notes/${note.id}`}
                    style={{
                      textDecoration: "none",
                      color: note.important ? "red" : "blue",
                    }}
                  >
                    {note.content}
                  </Typography>
                </TableCell>
                <TableCell>
                  <strong>
                    {" "}
                    {note.important ? "important" : "non-important"}
                  </strong>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
