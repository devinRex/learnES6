let text = "𠮷";

console.log(text.length);  // 2
console.log(/^.$/.test(text)); // false
console.log(/^.$/u.test(text)); // true


function hasRegExpU() {
	try {
		var pattern = new RegExp(".", 'u');
		return true;
	} catch (ex) {
		return false;
	}
}