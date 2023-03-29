var Queue = function() {
  this.lastKey = 0;
  this.headKey = 1;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  var keyToAdd = this.lastKey + 1;
  this.storage[keyToAdd] = value;
  this.lastKey = keyToAdd;
};

Queue.prototype.dequeue = function() {
  var result = this.storage[this.headKey];
  delete this.storage[this.headKey];
  this.headKey = this.headKey + 1;
  return result;
};

Queue.prototype.size = function() {
  var totalKeys = 0;
  for (var keys in this.storage) {
    totalKeys++;
  }
  return totalKeys;
};

var newQueue = new Queue;