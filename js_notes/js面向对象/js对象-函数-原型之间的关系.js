var obj = {
  name: 'momo'
}

console.log(obj.__proto__)
// 对象中存在一个 __proto__ 对象，这是个对象被称为对象的隐式原型，它由浏览器提供

function Foo() {
}

console.log(Foo.prototype)
// Foo 是一个函数，那么它会存在一个显示原型，Foo.prototype
// Foo.prototype 来自哪里？
// js创建一个函数，js引擎内部会帮我们创建一个新的对象，Foo.prototype = { constructor: FOO }

// 函数Foo 由 new Function() 创建 var Foo = new Function()
// 因此Foo同时也是一个对象，所以它也存在一个隐式原型, Foo.__proto__ 对象
// Foo.__proto__ 来自哪里？
// Foo 是由 new Function() 而来的，所以new 的过程会执行如下赋值操作
// Foo.__proto__ = Function.protorype
// 而 Function.protorype 又指向 { constructor: Function }
// 所以最终 Foo.__proto__ 指向 { constructor: Function }

console.log(Foo.__proto__  === Foo.prototype) // false  因此两者不相等

// Foo 和 Function 的原型对象，是一个对象，他们又由 new Object() 创建
// 所以存在 Foo.prototype.__proto__ = Object.protorype
console.log(Foo.prototype.__proto__  === Object.prototype); // true 
// Function 函数由 Function = new Function() , 所以 它的 Function.prototype = Function.__proto__ 
// Function 的 __proto__ 比较特殊
console.log(Function.prototype === Function.__proto__) // true 
// 同时 Object() 又是一个函数，所以，Object = new Function() 
// 联系Foo 函数的逻辑
// Object.prototype = { constructor: Object } || object.__proto__ = Function.prototype = { constructor: Function }
console.log(Object.__proto__ === Function.prototype) // true
// Object.prototype.__proto__ === null
console.log(Object.prototype.__proto__ === Object.prototype) // false 
