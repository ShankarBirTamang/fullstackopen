const app = require("express");
const routes = app.Router();
const Note = require("../models/notes");

//GET request to fetch all notes from MongoDB
routes.get("/", async (req, res, next) => {
  const notes = await Note.find({});
  res.json(notes);
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

//POST request to add a new note
routes.post("/", async (req, res, next) => {
  const newNote = req.body;
  const note = new Note({
    content: newNote.content,
    correct: newNote.correct || false,
  });
  try {
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    next(error);
  }
});

module.exports = routes;
