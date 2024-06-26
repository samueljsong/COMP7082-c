describe('Login Page', () => {
    // Create a before each to redirect to visit base_url, unauthenticated should redirect back
    const base_url = Cypress.env("CYPRESS_BASE_URL")

    it('successfull routes to login page', () => {
        cy.visit(base_url + '/login');

        cy.url().should('eq', base_url + '/login')
      });

    it('successfully logs in the admin user', () => {
      const base_url = Cypress.env("CYPRESS_BASE_URL")
      const email = Cypress.env("CYPRESS_ADMIN_EMAIL");
      const password = Cypress.env("CYPRESS_ADMIN_PASSWORD")
      cy.visit(base_url + '/login');
      cy.url().should('eq', base_url + '/login')
  
      cy.get('input[name="email"]').type(email);
      cy.get('input[name="password"]').type(password);
  
      cy.get('button.lp-button').click();
  
      cy.url().should('eq', base_url + '/');
      cy.get('div[name="dropdown"]').click();
      cy.get('button[name="adminButton"]').should('exist');
    });
    
  });
  
