function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.runing = function () {
  console.log('runing~')
}


function Student(name, age, sno, score) {
  Person.call(this, name, age)
  this.sno = sno
  this.score = score
}

//将 Stu 的原型指向 Person.protorype (继承Person类)
Student.prototype = Object.create(Person.prototype)

console.log(Student.prototype)

var stu = new Student('小明', 16, 001, 89)
console.log(stu) // Person { name: '小明', age: 16, sno: 1, score: 89 }
// stu 的 类型为 Person ，不符合预期，原因为，Student.prototype 的指向改变
// 改为原型为 Person.prototype 的一个空对象，其中没有 constructor, 
// 最终顺着原型链 找到了Person 的 constructor ,最终为 Person 
stu.runing()

function Teacher(name, age, title, tno) {
  Person.call(this, name, age)
  this.title = title
  this.tno = tno
}
// 使用优化的函数
inheritPrototype(Teacher, Person)

var tea = new Teacher('王老师', 28, '教师', 1011)
console.log(tea) // Teacher { name: '王老师', age: 28, title: '教师', tno: 1011 }
// 正确的类型

// 优化一下修改原型的操作
// 继承原型类型
function inheritPrototype(SubType, SuperType) {
  SubType.prototype = Object.create(SuperType.prototype)
  Object.defineProperty(SubType.prototype, 'constructor', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: SubType
  })
}