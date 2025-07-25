// BlogForm.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BlogForm from "./BlogForm"; // Adjust the import if the path is different

describe("BlogForm", () => {
  test("calls createBlog with correct data when form is submitted", async () => {
    const user = userEvent.setup();
    const mockCreateBlog = jest.fn();

    render(<BlogForm createBlog={mockCreateBlog} />);

    // Fill out the form fields
    const titleInput = screen.getByLabelText(/title/i);
    const authorInput = screen.getByLabelText(/author/i);
    const urlInput = screen.getByLabelText(/url/i);

    await user.type(titleInput, "Testing React Forms");
    await user.type(authorInput, "Sankar");
    await user.type(urlInput, "https://example.com");

    // Submit the form
    const submitButton = screen.getByRole("button", { name: /create blog/i });
    await user.click(submitButton);

    // Assert that the createBlog was called once
    expect(mockCreateBlog).toHaveBeenCalledTimes(1);

    // Assert that the correct blog object was passed
    expect(mockCreateBlog).toHaveBeenCalledWith({
      title: "Testing React Forms",
      author: "Sankar",
      url: "https://example.com",
      likes: 0,
    });
  });

  test("uses default URL when URL input is empty", async () => {
    const user = userEvent.setup();
    const mockCreateBlog = jest.fn();

    render(<BlogForm createBlog={mockCreateBlog} />);

    // Fill title and author, leave URL empty
    await user.type(screen.getByLabelText(/title/i), "Blog without URL");
    await user.type(screen.getByLabelText(/author/i), "Authorless");

    const submitButton = screen.getByRole("button", { name: /create blog/i });
    await user.click(submitButton);

    expect(mockCreateBlog).toHaveBeenCalledWith({
      title: "Blog without URL",
      author: "Authorless",
      url: "https://www.google.com", // default fallback
      likes: 0,
    });
  });
});
