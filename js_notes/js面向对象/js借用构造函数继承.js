function Person({ name, age, fridens, title }) {
  this.name = name
  this.age = age
  if (fridens) this.fridens = fridens
  if (title) this.title = title
}

Person.prototype.runing = function () {
  console.log(this.name + '-runing')
}
 

function Student({ name, age, fridens }) {
  Person.call(this, { name, age, fridens })
}
Student.prototype = new Person({})

var xiaoming = new Student({ name: '小明', age: 18, fridens: ['李磊'] })
xiaoming.fridens.push('王明')
console.log(xiaoming)

var lihua = new Student({ name: '李华', age: 20, fridens: ['大虎', '小敏'] })
lihua.fridens.push('王磊')
console.log(lihua)


function Teacher({ name, age, title }) {
  Person.call(this, { name, age, title })

}
Teacher.prototype = new Person({})
var liuMr = new Teacher({ name: '刘老师', age: 26, title: ['教师'] })
liuMr.title.push('高级教师')
console.log(liuMr)
