
function* foo() {
  console.log('start------------------')

  try {
    yield '001'
  } catch (error) {
    yield '004'
    console.log('001：', error)
  }

  try {
    yield '002'
  } catch (err) {
    yield '006'
    console.log('002：', err)
  }


  yield '003'
}

const generator = foo()
console.log(generator.next())
console.log(generator.throw('error 001'))
// console.log(generator.throw('error 002'))
console.log(generator.return(888))


