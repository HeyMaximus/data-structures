var LinkedList = function() {
  var list = {};
  list.head = null; //update
  list.tail = null; //update

  list.addToTail = function(value) {
    // newNode: {'value': value}
    // newNode.value
    var newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    if (!list.head) {
      return;
    } else {
      var result = list.head.value;
      list.head = list.head.next;
      //delete previous head???
      return result;
    }
  };

  list.contains = function(target) {
    var status = false;
    var searchTarget = list.head;
    while (!status && searchTarget) {
      if (searchTarget.value === target) {
        return true;
      } else {
        searchTarget = searchTarget.next;
      }
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
