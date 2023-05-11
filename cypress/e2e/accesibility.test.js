describe('Accesibility tests', () => {
    beforeEach(() => {
        cy.visit('/').get('main');
        cy.injectAxe();
    });

    it('Has no detectable accesibility violations on load', () => {
        cy.checkA11y();
    });
});
