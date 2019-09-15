//QUEUE - LINKED LIST

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    //return first item in the queue
    console.log("hey you're peeking at", this.first);
    return this.first;
  }
  enqueue(value) {
    //add to queue
    //create new Node
    const newNode = new Node(value);
    //check if this is the last item added in the queue
    //if it is last item, set first and last Queue properties
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      //value is not first node added to stack
      //replace top item with value
      //add link to previous top item
      const holdingPointer = this.last;
      this.last.next = newNode;
      this.last = newNode;
    }
    //add to length
    this.length++;
    return this;
  }
  dequeue() {
    //if there is no first item, return null
    if (!this.first) {
      return null;
    }
    //need to remove the last property
    //once the stack has only one value left;
    if (this.first === this.last) {
      this.last = null;
    }
    //prevent JS garbage collection by storing first in a variable
    //const holdingPointer = this.first
    this.first = this.first.next;
    this.length--;
    return this;
  }
  isEmpty() {
    //check if Stack is empty
    return this.length === 0;
  }
}

//check if Stack works
const myQueue = new Queue();
myQueue.enqueue("winnie");
myQueue.enqueue("buddy");
myQueue.enqueue("george");
myQueue.enqueue("thaisa");
myQueue.dequeue();
console.log("myQueue", myQueue);
