function Set() {
  let items = {};

  this.has = function (value) {
    // return value in items
    return items.hasOwnProperty(value)
  }

  this.add = function (value) {
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  }

  this.remove = function (value) {
    if (this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  }

  this.clear = function () {
    items = {}
  }

  this.size = function () {
    return Object.keys(items).length
  }

  this.values = function () {
    let values = [];
    for (let i = 0; keys = Object.keys(items), i < keys.length; i++) {
      values.push(items[keys[i]])
    }
    return values;
  }

  this.union = function (otherSet) {
    let unionSet = new Set()

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }

    values = otherSet.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    return unionSet
  }

  this.intersection = function (otherSet) {
    let intersectionSet = new Set()

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i])
      }
    }

    return intersectionSet;
  }

  this.difference = function (otherSet) {
    let differenceSet = new Set();

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }
    return differenceSet;
  }

  this.subset = function (otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    } else {
      let values = this.values();
      for (let i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
          return false
        }
      }
      return true
    }
  }
}

let setA = new Set();
setA.add(3);
setA.add(6);
console.log(setA.values())

let setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

console.log(setB.values())

let unionAB = setA.union(setB)
console.log(unionAB.values())

let intersectionSetAB = setA.intersection(setB)
console.log(intersectionSetAB.values())

let differenceAB = setA.difference(setB);
console.log('differenceAB:', differenceAB.values());
let differenceBA = setB.difference(setA);
console.log('differenceBA:', differenceBA.values());


console.log(setA.subset(setB))


