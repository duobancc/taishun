// class 写法 是 es5 实现类的语法糖
// 基本上，ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已

// 类的声明
class Person { }

// 类的表达式
var Animal = class { }

console.log(Person.prototype) // {}
console.log(Person.prototype.__proto__) // [Object: null prototype] {}
console.log(Person.prototype.constructor) // [class Person]
console.log(typeof Person); // function

var p1 = new Person()
console.log(Person.prototype === p1.__proto__)


function Student() { }            

console.log(Student.prototype); // {}
console.log(Student.prototype.__proto__); // [Object: null prototype] {}
console.log(Student.prototype.constructor); // [Function: Student]
console.log(typeof Student); // function


