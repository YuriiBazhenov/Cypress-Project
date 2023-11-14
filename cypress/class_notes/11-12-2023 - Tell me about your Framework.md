

What is Framework ?

	It's collection of tools that works together to helps us to execute speficic job

	I want to have a automation framework

		- Ability to test UI and API
		- Reliable
		- Fast
		- Capable of testing any browser I want => X
		- Can be easily integrated to CI/CD
		- Has great community that we will not struggle in resources
		- Open-source and Free
		- Ability to Visual regression test
		- And Accesibility test



		SPIKE: Research frameworks


		Visual regression test ( Snapshot testing )

		Visual regression or also called snapshot testing is coming from the idea comparing two images of a web page to validate the UI. First test, takes the screenshot of the page, or web component you defined, stores in the framework, and on next test it takes the screenshot again and compares our current visual of your page is as expected.



		Accesibility testing

		This is testing to make sure application we are working on is designed in a best way for disabled people. There are some tools to check how disabled person friendly of your application, and companies aim to minimize it as much as possible.




		Tell me about your UI framework ?


		JavaScript
		Cypress
		npm
		TDD
		package.json
		e2e test file
		pages (POM)
		commands
		cypress.config.js
		assets folder
		CI/CD
		Git




		- My framework uses JS programming language as its core and all other tools designed around it
		- We are using node js to get dependencies with the help of its npm which procides us package.json that contains meta information about my project, it dependencies, and scripts we use to run our tests. These scripts are important, because it defines the browsers, and some important options to use that we run our framework. For example, with all these predefined scripts, its helping us to do cross-browser testing, or overwrite our env variables, or any config option we have in cypress.
		- Package.json also helping us to centralize our dependencies and check their versions
		- We are Cypress as a automation tool along with its dependencies that is helping us to automate UI test and using its assertions for any validations
		- Our framework is based on TDD, which means our priroty is writing our automation scripts.
		- We are holding our test files inside e2e folder, and inside the e2e folder, we have different golders that are holding our test files that seperated by testing type. For example integration, smoke and etc.
		- We follow POM design pattern which helps us to centralize our page related locators, and methods, we hold them in pages folder. Between the page objects, we are using inheritance to create parent child relationship between pages if we need to create reusability.
		- Also we are using commands.js file that coming from the cypress to store our custom commands which helping us to create reusability all over our framework.
		- Also, inside e2e.js file, we are holding our imports, and some stuff that needs to run before our test file.
		- We have all our configurations defined inside the cypress.config.js so for our project, we define all timeouts, test retry, browser resulation and etc inside this file

		- We are using BitBucket as version control system.
		- We execute 2 important suites in our frameowrk which are Smoke, and Regression and they are integrated to our CI/CD
		- We are using Jenkins as a CI/CD tool and we currently have 12 smoke tests, and 365 regressions that are running on CI/CD
		- We are running smoke tests every day 8 AM in the morning while we are running our Regression suite at the end of each sprint, or triggered after any hotfix.



		*** TEST CASE REVIEW MEETING ***

		This is the meeting where PO, Tester, and Developers gets together, and discuss about the test cases tester wrote. 
		
		They mainly cover three topics in this meeting:

		1. Test Coverage		=> Making sure tester has enough of test coverage for the functionality being tested.
		2. Smoke or Manual 		=> PO, Tester, or Dev might think some functionalities is better to handle in a Smoke suite in case it needs extra attention.
		3. Manual vs Regression => Some test cases requires too much effort and time can be considered to handle with Manual testing. So as a tester, you or PO might think this is better to do for more reliable results.