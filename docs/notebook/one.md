## 第六章 集合引用类型

### 6.1 Object

#### 创建方式：

##### 1、new操作符和Object构造函数

```javascript
let person=new Object();
person.name="Nicholas";
person.age=29;
```

#####  2、对象字面量(更倾向)

```javascript
let person= {
    name:"Nicholas",
    age: 29
}
```

#####    取属性：                         

```javascript
console.log(person["name"]); // "Nicholas" 
console.log(person.name); // "Nicholas"
```

### 6.2 Array

#### 6.2.1 创建数组

##### 1、使用Array构造函数

```javascript
let colors=new Array();
let colors=new Array(20);
let colors=(new) Array("red","blue","green");
```

##### 2、使用数组字面量

```javascript
let colors=["red","blue","green"];
```

##### 3、from()和of()

from()用于将类数组结构转换为数组实例

```javascript
// 字符串会被拆分为单字符数组
console.log(Array.from("Matt")); // ["M", "a", "t", "t"] 
// 可以使用 from()将集合和映射转换为一个新数组
const m = new Map().set(1, 2) 
 .set(3, 4); 
const s = new Set().add(1) 
 .add(2) 
 .add(3) 
 .add(4); 
console.log(Array.from(m)); // [[1, 2], [3, 4]] 
console.log(Array.from(s)); // [1, 2, 3, 4] 
// Array.from()对现有数组执行浅复制
const a1 = [1, 2, 3, 4]; 
const a2 = Array.from(a1); 
console.log(a1); // [1, 2, 3, 4] 
alert(a1 === a2); // false
```

of()用于将一组参数转换为数组实例

```javascript
console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4] 
console.log(Array.of(undefined)); // [undefined]
```

#### 6.2.2 数组空位

使用数组字面量初始化数组时，可以使用一串逗号来创建空位（hole）

ES6 新增方法普遍将这些空位当成存在的元素，只不过值为 undefined

```javascript
const options = [,,,,,]; // 创建包含 5 个元素的数组
console.log(options.length); // 5 
console.log(options); // [,,,,,]
```

#### 6.2.3 数组索引

要取得或设置数组的值，需要使用中括号并提供相应值的数字索引

```javascript
let colors = ["red", "blue", "green"]; // 定义一个字符串数组
alert(colors[0]); // 显示第一项
colors[2] = "black"; // 修改第三项
colors[3] = "brown"; // 添加第四项
```

#### 6.2.4 检测数组

使用 instanceof 操作符

#### 6.2.5 复制和填充方法

##### 1、fill方法

使用 fill()方法可以向一个已有的数组中插入全部或部分相同的值。开始索引用于指定开始填充

的位置，它是可选的。如果不提供结束索引，则一直填充到数组末尾。

```javascript
// 用 7 填充索引大于等于 1 且小于 3 的元素
zeroes.fill(7, 1, 3); 
console.log(zeroes); // [0, 7, 7, 0, 0]; 
zeroes.fill(0); // 重置
```

##### 2、copeWithin()

copyWithin()会按照指定范围浅复制数组中的部分内容，然后将它们插入到指定索引开始的位置

```javascript
let ints, 
 reset = () => ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
reset(); 
// 从 ints 中复制索引 0 开始的内容，插入到索引 5 开始的位置
// 在源索引或目标索引到达数组边界时停止
ints.copyWithin(5); 
console.log(ints); // [0, 1, 2, 3, 4, 0, 1, 2, 3, 4] 
reset(); 
// 从 ints 中复制索引 5 开始的内容，插入到索引 0 开始的位置
ints.copyWithin(0, 5); 
console.log(ints); // [5, 6, 7, 8, 9, 5, 6, 7, 8, 9]
// 从 ints 中复制索引 0 开始到索引 3 结束的内容
// 插入到索引 4 开始的位置
ints.copyWithin(4, 0, 3); 
alert(ints); // [0, 1, 2, 3, 0, 1, 2, 7, 8, 9] 
reset();
```

#### 6.2.7 转换方法

valueOf()返回的还是数组本身。而 toString()返回由数组中每个值的等效字符串拼接而成的一个逗号分隔的字符串

```javascript
// 从 ints 中复制索引 0 开始到索引 3 结束的内容
// 插入到索引 4 开始的位置
ints.copyWithin(4, 0, 3); 
alert(ints); // [0, 1, 2, 3, 0, 1, 2, 7, 8, 9] 
reset();
```

#### 6.2.8 栈方法

push()方法接收任意数量的参数，pop()方法则用于删除数组的最后一项

```javascript
let colors = new Array(); // 创建一个数组
let count = colors.push("red", "green"); // 推入两项
alert(count); // 2 
count = colors.push("black"); // 再推入一项
alert(count); // 3 
let item = colors.pop(); // 取得最后一项
alert(item); // black 
alert(colors.length); // 2
```

#### 6.2.9 队列方法

shift()删除数组的第一项并返回它，然后数组长度减 1，unshift()在数组开头添加任意多个值，然后返回新的数组长度

#### 6.2.10 排序方法

reverse()（逆序）和 sort()（顺序）

#### 6.2.11 操作方法

concat()方法可以在现有数组全部元素基础上创建一个新数组

```javascript
let colors = ["red", "green", "blue"]; 
let colors2 = colors.concat("yellow", ["black", "brown"]);  
console.log(colors2); // ["red", "green", "blue", "yellow", "black", "brown"]
```

方法 slice()用于创建一个包含原有数组中一个或多个元素的新数组

```javascript
let colors = ["red", "green", "blue", "yellow", "purple"]; 
let colors2 = colors.slice(1); 
let colors3 = colors.slice(1, 4); 
alert(colors2); // green,blue,yellow,purple 
alert(colors3); // green,blue,yellow
```

splice()的主要目的是在数组中间插入元素，但有 3 种不同的方式使用这个方法。

 删除。需要给 splice()传 2 个参数：要删除的第一个元素的位置和要删除的元素数量。

```javascript
let colors = ["red", "green", "blue"]; 
let removed = colors.splice(0,1); // 删除第一项
alert(colors); // green,blue 
alert(removed); // red，只有一个元素的数组
```

 插入。需要给 splice()传 3 个参数：开始位置、0（要删除的元素数量）和要插入的元素，可

以在数组中指定的位置插入元素。第三个参数之后还可以传第四个、第五个参数，乃至任意多

个要插入的元素。比如，splice(2, 0, "red", "green")会从数组位置 2 开始插入字符串

"red"和"green"。 

```javascript
removed = colors.splice(1, 0, "yellow", "orange"); // 在位置 1 插入两个元素
alert(colors); // green,yellow,orange,blue
```

 替换。splice()在删除元素的同时可以在指定位置插入新元素，同样要传入 3 个参数：开始位

置、要删除元素的数量和要插入的任意多个元素。要插入的元素数量不一定跟删除的元素数量

一致。比如，splice(2, 1, "red", "green")会在位置 2 删除一个元素，然后从该位置开始

向数组中插入"red"和"green"。

```javascript
removed = colors.splice(1, 1, "red", "purple"); // 插入两个值，删除一个元素
alert(colors); // green,red,purple,orange,blue 
alert(removed); // yellow，只有一个元素的数组
```

#### 6.2.12 搜索和位置方法

indexOf()、lastIndexOf()和 includes()

```javascript
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]; 
alert(numbers.indexOf(4)); // 3 
alert(numbers.lastIndexOf(4)); // 5 
alert(numbers.includes(4)); // true
```

#### 6.2.13 迭代方法

##### every()：

对数组每一项都运行传入的函数，如果对每一项函数都返回 true，则这个方法返回 true。 

##### some()：

对数组每一项都运行传入的函数，如果有一项函数返回 true，则这个方法返回 true。

```javascript
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]; 
let everyResult = numbers.every((item, index, array) => item > 2); 
alert(everyResult); // false 
let someResult = numbers.some((item, index, array) => item > 2); 
alert(someResult); // true
```

#####  filter()：

对数组每一项都运行传入的函数，函数返回 true 的项会组成数组之后返回。

```javascript
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]; 
let filterResult = numbers.filter((item, index, array) => item > 2); 
alert(filterResult); // 3,4,5,4
```

#####  map()：

对数组每一项都运行传入的函数，返回由每次函数调用的结果构成的数组

```javascript
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]; 
let mapResult = numbers.map((item, index, array) => item * 2); 
alert(mapResult); // 2,4,6,8,10,8,6,4,2
```

##### forEach()：

对数组每一项都运行传入的函数，没有返回值

```javascript
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]; 
numbers.forEach((item, index, array) => { 
 // 执行某些操作 
});
```

#### 6.2.14 归并方法

reduce()方法从数组第一项开始遍历到最后一项，reduceRight()从最后一项开始遍历至第一项。接收 4 个参数：上一个归并值、当前项、当前项的索引和数组本身

```javascript
let values = [1, 2, 3, 4, 5]; 
let sum = values.reduce((prev, cur, index, array) => prev + cur); 
alert(sum); // 15
```

```javascript
let values = [1, 2, 3, 4, 5]; 
let sum = values.reduceRight(function(prev, cur, index, array){ 
 return prev + cur; 
}); 
alert(sum); // 15
```

### 6.4 Map

#### 6.4.1 基本API

使用 new 关键字和 Map 构造函数可以创建一个空映射：

```javascript
const m = new Map();
// 使用嵌套数组初始化映射
const m1 = new Map([ 
 ["key1", "val1"], 
 ["key2", "val2"], 
 ["key3", "val3"] 
]); 
alert(m1.size); // 3
```

初始化之后，可以使用 set()方法再添加键/值对。另外，可以使用 get()和 has()进行查询，可

以通过 size 属性获取映射中的键/值对的数量，还可以使用 delete()和 clear()删除值。

```javascript
const m = new Map(); 
alert(m.has("firstName")); // false 
alert(m.get("firstName")); // undefined 
alert(m.size); // 0

const m = new Map().set("key1", "val1"); 
m.set("key2", "val2") 
 .set("key3", "val3"); 
alert(m.size); // 3
```

与 Object 只能使用数值、字符串或符号作为键不同，Map 可以使用任何 JavaScript 数据类型作为

键

#### 6.4.2 顺序与迭代

可以通过 entries()方法（或者 Symbol.iterator 属性，它引用 entries()）取得这个迭代器：

```javascript
const m = new Map([ 
 ["key1", "val1"], 
 ["key2", "val2"], 
 ["key3", "val3"] 
]); 
alert(m.entries === m[Symbol.iterator]); // true 
for (let pair of m.entries()) { 
 alert(pair); 
} 
// [key1,val1] 
// [key2,val2] 
// [key3,val3]

for (let key of m.keys()) { 
 alert(key); 
} 
// key1 
// key2 
// key3 
for (let key of m.values()) { 
 alert(key); 
} 
// value1 
// value2 
// value3
```

弱映射中的键只能是 Object 或者继承自 Object 的类型，尝试使用非对象设置键会抛出

TypeError。

### 6.6 Set

#### 6.6.1 基本API

使用 new 关键字和 Set 构造函数可以创建一个空集合：

```javascript
const m = new Set();
```

初始化之后，可以使用 add()增加值，使用 has()查询，通过 size 取得元素数量，以及使用 delete()

和 clear()删除元素：

```javascript
const s = new Set(); 
alert(s.has("Matt")); // false 
alert(s.size); // 0 
s.add("Matt") 
 .add("Frisbie"); 
alert(s.has("Matt")); // true 
alert(s.size); // 2 
s.delete("Matt"); 
alert(s.has("Matt")); // false 
alert(s.has("Frisbie")); // true 
alert(s.size); // 1 
s.clear(); // 销毁集合实例中的所有值
```

Set 可以包含任何 JavaScript 数据类型作为值。

用作值的对象和其他“集合”类型在自己的内容或属性被修改时也不会改变

#### 6.6.2 顺序与迭代

集合实例可以提供一个迭代器（Iterator），能以插入顺序生成集合内容。可以通过 values()方

法及其别名方法 keys()（或者 Symbol.iterator 属性，它引用 values()）取得这个迭代器：

```javascript
const s = new Set(["val1", "val2", "val3"]); 
alert(s.values === s[Symbol.iterator]); // true 
alert(s.keys === s[Symbol.iterator]); // true 
for (let value of s.values()) { 
 alert(value); 
} 
// val1 
// val2 
// val3

const s = new Set(["val1", "val2", "val3"]); 
for (let pair of s.entries()) { 
 console.log(pair); 
} 
// ["val1", "val1"] 
// ["val2", "val2"] 
// ["val3", "val3"]
```

