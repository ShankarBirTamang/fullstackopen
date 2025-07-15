const { test, describe } = require("node:test");
const listHelper = require("../../utils/list_helper");
const assert = require("assert");

describe("most blogs", () => {
  const blogs = [
    {
      _id: "1",
      title: "Clean Code",
      author: "Robert C. Martin",
      url: "http://example.com/cleancode",
      likes: 10,
      __v: 0,
    },
    {
      _id: "2",
      title: "Agile Principles",
      author: "Robert C. Martin",
      url: "http://example.com/agile",
      likes: 5,
      __v: 0,
    },
    {
      _id: "3",
      title: "Refactoring",
      author: "Martin Fowler",
      url: "http://example.com/refactoring",
      likes: 7,
      __v: 0,
    },
    {
      _id: "4",
      title: "The Clean Coder",
      author: "Robert C. Martin",
      url: "http://example.com/cleancoder",
      likes: 4,
      __v: 0,
    },
    {
      _id: "5",
      title: "Patterns of Enterprise Application Architecture",
      author: "Martin Fowler",
      url: "http://example.com/patterns",
      likes: 12,
      __v: 0,
    },
  ];

  test("returns the author with the most blogs", () => {
    const result = listHelper.mostBlogs(blogs);
    const expected = {
      author: "Robert C. Martin",
      blogs: 3,
    };
    assert.deepStrictEqual(result, expected);
  });

  test("returns null for empty list", () => {
    const result = listHelper.mostBlogs([]);
    assert.strictEqual(result, null);
  });

  test("returns the only author when list has one blog", () => {
    const result = listHelper.mostBlogs([blogs[2]]); // Martin Fowler
    const expected = {
      author: "Martin Fowler",
      blogs: 1,
    };
    assert.deepStrictEqual(result, expected);
  });
});
