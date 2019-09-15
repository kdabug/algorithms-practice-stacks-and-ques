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
  }
  peek() {
    //return first item in the queue
  }
  enqueue(value) {
    //add value to queue
  }
  dequeue() {
    //remote value from queue
  }
  isEmpty() {
    //check if queue is empty
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
