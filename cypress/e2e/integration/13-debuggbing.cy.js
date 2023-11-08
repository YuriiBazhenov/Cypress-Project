describe('Debugging', () => {

    it('cy.wait() - Hard Wait', () => {

        cy.visit("https://techglobal-training.com/frontend");
        cy.clickCard("Html Elements");

        // cy.wait(10000)

        cy.get('#checkbox_1').check()
    })

    it('Debugging using pause', () => {

        cy.visit("https://techglobal-training.com/frontend");
        cy.clickCard("Project - Login Function");

        cy.get('#username').type('TechGlobal')

        // cy.pause()

        cy.get('#password').type('Test1234')

        cy.get('#login_btn').click()

        cy.get('#success_lgn').should('be.visible')

    })


    it.only('Debugging using cy.debug()', () => {

        cy.visit("https://techglobal-training.com/frontend");
        cy.clickCard("Project - Login Function");

        cy.get('#username').type('TechGlobal')

        // cy.debug()

        cy.get('#password').type('Test1234')

        cy.get('#login_btn').click()

        cy.get('#success_lgn').should('be.visible')

    })
})
