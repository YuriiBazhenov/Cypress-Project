RECAP:

	
	Default, Implicit & Explicit Assertions

	Default:

		cy.get()
		cy.contains()
		find()
		next()
		etc

		It basically implicitly checks if element exist on the dom, or not. So it means we don't need to keep use should('be.visible')

		And it does the same thing for all the actions commands

		Actions commands like click(), type(), clear() and etc it checks if the element is interactable.

	Implicit Assertions:

		The assertion we do using .should() method coming from Chai library. This assertions has retry logic.

	Explicit Assertions:

		Explicit assertions are assertions that we do using expect() again from the Chai library. It gives us more control over the web element and the flexibility




	When to use .should() vs expect()

		1. Use 'should()' when:
			- You're chaining off of a Cypress command.
			- You want the assertion to automatically retry.
			- You're making simple assertions directly on the yielded subject

		2. Use 'expect()' when:
			- When you want to use it with some JS methods
			- You're making standalone assertions outside of the Cypress command chain
			- You're working within then() and want to make assertion on that yielded subhect from the then()
			- You're about to make more complex assertions that might not fit nearly into should()


		NOTE: In general, for most Cypress tests, you'll find yourself using '.should()' more frequently because of its powerful retry mechanicsm and its ability to chain with other Cypress commands. However, 'expect()' is still useful in specific scenarios, especially when working within '.then()' callbacks or making those standalone assertions.



		When we use then() on a yielded subject, the callback inside the then() method loses its chainibility with cypress commands.

		E.g.

		cy.get('#webElement').then(($el) => {

			// now $el is a jQuery object, and can not chained with any further Cypress command. 
			// Until you define what you want to retrieve from the web element, element yielded from then callback is a jQuery object and still cant be chained with any JS method.

			//After we define what we want from the element like '$el.text()' it will be regular JS string, and now can be chained with any JS methods.
		})



		$el or el.text() is a non-Cypress object and it can't be chained with any Cypress command anymore. If we want to chain it with any further Cypress command, we have to use 'cy.wrap()'

		'cy.wrap()' simply gets non-Cypress object as an argument, and it introduces that object to Cypress. From that moment, object becomes chainable with any Cypress command.

		E.g.

		cy.get('#webElement').then(($el) => {
			$el.text()
			cy.wrap($el.text()).should('eq', 'text').and('be.visible')
			cy.wrap($el).should('have.text', 'text').and('be.visible')
		})


	












