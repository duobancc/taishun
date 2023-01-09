class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this._address = '温州市'
  }

  eating(){ // 这里的函数实际也存在与 Person的 prototype 上
    console.log(this.name + 'eating~');
  }


  get address(){ // 访问器方法
    return this._address
  }

  set address(value) { 
    this._address = value
  }

  // 静态方法
  static createPerson(){
    console.log(this.name)
  }

}

var p1 = new Person('小明', 18)
p1.eating() // 小明eating~

// console.log(Object.getOwnPropertyDescriptors(Person.prototype)); 

// 使用类静态方法
Person.createPerson()
