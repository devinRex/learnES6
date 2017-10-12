let text = "𠮷";

console.log(text.length);     // 2
console.log(/^.$/.test(text)); // false
console.log(text.charAt(0));  // ''
console.log(text.charAt(1));   // ''
console.log(text.charCodeAt(0)); // 位置0处的第一个编码单元 55362
console.log(text.charCodeAt(1)); // 57271

let text1 = '𠮷a';
console.log(text1.charCodeAt(0)); 
console.log(text2.charCodeAt(1));
console.log(text3.charCodeAt(2));

console.log(text1.codePointAt(0)); // 返回完整的码位
console.log(text1.codePointAt(1));
console.log(text1.codePointAt(2));

// 判断是否是辅助平面字符
function is32Bit(c) {
	return c.codePointAt(0) > 0xFFFF;
}

console.log(String.fromCodePoint(134071)); // "𠮷"
