class Queue {
  constructor() {
    this.lastKey = 0;
    this.headKey = 1;
    this.storage = {};
  }

  enqueue(value) {
    var keyToAdd = this.lastKey + 1;
    this.storage[keyToAdd] = value;
    this.lastKey = keyToAdd;
  }

  dequeue() {
    var result = this.storage[this.headKey];
    delete this.storage[this.headKey];
    this.headKey = this.headKey + 1;
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

var madeQueue = new Queue;
