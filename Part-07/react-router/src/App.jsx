import { useState } from "react";
import { Routes, Route, Link, Navigate, useMatch } from "react-router-dom";
import Notes from "./components/Notes";
import Note from "./components/Note";
import Login from "./components/Login";

const Home = () => (
  <div>
    {" "}
    <h2>TKTL notes app</h2>{" "}
  </div>
);

const Users = ({ user }) => (
  <div>
    {" "}
    <h2>Users :{user}</h2>{" "}
  </div>
);

const notesAtStart = [
  {
    content: "the app state is in redux store",
    important: false,
    id: "1",
  },
  {
    content: "state changes are made with actions",
    important: false,
    id: "2",
  },
  {
    id: "3085",
    content: "action reaches reducers",
    important: true,
  },
  {
    id: "7181",
    content: "action reaches reducers",
    important: true,
  },
  {
    id: "256f",
    content: "component dispatches action",
    important: true,
  },
];

const App = () => {
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState(notesAtStart);

  const padding = {
    padding: 5,
  };

  const match = useMatch("/notes/:id");
  const note = match ? notes.find((note) => note.id === match.params.id) : null;

  return (
    <div className="container">
      <div>
        <Link style={padding} to="/">
          home
        </Link>
        <Link style={padding} to="/notes">
          notes
        </Link>
        <Link style={padding} to="/users">
          users
        </Link>
        {user ? (
          <em>{user} logged in</em>
        ) : (
          <Link style={padding} to="/login">
            login
          </Link>
        )}
      </div>

      <Routes>
        <Route path="/notes/:id" element={<Note note={note} />} />
        <Route path="/notes" element={<Notes notes={notes} />} />
        <Route
          path="/users"
          element={
            user ? <Users user={user} /> : <Navigate replace to="/login" />
          }
        />
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
      </Routes>

      <div>
        <i>Note app, Department of Computer Science 2025</i>
      </div>
    </div>
  );
};

export default App;
