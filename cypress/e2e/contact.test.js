describe('Contact form displays correctly', () => {
  beforeEach(() => {
    cy.visit('/about').get('.container__body', { timeout: 8000 });
  });
  it('has the correct fields', () => {
    cy.get('[data-cy=contact-form]').as('form');
    cy.get('form').contains('Name');
    cy.get('form').contains('Email');
    cy.get('form').contains('Message');
  });
  it('can type in the fields', () => {
    cy.get('[data-cy=input-name]').type('Johnny Appleseed');
    cy.get('[data-cy=input-email]').type('johnny@example.com');
    cy.get('[data-cy=input-message]').type('This is a message from Cypress');
  });
});
