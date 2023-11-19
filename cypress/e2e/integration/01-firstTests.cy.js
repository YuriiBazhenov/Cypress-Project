
/// <reference types="cypress" />
// This is describe test block that holds group of tests
describe('My First Test', () => {

    // This is individual test block
    it('Visit TechGlobal training app home page', () => {

        // Visits the web page
        cy.visit('https://techglobal-training.com/')

        // cy.reload()

        // cy.visit('https://techglobal-training.com/frontend')

        // // Navigate back on the web page
        // // cy.go('back')
        // cy.go(-1)


        // // cy.go('forward')
        // cy.go(1)

        // cy.go(-1)


        // Title validation of web page
        cy.title().should('eq', 'Techglobal Training | Home')


        // URL validation of web page
        cy.url().should('eq', 'https://techglobal-training.com/')
        cy.url().should('contain', 'techglobal-training')

    })


    it('My First Test', () => {
        expect(true).to.equal(true)
    })

    it('Logo', () => {
        cy.visit('https://techglobal-training.com/')

        cy.get('#logo').click()
        cy.get('#logo').should('be.visible')
    })
})


