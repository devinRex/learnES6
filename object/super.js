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
let friend = {
    getGreeting() {
        return super.getGreeting() + ", hi!";
    }
};
// 语法错误
let friend1 = {
    getGreeting: function (){
        return super.getGreeting() + ", hi!";
    }
}
Object.setPrototypeOf(friend, person);
Object.setPrototypeOf(friend1, person);


