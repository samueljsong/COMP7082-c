describe('Login Page', () => {
    const base_url = "https://bcrepit.netlify.app" //Cypress.env("CYPRESS_BASE_URL")
    const adminPassword = "1234" //Cypress.env("CYPRESS_ADMIN_PASSWORD")

    beforeEach(() => {
        cy.visit(base_url + '/login');
    });

    it('displays error message for email with maximum length and valid password', () => {
        const maxLengthEmail = 'a'.repeat(64) + '@bcit.ca';

        cy.get('input[name="email"]').type(maxLengthEmail);
        cy.get('input[name="password"]').type(adminPassword);

        cy.get('button.lp-button').click();

        cy.url().should('eq', base_url + '/login');
        cy.wait(500)
        cy.get('div.Toastify').children().should('have.length', 1);
    });
});
