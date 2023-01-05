function makeAdder(count) {
  count = count * 8
  return function (num) {
    return count + num
  }
}

const a = makeAdder(5)
console.log(a(10)) 