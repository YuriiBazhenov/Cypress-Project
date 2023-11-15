


describe("Homework", () => {

    it("Test Case 01 - Validate the Contact Us information", () => {
      cy.visit("https://techglobal-training.com/frontend/project-3");
  
      
        cy.get('.radio > input').each((el) => {
            cy.wrap(el).should('be.enabled').and('be.visible')
        })
        cy.get('.radio > input').eq(0).should('be.checked')
        cy.get('.radio > input').eq(1).should('not.be.checked')


        cy.get('.field > label').next().each((el) => {
            cy.wrap(el).should('be.visible')      
    })
    /*
    #static_table tbody  > tr:nth-child(2) > td
    */
    cy.contains('Number of passengers').next()
})
})