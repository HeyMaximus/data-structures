var Queue = function() {
  var someInstance = {
    currentHead: 1,
    lastKey: 0
  };

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var enqueueKey = someInstance.lastKey + 1;
    storage[enqueueKey] = value;
    someInstance.lastKey = enqueueKey;
  };

  someInstance.dequeue = function() {
    var result = storage[someInstance.currentHead];
    delete storage[someInstance.currentHead];
    someInstance.currentHead = someInstance.currentHead + 1;
    return result;
  };

  someInstance.size = function() {
    var keyTotal = 0;
    for (var key in storage) {
      keyTotal++;
    }
    return keyTotal;
  };

  return someInstance;
};
