console.log("Starting phone book sever");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(express.static("dist"));

//morgan middleware
const morgan = require("morgan");

morgan.token("body", (req) => {
  return req.method === "POST" ? JSON.stringify(req.body) : "";
});

app.use(morgan(":method :url :status :response-time ms :body"));
//end of morgan middleware

let persons = [
  {
    id: "1",
    name: "Arto Hellas",
    phone: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    phone: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    phone: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    phone: "39-23-6423122",
  },
];

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/info", (req, res) => {
  res.send(`<h2>Phonebook has info for ${persons.length} people</h2>
    <p>${new Date()}</p>`);
});

app.get("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  const person = persons.find((person) => person.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).send(`<h2>Person with id ${id} not found</h2>`);
  }
});

app.put("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  const phoneIndex = persons.findIndex((n) => n.id === id);

  if (phoneIndex !== -1) {
    // Update the note with data from request body
    const updatedPerson = {
      id: id,
      name: req.body.name,
      phone:
        req.body.phone !== undefined
          ? req.body.phone
          : persons[phoneIndex].phone,
    };

    persons[phoneIndex] = updatedPerson;
    res.json(updatedPerson);
  } else {
    res.status(404).json({ error: "Note not found" });
  }
});

app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  const personToDelete = persons.find((person) => person.id === id);

  if (!personToDelete) {
    return res.status(404).json({ error: `Person with id ${id} not found` });
  }

  persons = persons.filter((person) => person.id !== id);
  res.status(200).json({
    message: "Person deleted successfully",
    deleted: personToDelete,
  });
});
const generateId = () => {
  let id;
  do {
    id = String(Math.floor(Math.random() * 1000000));
  } while (persons.find((person) => person.id === id));
  return id;
};

app.post("/api/persons", (req, res) => {
  const newPerson = req.body;
  if (!newPerson.name || !newPerson.phone) {
    return res.status(400).json({ error: "Name and phone are required" });
  }
  const existingPerson = persons.find(
    (person) => person.name === newPerson.name
  );
  if (existingPerson) {
    return res.status(400).json({ error: "Name must be unique" });
  }
  const person = {
    id: generateId(),
    name: newPerson.name,
    phone: newPerson.phone,
  };

  persons.push(person);
  res.status(201).json(person);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Phone book server is running on http://localhost:${PORT}`);
});
