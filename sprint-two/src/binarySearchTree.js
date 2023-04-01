var BinarySearchTree = function(value) {
  var _storage = Object.create(BinarySearchTree.methodes);
  _storage.left = null;
  _storage.right = null;
  _storage.value = value;
  return _storage;
};

BinarySearchTree.methodes = {};

BinarySearchTree.methodes.insert = function(value) {
  var rootNode = this;
  var newNode = BinarySearchTree(value);
  while (rootNode) {
    if (value < rootNode.value) {
      if (!rootNode.left) {
        rootNode.left = newNode;
        return;
      }
      rootNode = rootNode.left;
    } else if (value > rootNode.value) {
      if (!rootNode.right) {
        rootNode.right = newNode;
        return;
      }
      rootNode = rootNode.right;
    }
  }
};

BinarySearchTree.methodes.contains = function(value) {
  var rootNode = this;
  while (rootNode) {
    if (value < rootNode.value) {
      rootNode = rootNode.left;
    } else if (value > rootNode.value) {
      rootNode = rootNode.right;
    } else {
      return true;
    }
  }
  return false;
};

BinarySearchTree.methodes.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
