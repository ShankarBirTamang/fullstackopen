const app = require("express");
const routes = app.Router();
const Note = require("../models/notes");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

//GET request to fetch all notes from MongoDB
routes.get("/", async (req, res, next) => {
  try {
    const notes = await Note.find({}).populate("user", {
      username: 1,
      name: 1,
    });
    res.json(notes);
  } catch (error) {
    next(error);
  }
});

// GET single note
routes.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  const note = await Note.findById(id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ error: "Note not found" });
  }
  next();
});

//PUT request to update a note
routes.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const { content, correct } = req.body;

  const updatedNote = await Note.findByIdAndUpdate(
    id,
    { content, correct },
    { new: true, runValidators: true, context: "query" }
  );
  if (updatedNote) {
    res.json(updatedNote);
  } else {
    res.status(404).json({ error: "Note not found" });
  }
  next();
});

//DELETE note
routes.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  const deletedNote = await Note.findByIdAndDelete(id);
  if (deletedNote) {
    res.status(204).end();
  } else {
    res.status(404).json({ error: "Note not found" });
  }
  next();
});

const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.startsWith("Bearer ")) {
    return authorization.replace("Bearer ", "");
  }
  return null;
};

//POST request to add a new note
routes.post("/", async (req, res, next) => {
  const newNote = req.body;
  const decodedToken = jwt.verify(getTokenFrom(req), process.env.SECRET);
  console.log("DECODED TOKEN", decodedToken);
  if (!decodedToken.id) {
    return response.status(401).json({ error: "token invalid" });
  }
  const user = await User.findById(decodedToken.id);
  // const user = await User.findById(newNote.user);
  if (!user) {
    return res.status(400).json({ error: "User not found" });
  }

  const note = new Note({
    content: newNote.content,
    correct: newNote.correct || false,
    user: user.id,
  });
  try {
    const savedNote = await note.save();
    user.notes = user.notes.concat(savedNote.id);
    await user.save();
    res.status(201).json(savedNote);
  } catch (error) {
    next(error);
  }
});

module.exports = routes;
