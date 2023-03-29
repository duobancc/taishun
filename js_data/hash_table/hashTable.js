function HashTable() {
  let table = []

  const loseloseHashCode = function (key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  }

  this.put = function (key, value) {
    const position = loseloseHashCode(key)
    console.log(position + '-' + key)
    table[position] = value;
  }

  this.get = function (key) {
    return table[loseloseHashCode(key)]
  }

  this.remove = function (key) {
    table[loseloseHashCode[key]] = undefined
  }

  this.print = function () {
    for (let i = 0; i < table.length; ++i) { //{1} 
      if (table[i] !== undefined) { //{2} 
        console.log(i + ": " + table[i]);//{3} 
      }
    }
  };

}

const hashtable = new HashTable()

hashtable.put('Gandalf', 'gandalf@email.com');
hashtable.put('John', 'johnsnow@email.com');
hashtable.put('Tyrion', 'tyrion@email.com');

console.log(hashtable.get('Gandalf'));
console.log(hashtable.get('Loiane'));