const { test, describe, after } = require("node:test");
const assert = require("node:assert/strict");
const supertest = require("supertest");
const mongoose = require("mongoose");
const app = require("../../app");
const Blog = require("../../models/blogs");

const api = supertest(app);

const initialBlogs = [
  {
    title: "First blog",
    author: "Alice",
    url: "http://example.com/1",
    likes: 1,
  },
  {
    title: "Second blog",
    author: "Bob",
    url: "http://example.com/2",
    likes: 2,
  },
];

// Setup the database before each test
test.beforeEach(async () => {
  await Blog.deleteMany({});
  await Blog.insertMany(initialBlogs);
});
describe("GET /api/blogs", () => {
  // Main test: GET /api/blogs returns JSON and correct length
  test("GET /api/blogs returns blogs in JSON and correct length", async () => {
    const res = await api.get("/api/blogs");

    assert.strictEqual(res.statusCode, 200);
    assert.match(res.headers["content-type"], /application\/json/);
    assert.strictEqual(res.body.length, initialBlogs.length);
  });

  test('blog posts have "id" property instead of "_id"', async () => {
    const response = await api.get("/api/blogs");

    const blogs = response.body;
    for (const blog of blogs) {
      assert.ok(blog.id, "Expected blog to have id property");
      assert.equal(
        blog._id,
        undefined,
        "Expected blog not to have _id property"
      );
    }
  });
});

describe("POST /api/blogs", () => {
  test("POST /api/blogs creates a new blog post", async () => {
    // Setup: clear DB and insert initial
    await Blog.deleteMany({});
    const initialBlogs = [
      { title: "Blog A", author: "Author A", url: "http://a.com", likes: 3 },
    ];
    await Blog.insertMany(initialBlogs);

    const newBlog = {
      title: "New Blog",
      author: "Test Author",
      url: "http://testblog.com",
      likes: 7,
    };

    // Act: post the new blog
    await api
      .post("/api/blogs")
      .send(newBlog)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    // Assert: check blog count and content
    const blogsAtEnd = await Blog.find({});
    assert.strictEqual(blogsAtEnd.length, initialBlogs.length + 1);

    const titles = blogsAtEnd.map((b) => b.title);
    assert.ok(titles.includes("New Blog"));
  });

  test('responds with 400 if "title" is missing', async () => {
    const blogWithoutTitle = {
      author: "No Title Author",
      url: "http://notitle.com",
      likes: 3,
    };

    await api.post("/api/blogs").send(blogWithoutTitle).expect(400);
  });

  test('responds with 400 if "url" is missing', async () => {
    const blogWithoutUrl = {
      title: "No URL Blog",
      author: "No URL Author",
      likes: 2,
    };

    await api.post("/api/blogs").send(blogWithoutUrl).expect(400);
  });
});

describe("DELETE /api/blogs", () => {
  // Test for missing "likes" property defaults to 0
  test('missing "likes" property defaults to 0', async () => {
    await Blog.deleteMany({});

    const blogWithoutLikes = {
      title: "Blog without likes",
      author: "Anonymous",
      url: "http://nolikes.com",
    };

    const response = await api
      .post("/api/blogs")
      .send(blogWithoutLikes)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    assert.equal(response.body.likes, 0);

    const savedBlog = await Blog.findOne({ title: "Blog without likes" });
    assert.equal(savedBlog.likes, 0);
  });

  // Test for deleting a blog
  test("a blog can be deleted", async () => {
    // First insert one blog
    await Blog.deleteMany({});
    const newBlog = {
      title: "To Be Deleted",
      author: "Delete Me",
      url: "http://delete.com",
      likes: 0,
    };
    const savedResponse = await api
      .post("/api/blogs")
      .send(newBlog)
      .expect(201);

    const blogToDeleteId = savedResponse.body.id;

    // Delete it
    await api.delete(`/api/blogs/${blogToDeleteId}`).expect(204);

    const blogsAfter = await Blog.find({});
    const titles = blogsAfter.map((blog) => blog.title);

    assert.strictEqual(blogsAfter.length, 0);
    assert.ok(!titles.includes("To Be Deleted"));
  });
});

describe("PUT /api/blogs", () => {
  test("a blog's likes can be updated", async () => {
    await Blog.deleteMany({});

    const newBlog = {
      title: "Update Test",
      author: "Updater",
      url: "http://update.com",
      likes: 0,
    };

    const postResponse = await api.post("/api/blogs").send(newBlog).expect(201);

    const blogToUpdate = postResponse.body;

    const updatedLikes = { ...blogToUpdate, likes: 42 };

    const updateResponse = await api
      .put(`/api/blogs/${blogToUpdate.id}`)
      .send(updatedLikes)
      .expect(200);

    assert.strictEqual(updateResponse.body.likes, 42);
  });
});

// Cleanup after all tests
test.after(async () => {
  await mongoose.connection.close();
});
