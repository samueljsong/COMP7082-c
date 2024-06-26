describe('Login Page', () => {
    const base_url = Cypress.env("CYPRESS_BASE_URL")
    const email = Cypress.env("CYPRESS_ADMIN_EMAIL");

    beforeEach(() => {
        cy.visit(base_url + '/login');
    });

    it('logs in with valid email and password of maximum length', () => {

        const maxLengthPassword = 'a'.repeat(50);

        cy.get('input[name="email"]').type(email);
        cy.get('input[name="password"]').type(maxLengthPassword);

        cy.get('button.lp-button').click();

        cy.url().should('eq', base_url + '/login');
        cy.get('div.Toastify').children().should('have.length', 1);
    });
});
