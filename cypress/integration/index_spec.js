describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  });

  it('displays the main site content', () => {
    cy.contains('Top Products').should('be.visible');
  });
});
