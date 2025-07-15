const { test, describe } = require("node:test");
const listHelper = require("../../utils/list_helper"); // adjust path if needed
const assert = require("assert");

describe("favorite blog", () => {
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
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      url: "http://example.com/pragmatic",
      likes: 15,
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
  ];

  test("returns the blog with the most likes", () => {
    const result = listHelper.favoriteBlog(blogs);
    assert.deepStrictEqual(result, blogs[1]); // The one with 15 likes
  });

  test("returns null when blog list is empty", () => {
    const result = listHelper.favoriteBlog([]);
    assert.strictEqual(result, null);
  });

  test("returns the only blog when list has one item", () => {
    const single = [blogs[0]];
    const result = listHelper.favoriteBlog(single);
    assert.deepStrictEqual(result, blogs[0]);
  });
});
