var names = ["abc", "cba", "nba"]
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this._address = '温州市'
  }
  // 普通的实例方法
  eating() { // 这里的函数实际也存在与 Person的 prototype 上
    console.log(this.name + 'eating~');
  }

  // 类的访问器方法
  get address() {
    return this._address
  }

  set address(value) {
    this._address = value
  }

  // 类的静态方法(类方法)
  // Person.createPerson()
  static createPerson() {
    var nameIndex = Math.floor(Math.random() * names.length)
    var name = names[nameIndex]
    var age = Math.floor(Math.random() * 100)
    return new Person(name, age)
  }

}

var p1 = new Person('小明', 18)
p1.eating() // 小明eating~

// console.log(Object.getOwnPropertyDescriptors(Person.prototype)); 

// 使用类静态方法 
var p2 =  Person.createPerson()
console.log(p2)
