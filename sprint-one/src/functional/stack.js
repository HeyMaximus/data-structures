var Stack = function() {
  var someInstance = {
    numOfKeys: 0
  };

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var nextPushKeyNum = someInstance.numOfKeys + 1;
    storage[nextPushKeyNum] = value;
    someInstance.numOfKeys = nextPushKeyNum;
  };

  someInstance.pop = function() {
    var nextPopKeyNum = someInstance.numOfKeys;
    var result = storage[nextPopKeyNum];
    delete storage[nextPopKeyNum];
    someInstance.numOfKeys = nextPopKeyNum - 1;
    if (someInstance.numOfKeys < 0) {
      someInstance.numOfKeys = 0;
    }
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
