describe ('Heading test', () => {
    it('contains the correct title', () => {
        cy.visit('http://localhost:3000/example-1');

        cy.get('h1')
            .invoke('text')
            .should('equal', 'Follow me @anishmoktan !')
    });
});