function Person(name, address) {
  this.name = name
  this.address = address
}

Person.prototype.eating = function () {
  console.log(this.name + '在吃东西~')
}

var p1 = new Person('小明', '西雅图')
var p2 = new Person('小王', '西雅图')


// 先在构造函数返回的对象中查找 eating 函数，
// 查找不到会到 对象的 __proto__ 中查找
// new 的过程中，会把构造函数返回的对象的  __proto__ 指向 构造函数的prototype对象
// 所以其实就是在 构造函数的 prototype对象中查找
p1.eating() // 小明在吃东西~
p2.eating() // 小王在吃东西~
