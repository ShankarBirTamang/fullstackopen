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
const dbName = "noteApp";
const url = `mongodb+srv://SankarBir:${password}@cluster0.e2vuyni.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set("strictQuery", false);
mongoose.connect(url);

// schema for Note
const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    minlength: 5,
  },
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

//GET request to fetch all notes from MongoDB
app.get("/api/notes", (req, res, next) => {
  Note.find({})
    .then((notes) => res.json(notes))
    .catch((error) => next(error));
});

// GET single note
app.get("/api/notes/:id", (req, res, next) => {
  const id = req.params.id;
  Note.findById(id)
    .then((note) => {
      if (note) {
        res.json(note);
      } else {
        res.status(404).json({ error: "Note not found" });
      }
    })
    .catch((error) => next(error));
});

//PUT request to update a note
app.put("/api/notes/:id", (req, res, next) => {
  const id = req.params.id;
  const { content, correct } = req.body;

  Note.findByIdAndUpdate(
    id,
    { content, correct },
    { new: true, runValidators: true, context: "query" }
  )
    .then((updatedNote) => {
      if (updatedNote) {
        res.json(updatedNote);
      } else {
        res.status(404).json({ error: "Note not found" });
      }
    })
    .catch((error) => next(error));
});

//DELETE note
app.delete("/api/notes/:id", (req, res, next) => {
  const id = req.params.id;
  Note.findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: "Note not found" });
      }
    })
    .catch((error) => next(error));
});

//POST request to add a new note
app.post("/api/notes", (req, res, next) => {
  const newNote = req.body;
  const note = new Note({
    content: newNote.content,
    correct: newNote.correct || false,
  });

  note
    .save()
    .then((savedNote) => res.json(savedNote))
    .catch((error) => next(error));
});

// Middleware for handling errors
const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).json({
      error: "malformatted id",
    });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({
      error: error.message,
    });
  } else if (error.name === "MongoServerError" && error.code === 11000) {
    return response.status(409).json({
      error: "duplicate key error",
    });
  }

  next(error);
};

// this has to be the last loaded middleware,
app.use(errorHandler);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Notes Server is running on http://localhost:${PORT}`);
});
