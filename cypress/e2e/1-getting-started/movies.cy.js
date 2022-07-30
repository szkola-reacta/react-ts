describe('Movies app', () => {
  it('should go to contact page', () => {
    cy.visit('http://localhost:3000');

    cy.get('nav a').first().should('have.text', 'News');
    cy.get('nav a').last().should('have.text', 'Contact');

    cy.get('nav a').last().click();

    cy.get('#name').type('Patryk');
    cy.get('#email').type('patryk.omiotek@gmail.com');

    cy.get('button').click();

    cy.get('.message').should('have.text', 'E-mail sent: Patryk, patryk.omiotek@gmail.com');
  });
});
