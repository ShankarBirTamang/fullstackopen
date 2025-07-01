const app = require("express");
const routes = app.Router();
const User = require("../models/user");
const Blog = require("../models/blogs");
const bcrypt = require("bcrypt");

//GET request to fetch all users from MongoDB
routes.get("/", async (req, res, next) => {
  try {
    const users = await User.find({}).populate("blogs", {
      title: true,
      author: true,
      url: true,
      likes: true,
    });
    res.json(users);
  } catch (error) {
    next(error);
  }
});

// GET single user
routes.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findById(id).populate("blogs", {
    title: true,
    author: true,
    url: true,
    likes: true,
  });
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
  next();
});

//POST request to add a new user
routes.post("/", async (req, res, next) => {
  const newUser = req.body;
  if (!newUser.username || !newUser.password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  if (newUser.username.length < 3) {
    return res
      .status(400)
      .json({ error: "Username must be at least 3 characters long" });
  }

  if (newUser.password.length < 3) {
    return res
      .status(400)
      .json({ error: "Password must be at least 3 characters long" });
  }

  const existingUser = await User.findOne({ username: newUser.username });
  if (existingUser) {
    return res.status(400).json({ error: "Username must be unique" });
  }

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

//DELETE user
routes.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;

    // Check if user exists
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Delete all blogs associated with this user
    await Blog.deleteMany({ user: id });

    // Delete the user
    await User.findByIdAndDelete(id);

    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

module.exports = routes;
