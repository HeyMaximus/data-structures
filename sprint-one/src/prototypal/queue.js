var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.lastKey = 0;
  instance.headKey = 1;
  instance.storage = {};
  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    var keyToAdd = this.lastKey + 1;
    this.storage[keyToAdd] = value;
    this.lastKey = keyToAdd;
  },
  dequeue: function() {
    var result = this.storage[this.headKey];
    delete this.storage[this.headKey];
    this.headKey = this.headKey + 1;
    return result;
  },
  size: function() {
    var totalKeys = 0;
    for (var keys in this.storage) {
      totalKeys++;
    }
    return totalKeys;
  }
};


