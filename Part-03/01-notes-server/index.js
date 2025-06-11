let notes = [
  {
    id: "1",
    content: "HTML is easy",
    correct: true,
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    correct: false,
  },
  {
    id: "3",
    content: "GET and POST are the very correct methods of HTTP protocol",
    correct: true,
  },
];

console.log("Starting Notes Server...");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("dist"));

// MongoDB connection setup
const password = "Sankar123";
const url = `mongodb+srv://SankarBir:${password}@cluster0.e2vuyni.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  correct: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// End of MongoDB connection setup

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};
app.use(requestLogger);

app.get("/api/notes", (req, res) => {
  Note.find({}).then((result) => {
    res.json(result);
  });
});

app.get("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  const note = notes.find((n) => n.id === id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ error: "Note not found" });
  }
});

app.put("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  const noteIndex = notes.findIndex((n) => n.id === id);

  if (noteIndex !== -1) {
    // Update the note with data from request body
    const updatedNote = {
      id: id,
      content: req.body.content,
      correct:
        req.body.correct !== undefined
          ? req.body.correct
          : notes[noteIndex].correct,
    };

    notes[noteIndex] = updatedNote;
    res.json(updatedNote);
  } else {
    res.status(404).json({ error: "Note not found" });
  }
});

app.delete("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  notes = notes.filter((n) => n.id !== id);
  res.status(204).end(`Note with id ${id} deleted`);
});

const generateId = () => {
  const maxId =
    notes.length > 0 ? Math.max(...notes.map((n) => Number(n.id))) : 0;
  return String(maxId + 1);
};

app.post("/api/notes", (req, res) => {
  const newNote = req.body;
  console.log("Received new note:", newNote);

  if (!newNote.content) {
    return res.status(400).json({ error: "Content is missing" });
  }

  const note = {
    id: generateId(),
    content: newNote.content,
    important: newNote.correct || false,
  };
  notes.push(note);
  res.status(201).json(note);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Notes Server is running on http://localhost:${PORT}`);
});
