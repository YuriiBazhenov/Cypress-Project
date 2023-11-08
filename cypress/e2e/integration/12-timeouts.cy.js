describe("Timeouts", () => {
    it("Explicit or Inline Timeouts", () => {
      cy.visit("https://techglobal-training.com/frontend");
      cy.clickCard("Html Elements");
  
      // cy.get('#randomName', {timeout: 8000})
  
      cy.get("#main_heading", { timeout: 10000 });
  
      cy.get('#hello_paragraph', { timeout: 10000 }).click({timeout: 7000, force: true })
  
    });
  
    /**
     * Go to https://techglobal-training.com/frontend/
     * Click on the "Waits" card
     * Click on the "Click on me to see a red box" button
     * Validate that a red box is displayed
     * 
     * npx cypress run --config defaultCommandTimeout=10000,pageLoadTimeout=20000
     */
    it('Waits Page', () => {
  
      cy.visit("https://techglobal-training.com/frontend", {timeout: 10000});
      cy.clickCard("Waits");
  
      cy.get('#red').click()
  
      cy.get('.box', {timeout: 10000}).should('be.visible')
  
    })
  });