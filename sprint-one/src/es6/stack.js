class Stack {
  constructor() {
    this.keyNum = 0;
    this.storage = {};
  }

  push(value) {
    var keyToPush = this.keyNum + 1;
    this.storage[keyToPush] = value;
    this.keyNum = keyToPush;
  }

  pop() {
    var result = this.storage[this.keyNum];
    delete this.storage[this.keyNum];
    this.keyNum = this.keyNum - 1;
    return result;
  }

  size() {
    var totalKeys = 0;
    for (var keys in this.storage) {
      totalKeys++;
    }
    return totalKeys;
  }
}

var madeStack = new Stack;