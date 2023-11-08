RECAP:


    ACTION COMMANDS:

        click()
        check()
        type()
        clear()
        uncheck()
        select()




	Default vs Implicit Assertions

		Default Assertions: Default assertions are assertions that Cypress does implicitly for any action we do while testing.

		E.g.

		cy.visit()		=> Cypress checks already if website is up
		cy.get() or any selector command() => Cypress checks already if element is there or not.


		Also for any action commands below:

		click()
		check()
		type()
		clear()
		uncheck()
		select()

		Before doing any action Cypress checks if the element that we want to interact is 'interactable', and also not disabled, not covered and not hidden from the view.


		Implicit Assertions:

		Implicit assertions are type of assertions that we do with using should() and and() methods. Usually as a first argument, it gets the chainer (assertion type).

		(CHARINER - Assertion Type)

		'have.text'  		=> should('have.text', 'expectedText')
		'contains.text'  	=> should('have.text', 'expectedText')
		'includes.text'  	=> should('have.text', 'expectedText')

		'have.attr'			=> should('have.attr', 'id', 'value')
		'have.css'			=> should('have.css', 'color', 'red')
		'have.lenght'		=> should('have.length', 2)


		'be.enabled'
		'be.visible'
		'be.checked'
		'be.selected'