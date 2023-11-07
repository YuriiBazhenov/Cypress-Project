/// <reference types="cypress" />

describe("Alerts", () => {
    /**
     * WARNING ALERT
     * 1. Go to https://techglobal-training.com/frontend/
     * 2. Click on the "Alerts" card
     * 3. Click on the "Warning alert" button
     * 4. Validate the alert text equals "You are on TechGlobal Training application."
     * 5. Click on the "OK" button on the alert
     * 6. Validate the result message equals "You accepted warning by clicking OK."
     */
  
    it("Handling the Warning Alerts", () => {
      cy.visit("https://techglobal-training.com/frontend");
  
      cy.clickCard("Alerts");
  
      cy.on("window:alert", (str) => {
        console.log("My warning alert text content is :" + str);
        expect(str).to.equal('You are on TechGlobal Training application.')
      });
  
      cy.get("#warning_alert").click();
  
  
      cy.get('#action').should('have.text', 'You accepted warning by clicking OK.')
  
    });
  
    /**
     * CONFIRMATION ALERT
     * 1. Go to https://techglobal-training.com/frontend/
     * 2. Click on the "Alerts" card
     * 3. Click on the "Confirmation alert" button
     * 4. Validate the alert text equals "Would you like to stay on TechGlobal Training application?"
     * 5. Click on the "Cancel" button on the alert
     * 6. Validate the result message equals "You rejected the alert by clicking Cancel."
     */
  
    it('Handling the Confirmation Alert', () => {
  
      cy.visit("https://techglobal-training.com/frontend");
  
      cy.clickCard("Alerts");
  
  
      cy.get("#confirmation_alert").click();
  
      cy.once('window:confirm', (str) => {
          console.log(str)
          expect(str).to.equal('Would you like to stay on TechGlobal Training application?')
          return false
      })
  
      cy.get('#action').should('have.text', 'You rejected the alert by clicking Cancel.')
  
  
      cy.get("#confirmation_alert").click();
  
      cy.get('#action').should('have.text', 'You confirmed the alert by clicking OK.')
    })
  
  
    it('Handling alerts - Prompt alert', () => {
  
      cy.visit("https://techglobal-training.com/frontend");
  
      cy.clickCard("Alerts");
  
  
      // Clicking the "Cancel" in prompt Alert
      // cy.window().then((win) => {
      //   cy.stub(win, 'prompt').returns(null)
      // })
  
      //Another way of Clicking the "Cancel" in prompt Alert
      // cy.window().then((win) => {
      //   cy.stub(win, 'prompt')
  
      //   return false
      // })
  
      // Clicking the "Okay" by entering text in prompt Alert
      // cy.window().then((win) => {
      //   cy.stub(win, 'prompt').returns('TechGlobal my Text here')
      // })
  
  
      cy.window().then((win) => {
        cy.stub(win, 'prompt').callsFake((message) => {
          console.log(message)
          return message
        })
      })
  
      cy.get('#prompt_alert').click()
  
  
    })
  });