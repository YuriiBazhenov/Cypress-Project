
/**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "IFrames" card
   * Validate the "Please fill out your information below" text
   */

/*
 Go to https://techglobal-training.com/frontend/
   * Click on the "IFrames" card
   * Enter "John" into the first name input box
   * Enter "Doe" into the last name input box
   * Click on the "SUBMIT" button
   * Validate the result equals "You entered: John Doe"
   */

describe('IFrames in Cypress', () => {
    it('IFrames', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.clickCard('IFrames')

        cy.get('#form_frame').its('0.contentDocument.body').find('.frame-content > #name_form > p').should('have.text', 'Please fill out your information below')

    })

    it('IFrames validate logim', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.clickCard('IFrames')

        const names = ['John', 'Doe']
        cy.get('#form_frame').its('0.contentDocument.body').find('#first_name').click().type('John')
        cy.get('#form_frame').its('0.contentDocument.body').find('#last_name').click().type('Doe')
        cy.get('#form_frame').its('0.contentDocument.body').find('div > #submit').click()
        cy.get('#result').should('have.text', 'You entered: John Doe')


    })

    it.only('IFrames validate logim', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.clickCard('IFrames')

        const names = ['John', 'Doe']
        cy.get('#form_frame').its('0.contentDocument.body').find('#first_name, #last_name').each(($el, index) => {
            cy.wrap($el).type(names[index])
        })
        cy.get('#form_frame').its('0.contentDocument.body').find('div > #submit').click()
        cy.get('#result').should('have.text', `You entered: ${names.join(' ')}`)
    })
})