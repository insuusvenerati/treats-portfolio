describe('Navigates using links correctly', () => {
  beforeEach(() => {
    cy.visit('/').get('.container__body', { timeout: 8000 });
  });
  it('navigates to the visdev page', () => {
    cy.get('a').contains('visdev').click();
    cy.url().should('include', '/visdev');
  });
  it('navigates to the about page', () => {
    cy.get('a').contains('about & contact').click();
    cy.url().should('include', '/about');
  });
});
