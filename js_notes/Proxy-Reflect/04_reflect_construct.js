function Person(name, age) {
  this.name = name
  this.age = age
}

function Teacher() {
}

// 调用了构造函数 Person 最终的类型却是 Teacher 

const teacher = Reflect.construct(Person, ['duoban', 25], Teacher)

console.log(teacher)
console.log(teacher.__proto__ === Teacher.prototype)