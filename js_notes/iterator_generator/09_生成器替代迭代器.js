
// 生成器函数生成迭代器
function* createArrayIterator(arr) {

  // 写法二 后面需要可迭代对象
  yield* arr

  // 写法一
  // for (const item of arr) {
  //   yield item
  // }
}

const names = ['abc', 'cba', 'nba']

const arrIterator = createArrayIterator(names)

console.log('arrIterator.next()', arrIterator.next())
console.log('arrIterator.next()', arrIterator.next())
console.log('arrIterator.next()', arrIterator.next())
console.log('arrIterator.next()', arrIterator.next())


// 迭代一个范围内的数字的函数

function* createRangeIterator(start, end) {

  // 一
  // let index = start
  // return {
  //   next: () => {
  //     if (index < end) {
  //       return { done: false, value: index++ }
  //     } else {
  //       return { done: true }
  //     }
  //   }
  // }

  // 二
  let index = start
  while (index < end) {
    yield index++
  }

}

const rangeIterator = createRangeIterator(10, 20)

console.log('rangeIterator', rangeIterator.next())
console.log('rangeIterator', rangeIterator.next())
console.log('rangeIterator', rangeIterator.next())
console.log('rangeIterator', rangeIterator.next())

// class

class ClassRoom {
  constructor(addr, name, stus) {
    this.addr = addr
    this.name = name
    this.stus = stus
  }
  entry(newstu) {
    this.stus.push(newstu)
  }
  [Symbol.iterator] = function* () {
    yield* this.stus
  }
}

const classroom = new ClassRoom('12幢4单元501', '湖墅新村', [
  '老王', '老李', '小陈', 'jack'
])

classroom.entry('红姐')

// 中断迭代
for (const stu of classroom) {
  console.log('stu', stu)
}

