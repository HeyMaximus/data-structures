var Stack = function() {
  var instance = {
    keyNum: 0,
    storage: {}
  };

  return _.extend(instance, stackMethods);
};

var stackMethods = {};
stackMethods.push = function(value) {
  var keyToPush = this.keyNum + 1;
  this.storage[keyToPush] = value;
  this.keyNum = keyToPush;
};

stackMethods.pop = function() {
  var result = this.storage[this.keyNum];
  delete this.storage[this.keyNum];
  this.keyNum = this.keyNum - 1;
  return result;
};

stackMethods.size = function() {
  var totalKeys = 0;
  for (var keys in this.storage) {
    totalKeys++;
  }
  return totalKeys;
};



