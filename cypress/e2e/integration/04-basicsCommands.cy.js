/// <reference types="cypress" />

describe('Cypress actions', () => {

    it('Click Action', () => {

        cy.visit('https://techglobal-training.com/frontend')

        cy.get('.cards').contains('Html Elements').click()

        // cy.get("#register_button").click()

        // cy.get('.mt-1').should('have.text', 'You clicked on “Register”')

        // cy.get("#signin_button").click()

        // cy.get('.mt-1').should('have.text', 'You clicked on “Sign in”')

        cy.get('#register_button').click()
        .next()
        .next()
        .should('have.text', 'You clicked on “Register”')
        .prev()
        .click()
        .next()
        .should('have.text', 'You clicked on “Sign in”')
    })

    it('Checkbox & Radio buttons', () => {

        cy.visit('https://techglobal-training.com/frontend')

        cy.get('.cards').contains('Html Elements').click()

        // This assertion will not work, because "#apple_check" targets <label> web element
        // and this element is not the input itself, and its not possible to get input information from it.
        // cy.get('#apple_check').click().should('be.checked')

        // NOTE: THIS WILL NOT WORK!

        /**
         * cy.check() can only be called on :checkbox and :radio. 
         * OUR subject is a: <label id="apple_check" class="checkbox">...</label>
         */
        // cy.get('#apple_check').check()

        /**
         * 1. Check on the Apple checkbox button
         * 2. Then Validate its checked
         * 3. Uncheck the Apple checkbox button
         * 4. Validate its unchecked.
         */

        cy.get('#checkbox_1').check().should('be.checked').uncheck().should('not.be.checked')


        /**
         * 1. Locate the "Java" radio button, and validate its not checked
         * 2. Select Java radio button
         * 3. Validate it's checked
         */

        cy.get('#radio_1_option_1').should('not.be.checked')
        .check().should('be.checked')
    })


    it('Text input', () => {

        cy.visit('https://techglobal-training.com/frontend')

        cy.get('.cards').contains('Html Elements').click()


        // .type('TechGlobal')
        // .clear()

        /**
         * 1. Locate the text inputs, and send text inside, and clear it.
         */

        cy.get('#text_input1').type('Hi').clear()

        cy.get('#text_input2').type('Hi').clear()
    })



    it('Calender input', () => {

        cy.visit('https://techglobal-training.com/frontend')

        cy.get('.cards').contains('Html Elements').click()

        cy.get("#date_input1").type("11/11/1990{enter}")

        cy.get("#date_input2").clear().type("02/20/1987{esc}")
    })

    it('Dropdown input', () => {

        cy.visit('https://techglobal-training.com/frontend')

        cy.get('.cards').contains('Html Elements').click()

        cy.get('#company_dropdown1').select('Microsoft')

        cy.get('#company_dropdown2').select('Tesla')


    })
})
