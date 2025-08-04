describe("Note ", function () {
  beforeEach(function () {
    cy.request("POST", "http://localhost:3002/api/testing/reset");
    const user = {
      name: "Hari Bahadur Bhandari",
      username: "hari",
      password: "bahadur",
    };
    cy.request("POST", "http://localhost:3002/api/users/", user);

    // Add retry logic and longer timeout for the visit
    cy.visit("/", { timeout: 10000 });

    // Debug: Log the current URL
    cy.url().then((url) => {
      cy.log("Current URL:", url);
    });
  });

  it("Login Form is shown", function () {
    // Wait for the page to be fully loaded
    cy.get("body").should("be.visible");
    cy.contains("Welcome to BlogHub");
    cy.contains("Username");
    cy.contains("Password");
  });

  describe("Login", function () {
    it("succeeds with correct credentials", function () {
      cy.get("#username").type("hari");
      cy.get("#password").type("bahadur");
      cy.contains("Sign In").click();

      // Verify successful login
      cy.contains("Welcome, Hari Bahadur");
    });

    it("fails with wrong credentials", function () {
      cy.get("#username").type("Madan");
      cy.get("#password").type("bahadur");
      cy.contains("Sign In").click();
      // Verify login failed
      cy.get("#error").should("contain", "invalid username or password");
      // .and("have.css", "color", "#fca5a5")
      // .and("have.css", "border-style", "solid");
    });
  });

  describe("When logged in", function () {
    beforeEach(function () {
      cy.get("#username").type("hari");
      cy.get("#password").type("bahadur");
      cy.contains("Sign In").click();
    });

    it("shows empty blog list initially", function () {
      // Since database is reset, there should be no blogs initially
      cy.contains("No blogs yet").should("be.visible");
    });

    it("A blog can be created", function () {
      cy.contains("Create New Blog").click();
      cy.get("#title").type("New Title");
      cy.get("#author").type("New Author");
      cy.get("#url").type("www.newblog.com");
      cy.get("#createBlog").click();

      // Also check if we can see the blog count
      cy.contains("1 blog post found").should("be.visible");

      cy.contains("New Title").should("be.visible");

      // Click "view" to expand the blog details and see author and URL
      cy.contains("view").click();

      // Now the author and URL should be visible
      cy.contains("New Author").should("be.visible");
      cy.contains("Read Blog").should("be.visible");
      cy.contains("hide").should("be.visible");
    });

    it("A blog can be liked", function () {
      // First create a blog
      cy.contains("Create New Blog").click();
      cy.get("#title").type("Likeable Blog");
      cy.get("#author").type("Test Author");
      cy.get("#url").type("www.testblog.com");
      cy.get("#createBlog").click();

      // Wait for the blog to appear
      cy.contains("Likeable Blog").should("be.visible");

      // Click "view" to expand the blog details
      cy.contains("view").click();

      // Check initial likes count (should be 0)
      cy.contains("0").should("be.visible");

      // Click the like button (heart icon)
      cy.get('[class*="likeButton"]').click();

      // Wait for the likes count to update to 1
      cy.contains("1").should("be.visible");
    });

    it("A blog can be deleted by its creator", function () {
      // First create a blog
      cy.contains("Create New Blog").click();
      cy.get("#title").type("Deletable Blog");
      cy.get("#author").type("Test Author");
      cy.get("#url").type("www.deletableblog.com");
      cy.get("#createBlog").click();

      // Wait for the blog to appear
      cy.contains("Deletable Blog").should("be.visible");

      // Click "view" to expand the blog details
      cy.contains("view").click();

      // Check that the delete button is visible (since we're the creator)
      cy.get('[class*="deleteButton"]').should("be.visible");

      // Click the delete button
      cy.get('[class*="deleteButton"]').click();

      // Confirm the deletion in the confirmation dialog
      cy.on("window:confirm", () => true);

      // Wait for the blog to be removed from the list
      cy.contains("Deletable Blog").should("not.exist");

      // Verify the blog count is back to 0
      cy.contains("No blogs yet").should("be.visible");
    });

    it("Only the creator can delete a blog", function () {
      // First create a blog as the current user (hari)
      cy.contains("Create New Blog").click();
      cy.get("#title").type("Shared Blog");
      cy.get("#author").type("Hari Author");
      cy.get("#url").type("www.sharedblog.com");
      cy.get("#createBlog").click();

      // Wait for the blog to appear
      cy.contains("Shared Blog").should("be.visible");

      // Click "view" to expand the blog details
      cy.contains("view").click();

      // Check that the delete button is visible for the creator
      cy.get('[class*="deleteButton"]').should("be.visible");

      // Logout the current user
      cy.contains("Logout").click();

      // Create a second user
      const secondUser = {
        name: "Second User",
        username: "seconduser",
        password: "password123",
      };
      cy.request("POST", "http://localhost:3002/api/users/", secondUser);

      // Login as the second user
      cy.get("#username").type("seconduser");
      cy.get("#password").type("password123");
      cy.contains("Sign In").click();

      // Verify successful login
      cy.contains("Welcome, Second User");

      // The blog should still be visible (blogs are visible to all users)
      cy.contains("Shared Blog").should("be.visible");

      // Click "view" to expand the blog details
      cy.contains("view").click();

      // Check that the delete button is NOT visible for non-creator
      cy.get('[class*="deleteButton"]').should("not.exist");

      // Verify that the blog details are still visible (author, likes, etc.)
      cy.contains("Hari Author").should("be.visible");
      cy.contains("0").should("be.visible"); // likes count
    });

    it.only("blogs are arranged in order of likes, with the blog with the most likes first", function () {
      // Create multiple blogs with different like counts
      cy.contains("Create New Blog").click();
      cy.get("#title").type("Blog with 2 likes");
      cy.get("#author").type("Author 1");
      cy.get("#url").type("www.blog1.com");
      cy.get("#createBlog").click();

      cy.contains("Create New Blog").click();
      cy.get("#title").type("Blog with 5 likes");
      cy.get("#author").type("Author 2");
      cy.get("#url").type("www.blog2.com");
      cy.get("#createBlog").click();

      cy.contains("Create New Blog").click();
      cy.get("#title").type("Blog with 1 like");
      cy.get("#author").type("Author 3");
      cy.get("#url").type("www.blog3.com");
      cy.get("#createBlog").click();

      // Wait for all blogs to appear
      cy.contains("Blog with 2 likes").should("be.visible");
      cy.contains("Blog with 5 likes").should("be.visible");
      cy.contains("Blog with 1 like").should("be.visible");

      // Like the blogs to create different like counts
      // First blog: 2 likes
      cy.contains("Blog with 2 likes").parent().contains("view").click();
      cy.get('[class*="likeButton"]').first().click();
      cy.get('[class*="likeButton"]').first().click();
      cy.contains("hide").click();

      // Second blog: 5 likes
      cy.contains("Blog with 5 likes").parent().contains("view").click();
      cy.get('[class*="likeButton"]').first().click();
      cy.get('[class*="likeButton"]').first().click();
      cy.get('[class*="likeButton"]').first().click();
      cy.get('[class*="likeButton"]').first().click();
      cy.get('[class*="likeButton"]').first().click();

      // Third blog: 1 like
      cy.contains("Blog with 1 like").parent().contains("view").click();
      cy.get('[class*="likeButton"]').first().click();
      cy.contains("hide").click();

      // Now check the order: most likes first
      cy.get(".blog").eq(0).should("contain", "Blog with 5 likes");
      cy.get(".blog").eq(1).should("contain", "Blog with 2 likes");
      cy.get(".blog").eq(2).should("contain", "Blog with 1 like");
    });
  });
});
