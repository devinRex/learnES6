let person = {
		getGreeting() {
			return "Hello";
		}
	};
let dog = {
    getGreeting() {
        return "Woof";
    }
};
let friend = Object.create(person);
console.log(friend. getGreeting()); // Hello
console.log(Object.getPrototypeOf(friend) === person);

Object.setPrototypeOf(friend, dog);
console.log(friend.getGreeting()); // Woof