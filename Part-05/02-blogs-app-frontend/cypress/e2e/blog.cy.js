describe("Note ", function () {
  beforeEach(function () {
    // cy.request("POST", "http://localhost:3001/api/testing/reset");
    // const user = {
    //   name: "Hari Bahadur Bhandari",
    //   username: "hari",
    //   password: "bahadur",
    // };
    // cy.request("POST", "http://localhost:3001/api/users/", user);

    cy.visit("http://localhost:5173");
  });

  it("front page can be opened", function () {
    cy.contains("Welcome to BlogHub");
    cy.contains("Username");
    cy.contains("Password");
  });
});
