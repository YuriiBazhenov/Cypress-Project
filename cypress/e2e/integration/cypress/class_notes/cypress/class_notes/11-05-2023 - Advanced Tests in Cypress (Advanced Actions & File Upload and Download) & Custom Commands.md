RECAP:

	
		1. Warning Alert
		2. Confirmation Alert
		3. Prompt Alert


			1. Warning: Only one option => OK
			2. Confirmation: Has 2 options => OK, CANCEL
			3. Prompt: Has 2 options => OK, CANCEL and INPUT BOX


		Cypress basically handles Warning and Confirmation alerts by auto accepting them. But if we want to get the alert text, or if we want to cancel the confirmation alert, then we should use event listener.

		Handling Warning and Confirmation alert
		cy.on('window:confirm', (str) => {
			console.log(str)	=> returns the alert text

			return false => clicks cancel on alert 
		})


		Cypress won't handle the promp alert, because it requires user to enter input, and Cypress doesn't know what input should user enter in the input box. That is why, Cypress won't auto accept the prompt alert, instead it allowing us to 'stub' prompt method.



		cy.window().then((win) => {
			cy.stub(win, 'prompt').returns('message')
		})

		cy.window().then((win) => {
			cy.stub(win, 'prompt').callsFake((message) => {
				console.log(message) 	=> Alert text
				return message => prompt message
			})
		})
	





