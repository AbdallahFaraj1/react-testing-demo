describe('signing in', () => {
  it('sign in successfully', () => {
    cy.visit('/');

    // expect(cy.findByRole('button', { name: /sign in/i })).to.be.disabled;
    // expect(1).to.be.equal(1);
    cy.findByRole('button', { name: /sign in/i }).should('be.disabled');
    cy.findByRole('textbox', { name: /username/i }).type('abdallah');
    cy.findByLabelText(/password/i).type('12345');
    cy.findByRole('button', { name: /sign in/i }).should('be.enabled');
    cy.findByRole('button', { name: /sign in/i }).click();
    cy.findByText(/the credentials are correct/i);
  });
});
