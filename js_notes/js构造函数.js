function Person(name, address) {
  this.name = name
  this.address = address
}

console.log(Person.__proto__)
console.log(Person.prototype)


var Mo = {
  prototype: {
  },
  newMo: function (name, address) {
    return {
      name,
      address,
      test: () => { },
      __proto__: this.prototype,
    }
  }
}

var m1 = Mo.newMo('momo', '墨西哥')
var m2 = Mo.newMo('momo', '西班牙')
// console.log(m1.test === m2.test) // false
// console.log(m1.__proto__ === m2.__proto__) // true



var p1 = new Person('nick', '西雅图')
var p2 = new Person('nick', '北京市')

// console.log(p1.name === p1.name)

// 两个是不同对象
// 对象会存在 一个隐式原型 ，浏览器提供 __proto__
// 这个 对象的 __proto__ 都指向了 prototype
// 那么为什么这个prototype 是一样的
// name 是对象的一个属性，prototype也是对象的一个属性，
// 凭什么 pro 是 不变的，name 是变化的
