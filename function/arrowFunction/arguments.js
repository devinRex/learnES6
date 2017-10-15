function createArrowFunctionReturningFirstArg() {
	return () => arguments[0];
}

var arrowFunction = createArrowFunctionReturningFirstArg(5);
console.log(arrowFunction()); // 5