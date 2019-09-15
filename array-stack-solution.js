//STACKS - ARRAY

class ArrayStack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  //use pre-built array methods
  push(value) {
    this.array.push(value);
  }
  pop() {
    this.array.pop();
  }
  isEmpty() {
    //check if Stack is empty
    return this.array.length === 0;
  }
}

//check if Stack works
const myArrayStack = new ArrayStack();
myArrayStack.push("winnie");
myArrayStack.push("buddy");
myArrayStack.push("george");
myArrayStack.push("thaisa");
myArrayStack.peek();
myArrayStack.pop();
console.log("myArrayStack", myArrayStack);
