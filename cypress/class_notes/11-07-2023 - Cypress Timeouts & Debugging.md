RECAP:


	CLI ( Command Line Interface )

		Is the place where we provide commands to run our code. This is giving us flexibility to run our code in different configurations but MOST IMPORTATNTLY it is MUST for CI/CD.


		npx cypress run 	=>  By default, it runs our tests in Electron browsers with headless mode.

		Configuration flags:

		--headed 			=> Run the tests with browser
		--browser chrome	=> Defines which browser we want to use 
		--spec 				=> Runs specific test file
		--env				=> Overwrites the value we have in env object
		--config 			=> Overwrites the configuration we have in config while for a test run.



		