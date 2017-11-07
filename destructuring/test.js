let node = {
	type: "Identifier",
	name: "foo"
},
type = "Literal",
name = 5;

function outputInfo(value) {
	console.log(value === node); // true
}

outputInfo({type, name} = node);