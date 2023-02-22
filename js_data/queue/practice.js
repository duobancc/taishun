function hotPotato(nameList, num) {
  debugger
  let queue = new Queue()
  nameList.forEach(item => {
    queue.enqueue(item)
  });

  let eliminated = '';
  console.log(queue.size())
  debugger
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminated = queue.dequeue()
    console.log(eliminated + '被淘汰了....')
  }
  return queue.dequeue()
}

let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
let winner = hotPotato(names, 7);
console.log('The winner is: ' + winner); 
