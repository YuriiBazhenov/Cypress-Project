describe('CSS Locators', () => {

   beforeEach(() => {

        cy.visit('https://techglobal-training.com/frontend/html-elements')

        cy.get('button')

        cy.get('h3')

        cy.get('li')

        cy.get('input')
    })


    it('Understanding CSS Syntax - Locating using class and id', () => {

       

        cy.get('#hello_paragraph')
        cy.get('#testing_paragraph')
>
        cy.get('#microsoft_check')
    })

    it('Understanding CSS Syntax - Locating web elements with its multiple attributes', () => {

   

        cy.get('button.is-inline')
        cy.get('label.is-inline')

        cy.get('div#checkbox-button-group')
    })


    it('Understanding CSS Syntax - Locating child, descendant, adjacent web elements', () => {

    

        /**
         * Child Selector (>) *
         * Description: Targets direct children of a specified parent element.
         */

        cy.get('div > #hello_paragraph')
        cy.get('div > #testing_paragraph')

        cy.get('.is-flex > h3')

        cy.get('#radio-button-group > h3')

        cy.get('#radio-button-group > div > label > #radio_1_option_1')


        /**
         * Descendant Selector (>) *
         * Description: Targets elements nested anywhere within a specific parent.
         */

        cy.get('#checkbox-button-group #microsoft_check')

        cy.get('#root #ordered_list_item1')

        

        // Locates immediate sibling of h3
        cy.get('#checkbox-button-group > h3 ~ div')

        // Locates all immediate siblings of h3
        cy.get('#checkbox-button-group > h3 + div')



        cy.get('button, input')
        cy.get('li, p')

        cy.get('#apple_check, #java_radio')

        cy.get('#checkbox-button-group > div #checkbox_1, label')
    })

    it('Understanding CSS Syntax - Attribute locators', () => {


        cy.get('[class="radio"] > input')

        cy.get('[class="radio"] input')


    })

     /**
     * TEST CASE 1
     * Go to https://techglobal-training.com/frontend/dynamic-elements
     * Locate the below box is displayed
     * Box 1
     * 
     * TEST CASE 2
     * Go to https://techglobal-training.com/frontend/dynamic-elements
     * Locate the below box is displayed
     * Box 2
     */

    it('Dynamic elements test case', () => {


        /**]
         * => [class*="className"] (contains)
         * => ^ (starts-with)
         * => $ (ends-with)
         */


        cy.get('[id^="box_1_"]').should('be.visible')
        cy.get('[id^="box_2_"]').should('be.visible')
        
    })



    it('CSS Locators - Pseudo-classes', () => {



        cy.get('#ordered_list li')

        cy.get('#ordered_list li:last-child')
        cy.get('#ordered_list li:first-child')


        // cy.visit('https://techglobal-training.com/js-exercises/js-output')
        // cy.get('.explanation.content > p + ul > li:first-child')
        
    })
})





















