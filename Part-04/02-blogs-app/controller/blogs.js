const app = require("express");
const routes = app.Router();
const Blog = require("../models/blogs");

//GET request to fetch all blogs from MongoDB
routes.get("/", async (req, res, next) => {
  try {
    const blogs = await Blog.find({});
    res.json(blogs);
  } catch (error) {
    next(error);
  }
});

// GET single blog
routes.get("/:id", async (req, res, next) => {
  const id = req.params.id || req.body.id;
  try {
    const blog = await Blog.findById(id);
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
      res.json(updatedBlog);
    } else {
      res.status(404).json({ error: "Blog not found" });
    }
  } catch (error) {
    next(error);
  }
});

//DELETE blog
routes.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
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
routes.post("/", async (req, res, next) => {
  const newBlog = req.body;

  if (!newBlog.title || !newBlog.url) {
    return res.status(400).json({ error: "Title and URL are required" });
  }

  const blog = new Blog({
    title: newBlog.title,
    author: newBlog.author,
    url: newBlog.url,
    likes: newBlog.likes || 0,
  });

  try {
    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    next(error);
  }
});

module.exports = routes;
