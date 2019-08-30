//QUEUE - LINKED LIST

class Node {
  constructor(value) {
    //node properties
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    //list properties
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    //return first item in the queue
    return this.first;
  }
  enqueue(value) {
    //add value to queue
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }
  dequeue() {
    //remote value from queue
    if (!this.first) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
  isEmpty() {
    //check if queue is empty
    return this.length === 0;
  }
}

//check if QUEUE works
const myQueue = new Queue();
// myQueue.enqueue("winnie");
// myQueue.enqueue("buddy");
// myQueue.enqueue("george");
// myQueue.enqueue("thaisa");
// myQueue.dequeue();
console.log("myQueue", myQueue);
