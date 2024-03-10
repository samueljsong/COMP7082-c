describe('A user creates a report', () => { 
    it('successfully creates a report', () => {
        const base_url = Cypress.env("CYPRESS_BASE_URL");
        cy.loginAdmin();
        cy.visit(base_url + "/AdminDashboard")
        cy.get('button[key="19"]').click();
        cy.get('ul.user-list').first().click();

        cy.get('select[name="status"]').select('4');
        cy.get('button[name="submit"]').click();
        cy.wait(500);
        
        cy.reload();

        cy.get('ul.user-list').first().click();
        cy.get('select[name="status"]').should('have.value', '4');
    });
})