/**
 * 一种遍历集合的接口
 * 提供统一的方式来访问集合中的元素（next()）
 */

/**
 * 迭代器是一个对象
 * 符合迭代器协议
 */

const list = ["abc", 'wmk', 'pdq']

let index = 0
const listIterator = {
  next: function () {
    if (index < list.length) {
      return {
        done: false, value: list[index++]
      }
    } else {
      return {
        done: true, value: undefined
      }
    }
  }
}

console.log('lista', listIterator.next())
console.log('lista', listIterator.next())
console.log('lista', listIterator.next())
console.log('lista', listIterator.next())