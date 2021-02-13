describe('Sidebar contains correct content', () => {
  beforeEach(() => {
    cy.visit('/').get('.container__body', { timeout: 8000 });
  });
  it('has the correct heading', () => {
    cy.get('[data-cy=site-title]').contains('laura norwood');
  });
  it('has correct links', () => {
    cy.get('[data-cy=sidebar-menu]').contains('bg & illustration');
    cy.get('[data-cy=sidebar-menu]').contains('visdev');
    cy.get('[data-cy=sidebar-menu]').contains('about & contact');
  });
  it('has correct icons', () => {
    cy.get('[data-cy=icon-row]').get('a.social--twitter');
    cy.get('[data-cy=icon-row]').get('a.social--instagram');
    cy.get('[data-cy=icon-row]').get('a.social--email');
    cy.get('[data-cy=icon-row]').get('[data-for=catGenerator]').get('span.social--cat');
  });
});
