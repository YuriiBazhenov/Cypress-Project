
/*
* 1. Go to https://techglobal-training.com/frontend
* 2. Navigate to 'Html Elements' card
* 3. From the "Text Inputs" section
* 4. Validate text input 1 and text input 2 is enabled
* 5. Validate text input 1 and text input 2 is is not required
* 6. Enter your name and last name
*/
describe('Practices', () => {

it('Assertions practices', () => {
    cy.visit('https://techglobal-training.com/frontend')
        cy.clickCard('Html Elements')

        cy.contains('Text Inputs').parent().find('input').as('textInputs')

        const names = ['Tech', 'Global']
        cy.get('@textInputs').each(($el, index) => {
            cy.wrap($el).type(names[index]).should('be.enabled').and('not.have.attr', 'required')
        })

    /**
     * 1. Go to https://techglobal-training.com/frontend
     * 2. Navigate to 'Html Elements' card
     * 3. From the "Date Inputs" section
     * 4. Validate date input 1 and date input 2 is enabled
     * 5. Validate date input 1 and date input 2 is is not required
     * 6. Enter dates for both date input 1 and date input 2
     * 7. Validate value is changed to given dates.
     */

    cy.visit('https://techglobal-training.com/frontend')
    cy.clickCard('Html Elements')
    cy.contains('Date Inputs').parent().find('input').as('Inputs')

    const dates = ["11/11/1990", "11/11/1990"]
    cy.get('@Inputs').each(($el, index) => {
        cy.wrap($el).clear().type(`${dates[index]}{enter}`).should('be.enabled').and('not.have.attr', 'required')
        cy.wrap($el).should('have.attr', 'value', dates[index])
    })


    /**
     * 1. Go to https://techglobal-training.com/frontend
     * 2. Navigate to 'Html Elements' card
     * 3. From the "Dropdowns" section
     * 4. Validate dropdown 1 and dropdown 2 is enabled
     * 6. Enter Microsoft for dropdown 1 and Apple for dropdown 2
     * 7. Validate options are selected
     */


    cy.visit('https://techglobal-training.com/frontend')
    cy.clickCard('Html Elements')

    cy.contains('Dropdowns').parent().find('select').as('Dropdowns')
    const select = ['Microsoft', 'Apple']
    cy.get('@Dropdowns').each(($el, index) => {
        cy.wrap($el).should('be.enabled').select(select[index])
        cy.wrap($el).find('option:selected').should('have.attr', 'value', select[index])
    })

})
})




cy.get('.control > .radio').children()