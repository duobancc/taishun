class ClassRoom {

  constructor(addr, name, stus) {
    this.addr = addr
    this.name = name
    this.stus = stus
  }

  entry(newstu) {
    this.stus.push(newstu)
  }

  [Symbol.iterator]() {
    let i = 0
    return {
      next: () => {
        if (i < this.stus.length) {
          return {
            done: false, value: this.stus[i++]
          }
        } else {
          return {
            done: true, value: undefined
          }
        }
      },
      return: () => {
        console.log('跳出迭代')
        return {
          done: true, value: undefined
        }
      }
    }
  }
}

const classroom = new ClassRoom('12幢4单元501', '湖墅新村', [
  '老王', '老李', '小陈', 'jack'
])

classroom.entry('红姐')

// 中断迭代
for (const stu of classroom) {
  console.log('stu', stu)
  if (stu === 'jack') break
}

