// 模板字符串

// 标签模板字符串

// symbol
// 作为对象的 唯一 key
const obj = {
  [Symbol()]: 'aaaa',
  [Symbol()]: 'aaccc',
}
console.log(obj)
// 无法使用 . 语法获取 该key 的 value

// 使用Symbol作为key的属性名,在遍历/Object.keys等中是获取不到这些Symbol值
// 需要Object.getOwnPropertySymbols来获取所有Symbol的key

console.log(Object.getOwnPropertySymbols(obj))
const skeys = Object.getOwnPropertySymbols(obj) // return object
for (const skey of skeys) {
    console.log(obj[skey])
}



