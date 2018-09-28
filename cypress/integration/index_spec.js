describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  });

  it('displays daily deals', () => {
    cy.contains('Daily Deals');
    cy.contains('Results').should('not.exist');
  });

  it('displays search results', () => {
    cy.get('[data-testid=search]').type('4k tv{enter}');
    cy.contains('Daily Deals').should('not.exist');
    cy.contains('10 Results');
    cy.contains('4K UHD TV with HDR');
  });
});
