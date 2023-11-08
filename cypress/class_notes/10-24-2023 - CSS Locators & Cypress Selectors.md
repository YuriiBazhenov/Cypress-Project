RECAP:

		- web element tags

		- id (#): id is a unique attribute.
			#myId => 1 of 1

		- class (.): It's not unique, and can be used in different web elements
			.className => 1 of 20

			E.g.

		<div class="className">
			<div>
				<p class="className" id="myId"> asdlknalsdk </p>
				<a class="className"> asldnlqwd </a>
				<input class="className"> asldnlqwd </input>
				<a class="className2"> asldnlqwd </a>
				<p> asldnlqwd </p>
			</div>
		</div>

		.className  => 1 of 3

		div.className#myId
		a.className#myId

		div > a.className2

		div.className > div > a.className2
		div.className a.className2

		div a.clasName2 + p
		div a.clasName2 ~ p

		a,p,input



		== ATTRIBUTE LOCATORS ==

		href
		for
		name
		type
		value

		<div class="className" name="ele">
			<div>
				<p class="className" id="myId"> asdlknalsdk </p>
				<a class="className"> asldnlqwd </a>
				<input class="className"> asldnlqwd </input>
				<a class="className2"> asldnlqwd </a>
				<p> asldnlqwd </p>
			</div>
		</div>

		[attribute="value"]
		tag[attribute="value"]

		[class="className"]

		div[name="ele"].className

		body > div > div > div > a > div

		














