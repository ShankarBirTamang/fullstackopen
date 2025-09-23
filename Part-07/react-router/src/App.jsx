import { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate, useMatch } from "react-router-dom";
import Notes from "./components/Notes";
import Note from "./components/Note";
import Login from "./components/Login";
// import { Navbar, Nav } from "react-bootstrap";
import { Container, AppBar, Toolbar, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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
  let [message, setMessage] = useState(null);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const padding = {
    padding: 5,
  };

  const match = useMatch("/notes/:id");
  const note = match ? notes.find((note) => note.id === match.params.id) : null;

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button color="inherit" component={Link} to="/">
            home
          </Button>
          <Button color="inherit" component={Link} to="/notes">
            notes
          </Button>
          <Button color="inherit" component={Link} to="/users">
            users
          </Button>
          {user ? (
            <em>{user} logged in</em>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              login
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/notes/:id" element={<Note note={note} />} />
        <Route
          path="/notes"
          element={
            <Notes message={message} setMessage={setMessage} notes={notes} />
          }
        />
        <Route
          path="/users"
          element={
            user ? <Users user={user} /> : <Navigate replace to="/login" />
          }
        />
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setMessage={setMessage} setUser={setUser} />}
        />
      </Routes>

      <div>
        <i>Note app, Department of Computer Science 2025</i>
      </div>
    </Container>
  );
};

export default App;

/*
<AppBar position="static">
  <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu">
    </IconButton>
    <Button color="inherit">
      <Link to="/">home</Link>
    </Button>
    <Button color="inherit">
      <Link to="/notes">notes</Link>
    </Button>
    <Button color="inherit">
      <Link to="/users">users</Link>
    </Button>  
    <Button color="inherit">
      {user
        ? <em>{user} logged in</em>
        : <Link to="/login">login</Link>
      }
    </Button>                
  </Toolbar>
</AppBar>
*/
