describe('Note ', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3001/api/testing/reset');
    const user = {
      name: 'Hari Bahadur Bhandari',
      username: 'hari',
      password: 'bahadur',
    };
    cy.request('POST', 'http://localhost:3001/api/users/', user);

    cy.visit('http://localhost:5173');
  });

  it('front page can be opened', function () {
    cy.contains('Note');
    cy.contains('Username');
  });

  it('user can login and add a new note', function () {
    // Login process
    cy.get('#username').type('hari');
    cy.get('#password').type('bahadur');
    cy.contains('Login').click();

    // Verify successful login
    cy.contains('Welcome!');

    // Filter notes to show correct only
    cy.contains('🎯 Show Correct Only').click();

    // Add a new note
    cy.contains('+').click();
    // Wait for the form to appear and then type
    // cy.get('#newNote', { timeout: 5000 })
    //   .should('be.visible')
    //   .type('This is a cypress test note.');
    cy.get('#newNote').type('This is a cypress test note.');
    cy.contains('Add Note').click();

    // Verify the note was added
    cy.contains('This is a cypress test note.');
  });

  it('it can be made not important', function () {
    // Login process
    cy.get('#username').type('hari');
    cy.get('#password').type('bahadur');
    cy.contains('Login').click();

    // Verify successful login
    cy.contains('Welcome!');

    // Add a new note
    cy.contains('+').click();
    cy.get('#newNote').type('another note cypress');
    cy.contains('Add Note').click();

    cy.contains('another note cypress');
    cy.contains('✅ Correct').click();

    cy.contains('another note cypress');
    cy.contains('Incorrect');
  });

  it.only('login fails with wrong password', function () {
    cy.get('#username').type('wrongUser');
    cy.get('#password').type('wrongPassword');
    cy.contains('Login').click();

    cy.contains('wrong credentials');
  });
});
