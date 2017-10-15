function pick(object, ...keys) {
	let result = Object.create(null);

	for (let i = 0, len = keys.length; i < len; i++) {
		result[keys[i]] = object[keys[i]];
	}

	return result;
}
let book = {
	title: 'understanding ECMAScript 6',
	author: 'xxx',
	year: 2016
};
console.log(pick(book, 'author', 'year')); // {author: "xxx", year: 2016}
console.log(pick.length);  // 1