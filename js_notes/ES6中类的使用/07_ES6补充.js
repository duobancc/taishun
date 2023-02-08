// 对象字面量增强
const age = 18
const obj = {
  name: '',
  // property shorthand 属性简写
  age,
  // method shorthand 方法简写
  foo() {
    console.log(this)
  },
  // computed property name 计算属性名
  [age + '5645']: 'kkkk'
}

console.log(obj)
// 对象会把属性（key）最终做一个string 转化

// 数组解构赋值

// 对象解构赋值

// let

//const
// 注意事项一: const本质上是传递的值不可以修改
// 但是如果传递的是一个引用类型(内存地址), 可以通过引用找到对应的对象, 去修改对象内部的属性, 这个是可以的
// const obj = {
//   foo: "foo"
// }

// let const 作用域提升
// 它们不存在作用域提升
// foo被创建出来了（也是先创建后赋值的）, 但是不能被访问
// console.log(foo) 
let foo = "foo"

console.log('window',window.foo)

// 暂时性死区
//只要一进入当前作用域，所要使用的变量就已经存在了，
//但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。