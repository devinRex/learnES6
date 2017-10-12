let msg = 'hello world';

console.log(msg.startsWith('hello')); // true
console.log(msg.endsWith('!'));		// true
console.log(msg.includes('o'));		// true

console.log(msg.startsWith('o', 4)); // true
console.log(msg.endsWith('o', 8));  // true
console.log(msg.includes('o', 8));  // false
