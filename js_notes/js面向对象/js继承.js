function Person(name) {
  this.name = name || '陌陌酱'
  this.list = []
  this.obj = {}
}
Person.prototype.speaking = function () {
  console.log(this.name + 'speaking')
}

function Student() {
  this.age = 16
}
Student.prototype = new Person('小明')
Student.prototype.studenting = function () {
  console.log(this.name + 'studenting~')
}

var stu1 = new Student()
var stu2 = new Student()
stu1.obj.add = 'add'
stu1.list.push('one') 
console.log(stu2.list) // [ 'one' ]
console.log(stu2.obj) // { add: 'add' }

stu1.name = 'stu1'
console.log(stu2.name) // 小明
console.log(stu1.name) // stu1


console.log(stu1) // Person { age: 16 }

// stu1.studenting()
// stu1.speaking()


function Teacher(title) {
  this.title = title
}
Teacher.prototype = new Person('王老师')
Teacher.prototype.teachering = function () {
  console.log(this.name + 'teachering')
}




var tea1 = new Teacher('教师') 
// console.log(tea1)
// tea1.teachering()
// tea1.speaking()