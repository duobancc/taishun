class Person {
  // 类的构造方法
  // 一个类只能有一个构造函数
  // 构造函数做的处理和 new 操作符 的处理基本一致
  // 1. 在内存中创建一个新对象 {}
  // 2. 将类的原型 prototype 赋值给新对象的 {}.__proto__  === Person.prototype
  // 3. 将对象赋值给函数的this , new 的this绑定
  // 4. 执行函数体中的代码
  // 5. 自动返回创建出来的对象

  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

var p1 = new Person('小明', 18)
var p2 = new Person('王多鱼', 999)

console.log(p1)// Person { name: '小明', age: 18 }
console.log(p2)// Person { name: '王多鱼', age: 999 }

