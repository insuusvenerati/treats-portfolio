describe('Basic tests', () => {
  beforeEach(() => {
    cy.visit('/').get('.container__body', { timeout: 8000 });
  });
  it('loads the home page', () => {
    cy.visit('/');
  });
});
