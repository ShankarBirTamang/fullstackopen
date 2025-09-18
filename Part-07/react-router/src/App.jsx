import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Notes from "./components/Notes";
import Note from "./components/Note";

const Home = () => (
  <div>
    {" "}
    <h2>TKTL notes app</h2>{" "}
  </div>
);

const Users = () => (
  <div>
    {" "}
    <h2>Users</h2>{" "}
  </div>
);

const notes = [
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
  const padding = {
    padding: 5,
  };

  return (
    <Router>
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
      </div>

      <Routes>
        <Route path="/notes/:id" element={<Note notes={notes} />} />
        <Route path="/notes" element={<Notes notes={notes} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <div>
        <i>Note app, Department of Computer Science 2025</i>
      </div>
    </Router>
  );
};

export default App;
