describe('Regular User redirecting to Create and View pages', () => {
    const base_url = Cypress.env("CYPRESS_BASE_URL")

    
    beforeEach(() => {
        cy.loginRegular();
    })


    it('successfully redirects to view page', () => {
        cy.get('div[name="view"]').click();

        cy.url().should('include', '/view-reports');
    });

    it('successfully redirects to create report page', () => {    
        cy.get('button[name="create"]').click();

        cy.url().should('include', '/create');
        });

    afterEach(() => {
        cy.go('back');
        cy.url().should('eq', base_url + '/')
    })    
});
