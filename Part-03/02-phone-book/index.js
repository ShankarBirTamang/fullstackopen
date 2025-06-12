console.log("Starting phone book sever");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(express.static("dist"));

// MongoDB connection setup
const password = "Sankar123";
const dbName = "phoneBookApp";
const url = `mongodb+srv://SankarBir:${password}@cluster0.e2vuyni.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const phoneBookSchema = new mongoose.Schema({
  name: String,
  phone: Number,
});

const PhoneBook = mongoose.model("PhoneBook", phoneBookSchema);

phoneBookSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
// End of MongoDB connection setup

//morgan middleware
const morgan = require("morgan");

morgan.token("body", (req) => {
  return req.method === "POST" ? JSON.stringify(req.body) : "";
});

app.use(morgan(":method :url :status :response-time ms :body"));
//end of morgan middleware

//GET request to fetch all persons from MongoDB
app.get("/api/persons", (req, res, next) => {
  PhoneBook.find({})
    .then((persons) => res.json(persons))
    .catch((error) => next(error));
});

// GET single person
app.get("/api/persons/:id", (req, res, next) => {
  const id = req.params.id;
  PhoneBook.findById(id)
    .then((person) => {
      if (person) {
        res.json(person);
      } else {
        res.status(404).json({ error: "Person not found" });
      }
    })
    .catch((error) => next(error));
});

//PUT request to update a note
app.put("/api/persons/:id", (req, res, next) => {
  const id = req.params.id;
  const { name, phone } = req.body;

  PhoneBook.findByIdAndUpdate(
    id,
    { name, phone },
    { new: true, runValidators: true, context: "query" }
  )
    .then((updatedPerson) => {
      if (updatedPerson) {
        res.json(updatedPerson);
      } else {
        res.status(404).json({ error: "Person not found" });
      }
    })
    .catch((error) => next(error));
});

//DELETE note
app.delete("/api/persons/:id", (req, res, next) => {
  const id = req.params.id;
  PhoneBook.findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: "Person not found" });
      }
    })
    .catch((error) => next(error));
});

//POST request to add a new note
app.post("/api/persons", (req, res, next) => {
  const newPerson = req.body;

  const person = new PhoneBook({
    name: newPerson.name,
    phone: newPerson.phone || false,
  });

  person
    .save()
    .then((savedPerson) => res.json(savedPerson))
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
  console.log(`Phone book server is running on http://localhost:${PORT}`);
});
