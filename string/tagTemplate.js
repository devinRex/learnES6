let count = 10,
	price = 0.25,
	message = passthru`${count} items cost $${(count * price).toFixed(2)}.`;

function passthru(literals, ...substitutions) {
	console.log(literals); // ["", " items cost $", "."]
	console.log(substitutions); [10, "2.50"]
}
passthru();