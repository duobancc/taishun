// ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

const set = new Set()
const arr = [2, 5, 6, 7, 9, 2, 7, '7']
// 向 Set 加入值的时候，不会发生类型转换，
arr.forEach(n => set.add(n))
console.log([...set]);

// Set函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化

const set1 = new Set(arr)
console.log([...set1]);
// 去除字符串里面的重复字符。
console.log([...new Set('ababcdb')]);

//实现并集（Union）、交集（Intersect）和差集（Difference）。
let a = new Set([1, 2, 3])
let b = new Set([4, 3, 2])

// 并集
let union = new Set([...a, ...b])
console.log(union);

// 交集
let intersect = new Set([...a].filter(x => b.has(x)))
console.log(intersect)

// a相对b的差集
let difference = new Set([...a].filter(x => !b.has(x)))
console.log(difference);


// WeakSet

//WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。
//首先，WeakSet 的成员只能是对象，而不能是其他类型的值