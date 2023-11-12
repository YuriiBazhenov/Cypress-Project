/// <reference types="cypress" />

describe("Custom Commands", () => {
    it("Parent Command", () => {
      cy.visit(`${Cypress.env("SITE_URL")}/frontend`);
      cy.clickCard("Html Elements");
  
      cy.login("Tech", "Global");
  
      cy.selectDropdownOption("#company_dropdown1", "Apple");
      cy.selectDropdownOption("#company_dropdown2", "Microsoft");
    });
  
    it("Child Command", () => {
      cy.visit(`${Cypress.env("SITE_URL")}/frontend`);
      cy.clickCard("Html Elements");
  
      cy.get("#main_heading").then(($el) => {
        cy.log($el.text());
      });
  
      cy.get("#main_heading").logText().haveText("Html Elements");
  
      cy.get("#main_heading").assertAttribute("id", "main_heading");
  
      cy.haveText2("#main_heading", "Html Elements");
    });
  
    it.only("Project", () => {
      cy.visit("https://techglobal-training.netlify.app/frontend/project-1");
  
      /**
       * Validate the options are “Female”, “Male” and “Prefer not to disclose”
       * Click on the “Male” option and validate it is selected while the others are not selected
       * Click on the “Female” option and validate it is selected while the others are not selected
       */
  
      const expectedText = ["Male", "Female", "Prefer not to disclose"];
  
      cy.get(".control > .radio").each(($el, index) => {
        cy.wrap($el).should("have.text", expectedText[index]);
      });
  
      // cy.contains('Male').find('input').check().should('be.checked')
      // cy.contains('Female').find('input').should('not.be.checked')
      // cy.contains('Prefer not to disclose').find('input').should('not.be.checked')
  
      // cy.contains('Female').find('input').check().should('be.checked')
      // cy.contains('Male').find('input').should('not.be.checked')
      // cy.contains('Prefer not to disclose').find('input').should('not.be.checked')
  
      cy.checkOptionValidateOthers("Male", expectedText);
      cy.checkOptionValidateOthers("Female", expectedText);
      
    });
  });