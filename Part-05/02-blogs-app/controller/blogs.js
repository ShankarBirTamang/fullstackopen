const app = require("express");
const routes = app.Router();
const Blog = require("../models/blogs");
const User = require("../models/user");
const { userExtractor } = require("../utils/authMiddleware");
// const jwt = require("jsonwebtoken");

//GET request to fetch all blogs from MongoDB
routes.get("/", async (req, res, next) => {
  try {
    const blogs = await Blog.find({}).populate("user", {
      username: true,
      name: true,
    });
    res.json(blogs);
  } catch (error) {
    next(error);
  }
});

// GET single blog
routes.get("/:id", async (req, res, next) => {
  const id = req.params.id || req.body.id;
  try {
    const blog = await Blog.findById(id).populate("user", {
      username: true,
      name: true,
    });
    if (blog) {
      res.json(blog);
    } else {
      res.status(404).json({ error: "Blog not found" });
    }
  } catch (error) {
    next(error);
  }
});

//PUT request to update a blog
routes.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const { title, author, url, likes } = req.body;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, author, url, likes },
      { new: true, runValidators: true, context: "query" }
    );
    if (updatedBlog) {
      res.json(updatedBlog.populate("user", { username: true, name: true }));
    } else {
      res.status(404).json({ error: "Blog not found" });
    }
  } catch (error) {
    next(error);
  }
});

//DELETE blog
routes.delete("/:id", userExtractor, async (req, res, next) => {
  const id = req.params.id;
  const user = req.user;
  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }
  const token = req.token;
  if (!token) {
    return res.status(401).json({ error: "Token is required" });
  }
  const blog = await Blog.findById(id);
  if (!blog) {
    return res.status(404).json({ error: "Blog not found" });
  }
  if (blog.user.toString() !== user.id) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const result = await Blog.findByIdAndDelete(id);
    if (result) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Blog not found" });
    }
  } catch (error) {
    next(error);
  }
});

//POST request to add a new blog
routes.post("/", userExtractor, async (req, res, next) => {
  const newBlog = req.body;
  console.log("newBlog is ", newBlog);
  if (!newBlog.title || !newBlog.url) {
    return res.status(400).json({ error: "Title and URL are required" });
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(400).json({ error: "User not found" });
  }
  console.log("user is ", user);
  const blog = new Blog({
    title: newBlog.title,
    author: newBlog.author,
    url: newBlog.url,
    likes: newBlog.likes || 0,
    user: user.id,
  });

  try {
    const savedBlog = await blog.save();

    // add the blog to the user's blogs
    user.blogs = user.blogs.concat(savedBlog.id);
    await user.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    next(error);
  }
});

module.exports = routes;
