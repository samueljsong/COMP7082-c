describe('Check text inputs', () => {
    const base_url = Cypress.env("CYPRESS_BASE_URL")
    // Create a before each to redirect to visit base_url, unauthenticated should redirect back
  
    it('type inside the login page', () => {
      cy.visit(base_url);
      const email = Cypress.env("CYPRESS_REGULAR_EMAIL");
      const password = Cypress.env("CYPRESS_REGULAR_PASSWORD")
  
      cy.get('input[name="email"]').type(email);
      cy.get('input[name="email"]').should('have.value', email)

      cy.get('input[name="password"]').type(password);
      cy.get('input[name="password"]').should('have.value', password)
      cy.get('input[name="password"]').should('have.attr', 'type', 'password')

    });
    
    // * Add other tests for text input here
    
  });
  