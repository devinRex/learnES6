"use strict";
if (true) {
	console.log(typeof doAnyThing); // function
	console.log(typeof doSomething); // Uncaught ReferenceError
	let doSomething = function () {
		// 
	};
	function doAnyThing() {
		// 
	}

	doSomethimg();
}

console.log(typeof doSomething);block