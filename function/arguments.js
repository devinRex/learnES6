function mixArgs(first, sencond) {
	console.log(first === arguments[0]); // true
	console.log(sencond === arguments[1]); // true
	first = 'c';
	first = 'd';
	console.log(first === arguments[0]); // true
	console.log(sencond === arguments[1]); // true
}
mixArgs("a", "b");


function mixArgsStrict(first, sencond) {
	"use strict";
	console.log(first === arguments[0]); // true
	console.log(sencond === arguments[1]); // true
	first = 'c';
	first = 'd';
	console.log(first === arguments[0]); // false
	console.log(sencond === arguments[1]); // false
}
mixArgsStrict("a", "b");

function mixArgsES6(first, sencond = "b") {
	console.log(first === arguments[0]); // true
	console.log(sencond === arguments[1]); // true
	first = 'c';
	first = 'd';
	console.log(first === arguments[0]); // false
	console.log(sencond === arguments[1]); // false
}
mixArgsES6("a", "b");

function mixArgsES6a(first, sencond = "b") {
	console.log(first === arguments[0]); // true
	console.log(sencond === arguments[1]); // false
	first = 'c';
	first = 'd';
	console.log(first === arguments[0]); // false
	console.log(sencond === arguments[1]); // false
}
mixArgsES6a("a");