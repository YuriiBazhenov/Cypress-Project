RECAP:

	
	Custom Commands:


	Custom commands are same as creating functions in JavaScript, but in a Cypress way. The advantage of creating Custom Commands in a way of Cypress, it already gets into Cypress command chain, and we dont need to export, and import these functions.

	Types of Custom Commands:

	1. Parent Command

		Cypress.Commands.add('methodName', (argument1, argument2) => {
			function block
		})

	2. Child Command

		Cypress.Commands.add('methodName', {prevSubject: true or 'element'},
		(subject, argument1, argument2) => {
			function block
		})


	3. Dual Command

		Cypress.Commands.add('methodName', {prevSubject: 'optional'},
		(subject, argument1, argument2) => {
			function block
		})

	4. Overwriting the existing command



	IMPORTANT NOTE

	When you define a custom command in Cypress and use prevSubject: true, or 'element' or 'window' or 'document', the command will automatically yield the subject.

	When you set prevSubject: true, Your custom command functions acts like a .then() callback, giving you direct access to subject so you can interact with it like jQuery Object


	Key Point Here:

	1. prevSubhect ensures that your command is a child command that will operate on the subject yielded by the previous command in the chain.

	2. The function you provide Cypress.Commands.add with prevSubject: true works like .then() in that block and lets you directly interact with the yielded subject.





