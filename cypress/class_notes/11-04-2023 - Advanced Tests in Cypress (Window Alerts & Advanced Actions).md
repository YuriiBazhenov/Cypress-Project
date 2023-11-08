RECAP:



	IFrames: HTML embedded inside another HTML document. 

	Why it is used ?

		- We can represent another website in our website without user needs to be direct there.

		- Adding some adds to our page and doing this so by using iframes will provide more security



	When Cypress come across with a web element inside the iFrames, it stop working and shows it as element not found. This is why, we have to handle this iframe, and by handling this we will be able to locate the web element in iframe.



	Steps to locate iFrame

	1. Locate the iFrame
	2. use its(), get the index of iframe '0' then get contentDocument property, and from there, you can target to get body.

	E.g.	=> its('0.contentDocument.body')

	From this point, we will be able to locate anything we want inside the iframe.



	MULTI TABS

	Multi tabs is the is the links opens in the new tab on the browser. So Cypress, can't handle tabs opens in the new tabs on the browser, that's why we have to find a workaround to handle this test.


	How we know a link opens in the new tab ?

		- If web element has "target" attribute with "_blank" value, this means this web element opens in the new tab.



		If we want to validate it, we can it:

		cy.get('webElement').should('have.attr', 'target', '_blank')


		If we want to interact with webpage that opens in the new tab, you have to manipulate its attribute by using jQuery.

		cy.get('webElement').invoke('removeAttr', 'target').click()

		NOTE: Just make sure, chromeWebSecurity: false on the config.


		== LOCATORS == 


		<div class="className">
			<div>
				<p class="className" id="myId"> asdlknalsdk </p>
				<a class="className"> asldnlqwd </a>
				<input class="className"> asldnlqwd </input>
				<a class="className2"> asldnlqwd </a>
				<p> asldnlqwd </p>
			</div>
		</div>

	- tag
	- class and id 			=> className(.) or id(#)
	- attribute selectors 	=> [attribute="value"] or tag[attribute="value"]

	* [attribute^="value"]		=> finds the attribute starting with 'value'
	* [attribute$="value"]		=> finds the attribute ends with 'value'
	* [attribute*="value"]		=> finds the attribute contains 'value'

	Smbols:

	1. > : Direct child				=> .className > div
	2. (space): Descendent child	=> .classname p
	3. (,) comma: 					=> targets different elements together

		E.g.: 
		- .classname,p (will return element with class name, and p tag)
		- .className,.className2 ( will return all web elements with these classnames)

	4. (~) tilde: returns immediate next SIBLINGS ( multiple )
	5. (+) plus: returns immedia next SIBLING

	6. p#myId.className		=> Allows you to locate the specific web elements with its multiple properties.

	So, in this case, it will get web element with p tag and contains id=myId, and also with classname class=className

	<p class="className" id="myId"> asdlknalsdk </p>


	Psuedo-classes

	Psuedo classes are allowing us to locate web elements by their states

	E.g.

	<div>
		<p class="className" id="myId"> asdlknalsdk </p>
		<p class="className" id="myId"> asdlknalsdk </p>
		<p class="className" id="myId"> asdlknalsdk </p>
		<p class="className" id="myId"> asdlknalsdk </p>
		<p class="className" id="myId"> asdlknalsdk </p>
	</div>


	div > p:first-child 	=> Locate the first web element with p tag
	div > p:last-child 		=> Locate the last web element with p tag

	div > p:nth-child(4) 	=> Locate the 4th web element with p tag

	we can also use;

		- :enabled
		- :checked
		- :selected
		- :required
		- :optional











