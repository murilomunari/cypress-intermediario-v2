describe('Login', () => {
  it('successfully loads', () => {
    cy.login()
    
    cy.get('.qa-user-avatar').should('be.visible');
  });
});