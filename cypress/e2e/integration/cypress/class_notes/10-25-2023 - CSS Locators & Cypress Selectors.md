RECAP:

	Cypress bundled libraries:

		- Mocha

			describe(): this method defines the group of tests. 
			it(): Defines individual test block

		- Chai
			expect(true).to.equal(false)
			cy.get(locator).should('be.visible')

		- jQuery
		- Sinon


	Cypress Basic Commands:

			cy.visit('url')		=> Navigates the website and initialises the browser

			cy.reload()			=> Reloads the current web page

			cy.go 				=> Navigates next or previous page

				// cy.go('back')
        		cy.go(-1)

        		// cy.go('forward')
        		cy.go(1)




