/// <reference types="cypress" />

describe('Cypress Selectors', () => { 

    it('Practice Web Eelements using - get and contains', () => {

        cy.visit('https://techglobal-training.com/frontend')

        // as() works as alias and assigns the locator to the name you defined
        cy.get('.CardGrids_CardGrids__qDdyI').as('allCards')

        cy.get('@allCards')

        cy.get('.cards')

        // Returns the first element from multiple web elements
        cy.get('.cards').first()

        // Returns the last element from multiple web elements
        cy.get('.cards').last()

        // Returns the web element by its index
        cy.get('.cards').eq(8)

        // Locates the web element by its VISUAL text on the UI
        cy.contains('Html Elements')

        // This one tries to find element with "Html Elements" visual text inside the web elements with .class attribute 
        cy.contains('.cards','Html Elements')

        // This will do the same thing as above locator in more explicit way
        // It will look for card with 'Html elements' visible text ONLY inside the class name '.CardGrids_CardGrids__qDdyI'.
        cy.get('@allCards').contains('Html Elements')

    })

    it('Practice Web Eelements using - find()', () => {

        cy.visit('https://techglobal-training.com/frontend')

        cy.contains('.cards','Html Elements').click()
        
        // When we do this, we try to locate web element with "Paragraphs" text inside the div container
        cy.get('div').contains('Paragraphs')

        cy.get('#radio-button-group').find('div')


        cy.get('#radio-button-group div')

    })

    it.only('Practice Web Eelements using - next(), prev(), nextAll(), prevAll()', () => {

        cy.visit('https://techglobal-training.com/frontend')

        cy.contains('.cards','Html Elements').click()
        
        // next()  => locates the immediate next sibling of a web element
        cy.get('div').contains('Paragraphs').next()

        // nextAll()  => this will locate ALL next immediate siblings
        cy.get('div').contains('Paragraphs').nextAll()


        
    })
 })

