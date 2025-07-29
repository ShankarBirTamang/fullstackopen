describe('Note ', function () {
  beforeEach(function () {
    cy.visit('http://localhost:5173');
  });

  it('front page can be opened', function () {
    cy.contains('Note');
    cy.contains('Username');
  });

  it('user can login and add a new note', function () {
    // Login process
    cy.get('#username').type('sankar');
    cy.get('#password').type('Sankar123');
    cy.contains('Login').click();

    // Verify successful login
    cy.contains('React is a JavaScript library for building user interfaces');

    // Filter notes to show correct only
    cy.contains('🎯 Show Correct Only').click();

    // Add a new note
    cy.contains('+').click();
    // Wait for the form to appear and then type
    cy.get('#newNote', { timeout: 5000 })
      .should('be.visible')
      .type('This is a cypress test note.');
    cy.contains('Add Note').click();

    // Verify the note was added
    cy.contains('This is a cypress test note.');
  });
});
