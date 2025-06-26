const app = require("express");
const routes = app.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

//GET request to fetch all notes from MongoDB
routes.get("/", async (req, res, next) => {
  try {
    const users = await User.find({}).populate("notes", {
      content: true,
      correct: true,
    });
    res.json(users);
  } catch (error) {
    next(error);
  }
});

// GET single note
routes.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findById(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
  next();
});

//POST request to add a new note
routes.post("/", async (req, res, next) => {
  const newUser = req.body;
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(newUser.password, saltRounds);

  const user = new User({
    username: newUser.username,
    name: newUser.name,
    passwordHash,
  });
  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    next(error);
  }
});

module.exports = routes;
