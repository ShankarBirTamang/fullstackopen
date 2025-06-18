const app = require("express");
const routes = app.Router();
const Blog = require("../models/blogs");

//GET request to fetch all blogs from MongoDB
routes.get("/", (req, res, next) => {
  Blog.find({})
    .then((blog) => res.json(blog))
    .catch((error) => next(error));
});

// GET single blog
routes.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((blog) => {
      if (blog) {
        res.json(blog);
      } else {
        res.status(404).json({ error: "Blog not found" });
      }
    })
    .catch((error) => next(error));
});

//PUT request to update a blog
routes.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const { content, correct } = req.body;

  Blog.findByIdAndUpdate(
    id,
    { content, correct },
    { new: true, runValidators: true, context: "query" }
  )
    .then((updatedBlog) => {
      if (updatedBlog) {
        res.json(updatedBlog);
      } else {
        res.status(404).json({ error: "Blog not found" });
      }
    })
    .catch((error) => next(error));
});

//DELETE blog
routes.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: "Note not found" });
      }
    })
    .catch((error) => next(error));
});

//POST request to add a new blog
routes.post("/", (req, res, next) => {
  const newBlog = req.body;
  const blog = new Blog({
    title: newBlog.title,
    author: newBlog.author,
    url: newBlog.url,
    likes: newBlog.likes || 0,
  });

  blog
    .save()
    .then((savedBlog) => res.json(savedBlog))
    .catch((error) => next(error));
});

module.exports = routes;
