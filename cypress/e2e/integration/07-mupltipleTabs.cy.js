describe("Interacting Multiple tabs,", () => {

    it("Multiple tabs", () => {
      cy.visit("https://techglobal-training.com/frontend");
  
      cy.clickCard("Multiple Windows");
  
      cy.get("#microsoft").should("have.attr", "target", "_blank");
  
      cy.get("#apple").invoke("removeAttr", "target").click();
  
      cy.go(-1);
    });
  
    /**
     * Go to https://techglobal-training.com/frontend/
     * Click on the "Multiple Windows" card
     * Click on the "Apple" link
     * Validate that the child window title is "Apple"
     * Navigate back to main page
     * Validate title contains "techglobal"
     */
  
    it('Multi Tabs - TEST 1', () => {
  
      cy.visit("https://techglobal-training.com/frontend");
  
      cy.clickCard("Multiple Windows");
  
      cy.get("#microsoft").should("have.attr", "target", "_blank");
  
      cy.get("#apple").invoke("removeAttr", "target").click();
  
      cy.title().should('eq', 'Apple')
  
      cy.go(-1);
  
      cy.title().then((el) => {
          expect(el.toLowerCase()).to.contain('techglobal')
      })
  
    })
  });