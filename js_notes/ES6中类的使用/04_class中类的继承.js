class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  fn() {
    console.log(this.name + 'iiiiiii')
  }

  static staticMethod(){
    console.log('staticMethod');
  }

}

// 子类 （派生类）
class Student extends Person {
  constructor(name, age, sno) {
    // ES6 规定，子类必须在`constructor()`方法中调用`super()`，否则就会报错。
    super(name, age)
    this.sno = sno
  }

  fn(){ // 重写父类的方法
    super.fn()  // 复用父类的处理逻辑
    console.log(this.name + 'sssss');
  }

  static staticMethod(){
    console.log('22222222');
  }
}

var stu1 = new Student('小米', 18, 666)
stu1.fn()
Student.staticMethod()
console.log(Object.getOwnPropertyDescriptors(Person))
