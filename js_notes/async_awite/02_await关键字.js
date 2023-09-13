
async function foo() {

  const a = await 123
  console.log('a', a)
  console.log('001')

  const b = await 999
  console.log('b', b)
  console.log('002')

}

foo()
console.log('002')


