## 对象解构
* 如果使用var、let或者const解构声明变量，则必须要提供初始化
* 代码块语句不允许出现在复制语句左侧，加小括号可以将块语句转化为一个表达式

		({type, name} = node);
		
*  以下代码不会有任何声明绑定

		let { loc: {} } = node;
		
## 数组解构
* 交换两个变量的值

		let a = 1,
			b = 2;
		[a, b] = [b, a];
* 数组复制

		let colors = ["red", "green", "blue"];
		let [ ...clonedColors ] = colors;
		
* 在被解构的数组中，不定元素必须为最后一个条目
* 解构参数必须传值或者给一个默认值，因为解构表达式的右值为null或undefined，程序会报错