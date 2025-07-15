const { test, describe } = require("node:test");
const listHelper = require("../../utils/list_helper");
const assert = require("assert");

describe("most likes", () => {
  const blogs = [
    {
      _id: "1",
      title: "Clean Code",
      author: "Robert C. Martin",
      url: "http://example.com/cleancode",
      likes: 1,
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
      likes: 6,
      __v: 0,
    },
    {
      _id: "4",
      title: "The Clean Coder",
      author: "Robert C. Martin",
      url: "http://example.com/cleancoder",
      likes: 1,
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
    {
      _id: "6",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://example.com/goto",
      likes: 17,
      __v: 0,
    },
  ];

  test("returns the author with the highest total likes", () => {
    const result = listHelper.mostLikes(blogs);
    const expected = {
      author: "Martin Fowler",
      likes: 18,
    };
    assert.deepStrictEqual(result, expected);
  });

  test("returns null for empty list", () => {
    const result = listHelper.mostLikes([]);
    assert.strictEqual(result, null);
  });

  test("returns the only author when list has one blog", () => {
    const result = listHelper.mostLikes([blogs[2]]); // Martin Fowler, 7 likes
    const expected = {
      author: "Martin Fowler",
      likes: 6,
    };
    assert.deepStrictEqual(result, expected);
  });
});
