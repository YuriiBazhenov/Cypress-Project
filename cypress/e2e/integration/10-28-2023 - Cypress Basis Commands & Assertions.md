RECAP:

		cy.get('elemenet'):
			Most basic way to locate the web element

		cy.contains('visibleText'):
		cy.contains('.element', 'visibleText')
			Locates the web element by its visual text on the UI


		cy.get().find('web element')
			Locates the web element nested inside the the element targeted by get()


		cy.get('.cards').first()
		cy.get('.cards').last()
		cy.get('.cards').eq(index)
			Locates the web element returns more than 1 web element

		cy.get().next()
			Returns the immediate NEXT sibling of web element located by get

		cy.get().prev()
			Returns the immediate PREVIOUS sibling of web element located by get

		cy.get().nextAll()
			Returns the immediate NEXT ALL siblings of web element located by get

		cy.get().prevAll()
			Returns the immediate PREVIOUS ALL siblings of web element located by get

		cy.get().parent()
			Returns immediate parent

		cy.get().children()
			Returns the child web element



		
		
















