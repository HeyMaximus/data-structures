var Stack = function() {
  this.keyNum = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var keyToPush = this.keyNum + 1;
  this.storage[keyToPush] = value;
  this.keyNum = keyToPush;
};

Stack.prototype.pop = function() {
  var result = this.storage[this.keyNum];
  delete this.storage[this.keyNum];
  this.keyNum = this.keyNum - 1;
  return result;
};

Stack.prototype.size = function() {
  var totalKeys = 0;
  for (var keys in this.storage) {
    totalKeys++;
  }
  return totalKeys;
};

var newStack = new Stack;