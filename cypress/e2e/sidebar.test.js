describe('Sidebar contains correct content', () => {
  beforeEach(() => {
    cy.visit('/').get('.container__body', { timeout: 8000 });
  });
  it('has the correct heading', () => {
    cy.get('[data-cy=site-title]').contains('laura norwood');
  });
  it('has correct links', () => {
    cy.get('[data-cy=sidebar-menu]').contains('bg & illustration');
    cy.get('[data-cy=sidebar-menu]').contains('sketchbook');
    cy.get('[data-cy=sidebar-menu]').contains('about & contact');
  });
  it('has correct icons', () => {
    cy.get('[data-cy=icon-row]').get(
      '.centered > .social:nth-child(1) > .gatsby-image-wrapper > picture > img',
    );
    cy.get('[data-cy=icon-row]').get(
      '.centered > .social:nth-child(2) > .gatsby-image-wrapper > picture > img',
    );
    cy.get('[data-cy=icon-row]').get(
      '.centered > .social:nth-child(3) > .gatsby-image-wrapper > picture > img',
    );
    cy.get('[data-cy=icon-row]').get('[data-for=catGenerator]').get('span.social--cat');
  });
});
