const names = ['aaa', 'bbb', 'ccc']

const arrIterator = names[Symbol.iterator]()
console.log('arr', arrIterator.next())
console.log('arr', arrIterator.next())
console.log('arr', arrIterator.next())
console.log('arr', arrIterator.next())

// set String argment


/**
 * 应用场景
 */


// 展开运算符

const obj = {
  num: [5, 7, 8],
  [Symbol.iterator]: function () {
    let i = 0
    return {
      next: () => {
        if (i < this.num.length) {
          return {
            done: false, value: this.num[i++]
          }
        } else {
          return {
            done: true
          }
        }
      }
    }
  }
}

const newNames = [...names, ...obj]
console.log('newNames', newNames)

// 解构赋值
const [a, b] = obj
console.log('a,b', a, b)

// promise.all
Promise.all(obj).then((res) => {
  console.log('res', res)
})
