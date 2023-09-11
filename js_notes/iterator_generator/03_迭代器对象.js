
/**
 * 可迭代对象和迭代器注意区分概念
 */

const iteratorObj = {
  names: ['aaa', 'bbb', 'ccc'],
  [Symbol.iterator]: function () {
    let index = 0
    return {
      next: () => {
        if (index < this.names.length) {
          return {
            done: false, value: this.names[index++]
          }
        } else {
          return {
            done: true, value: undefined
          }
        }
      }
    }
  }
}

console.log('iteratorObj', iteratorObj[Symbol.iterator])

// 获取一个迭代器
const iterator001 = iteratorObj[Symbol.iterator]()

console.log('iterator001', iterator001.next())
console.log('iterator001', iterator001.next())
console.log('iterator001', iterator001.next())
console.log('iterator001', iterator001.next())

/**
 * 迭代器对象作用
 * for of
 */

for (const item of iteratorObj) {
  console.log('item', item)
}