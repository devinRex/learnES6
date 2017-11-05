## 对象字面量的语法扩展
### 初始值的简写
	function createPerson(name, age) {
		return {
			name,
			age
		}
	}
### 方法的简写
	var person = {
		name: 'Nicholas',
		sayName() {
			console.log(this.name);
		}
	}
	
### 可计算属性名
	let lastName = "last name";
	let person = {
		[lastName]: 'Zakas'	
	};
	console.log(person[lastName]);
<font color="red">todo : console.log出来的结果好像不对</font>

## 新增方法
<font color="red">ES设计目标，不再创建新的全局函数，也不在Object.prototype上创建新的方法</font>
### Object.is
弥补全等运算符的不准确计算
	Object.is(NaN, NaN); // true
	
### Object.assign
* 不能复制访问器属性，进行了赋值操作，提供者的访问起属性最终会转变为接受对象中的一个数据属性

		var receiver = {},
			supplier = {
				get name() {
					return "file.js"
				}
			}	
			Object.assign(receiver, supplier);
			var descriptor = Object.getOwnPropertyDescriptor(receiver, "name");
			console.log(descriptor.value); // "file.js"
			
## 每一组重复属性，都会取最后一个值
## 自由属性枚举顺序
1. 所有数字键按升序排列
2. 所有字符串按照他们被加入对象的顺序排序
3. 所有symbol键按照他们被加入对象的顺序排序


## 增强对象原型
### 改变对象的原型
Object.setPrototypeOf

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
	
### 简化原型访问的Super引用
* 必须要在使用简写方法的对象中使用Super引用
* 在[[HomeObject]]属性上调用Object.getPrototypeOf()来检索原型的引用，然后搜索原型中岛同名函数，最后设置this绑定并且调用相应的方法


## 正式的方法定义
[[HomeObject]]属性容纳方法从属的对象