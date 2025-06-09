console.log("Starting phone book sever");
const express = require("express");
const app = express();
app.use(express.json());

let persons = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
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
  const maxId =
    persons.length > 0 ? Math.max(...persons.map((n) => Number(n.id))) : 0;
  return String(maxId + 1);
};

app.post("/api/persons", (req, res) => {
  const newPerson = req.body;
  if (!newPerson.name || !newPerson.number) {
    return res.status(400).json({ error: "Name and number are required" });
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
    number: newPerson.number,
  };

  persons.push(person);
  res.status(201).json(person);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Phone book server is running on http://localhost:${PORT}`);
});
