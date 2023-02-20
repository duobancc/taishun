
//es7

// Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。ES2016 引入了该方法
const arr = [2, 5, 6]
console.log(arr.includes(5));
// 指数的运算符

// es8 
// Object.values() Object.values() 


const obj = {
  a: 'kkk',
  b: '999'
}
const vas = Object.values(obj)
const ens = Object.entries(obj)
console.log(vas, ens);


const stores = [{ "value": 88, "name": "测试门店1" }, { "value": 85, "name": "技术部领料部" }, { "value": 84, "name": "金浙钣喷维修中心" },
{ "value": 83, "name": "新天地店" }, { "value": 82, "name": "塘萍路拱苑路店" }, { "value": 81, "name": "西城年华店" }, { "value": 80, "name": "城西银泰店" },
{ "value": 79, "name": "文鼎苑店" }, { "value": 78, "name": "拱墅区政府店" }, { "value": 77, "name": "凯旋路店" }, { "value": 74, "name": "领越行店" },
{ "value": 73, "name": "东方福邸店" }, { "value": 72, "name": "景芳路水湘路店" }, { "value": 69, "name": "天目山路店" },
{ "value": 68, "name": "丽水路大浒街店" }, { "value": 0, "name": "总部门店" }]

for (const index of stores.values()) {
    console.log(index)
}







