
const funcs = [];
// Uncaught TypeError: Assignment to constant variable.
for (const i = 0; i < 10; i++) {
	funcs.push(function () {
		console.log(i);
	});
}


// 不会报错，因为每次迭代不会修改绑定
const funcs1 = [],
	object = {
		a: true,
		b: true,
		c: true
	};
for (const key in object) {
	funcs1.push(function () {
		console.log(key);
	});
}

funcs1.forEach(function (func) {
	func();
});