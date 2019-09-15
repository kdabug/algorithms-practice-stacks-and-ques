// This priority queue is implemented as a Linked List
class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.next = null;
  }
}

class priorityQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(data, priority) {
    const newNode = new Node(data, priority);
    if (!this.last) {
      //write this after line 21 if statement
      this.last = newNode;
    }
    if (!this.first || this.first.priority <= priority) {
      const oldFirst = this.first;
      this.first = newNode;
      this.first.next = oldFirst;
      this.length++;
      return this;
    }
    let walker = this.first;
    console.log("walker", walker);
    while (walker.next && walker.next.priority > priority) {
      walker = walker.next;
    }
    if (walker.next === null) {
      this.last = newNode;
    }
    const oldNext = walker.next;
    walker.next = newNode;
    newNode.next = oldNext;

    this.length++;
  }
  peek() {
    return this.first;
  }
  dequeue() {
    const oldFirst = this.first;
    const newFirst = this.first.next;
    if (this.first === this.last) {
      this.last = null;
    }
    oldFirst.next = null;
    this.first = newFirst;
    this.length--;
    return oldFirst;
  }
  isEmpty() {
    //check if Queue is empty
    return this.length === 0;
  }
}

//check if Queue works
const myPriorityQueue = new priorityQueue();
myPriorityQueue.enqueue("winnie", 2);
myPriorityQueue.enqueue("buddy", 1);
myPriorityQueue.enqueue("george", 10);
myPriorityQueue.enqueue("thaisa", 0);

myPriorityQueue.dequeue();
myPriorityQueue.dequeue();
console.log("myPriorityQueue", myPriorityQueue);
