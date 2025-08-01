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

    it.only("A blog can be liked", function () {
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
  });
});
