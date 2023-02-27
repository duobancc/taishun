function DoublyLinkedList() {
  let Node = function (el) {
    this.el = el;
    this.next = null;
    this.prev = null;
  }
  let length = 0;
  let head = null;
  let tail = null;


  this.insert = function (position, el) {

    if (position >= 0 && position <= length) {

      let node = new Node(el), current = head, previous, index = 0;

      if (position === 0) { //要在头（尾）部插入
        if (!head) { // 初次添加
          head = node;
          tail = node;
        } else { // insert 
          node.next = current;
          current.prev = node; // add 
          head = node;
        }
      } else if (position === length) {
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;

        current.prev = node;
        node.prev = previous;
      }

      length++;
      return true;
    } else {
      return false;
    }
  }

  this.removeAt = function (position) {

    if (position > -1 && position < length) {
      let current = head, previous, index = 0;
      // 移除第一项
      if (position === 0) {
        head = current.next;

        //如果只有一项，更新tail
        if (length === 1) {
          tail = null;
        } else {
          head.prev = null;
        }
      } else if (position === length - 1) { // 最后一项
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        // 
        previous.next = current.next;
        current.next.prev = previous;
      }
      length--;
      return current.el;
    } else {
      return null;
    }
  }

}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.insert(0, '001')
doublyLinkedList.insert(1, '002')
doublyLinkedList.insert(2, '003')
doublyLinkedList.insert(3, '004')
console.log(doublyLinkedList.removeAt(0))
console.log(doublyLinkedList.removeAt(1))




