describe('Note ', function () {
  beforeEach(function () {
    cy.visit('http://localhost:5173');
  });

  it('front page can be opened', function () {
    cy.contains('Note');
    cy.contains('Username');
  });

  it('login form can be opened', function () {
    cy.get('#username').type('sankar');
    cy.get('#password').type('Sankar123');
    cy.contains('Login').click();
    cy.contains('React is a JavaScript library for building user interfaces');
  });
});
