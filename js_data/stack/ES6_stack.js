class Stack1 {
  constructor() {
    this.items = []
  }

  push(el) {
    this.items.push(el)
  }

  pop() {
    return this.items.pop()
  }

  print() {
    console.log(this.items.toString());
  }
}


const stack = new Stack1()

stack.push(8946)
stack.print()
console.log(stack.items, '--------------------'); // 栈可以直接被修改


//  用ES6的限定作用域Symbol实现类

let _items = Symbol()

class Stack2 {
  constructor() {
    this[_items] = []
  }

  push(el) {
    this[_items].push(el)
  }

  print() {
    console.log(this[_items].toString());
  }

}

// 这种方法创建了一个假的私有属性，因为ES6新增的Object.getOwnPropertySymbols
// 方法能够取到类里面声明的所有Symbols属性。

const st2 = new Stack2()
st2.push(888)
const SymbolKey = Object.getOwnPropertySymbols(st2)[0]
console.log(st2[SymbolKey].push(999));
st2.print()

// 用ES6的WeakMap实现类
const items = new WeakMap()
class Stack3 {
  constructor() {
    items.set(this, [])
  }

  push(el) {
    let d = items.get(this)
    d.push(el)
  }

  print() {
    console.log(items.get(this).toString());
  }
}

const st3 = new Stack3()
st3.push('jjjj')
st3.print()




