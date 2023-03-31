

// Instantiate a new graph
var Graph = function() {
  this.graphContainer = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (this.graphContainer[node]) {
    console.log('Node already exists.');
    return;
  } else {
    this.graphContainer[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.graphContainer[node]) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var edgeArray = this.graphContainer[node];
  if (!edgeArray) {
    return;
  }
  delete this.graphContainer[node];
  for (var i = 0; i < edgeArray.length; i++) {
    var targetNode = edgeArray[i];
    var indexToRemove = this.graphContainer[targetNode].indexOf(node);
    this.graphContainer[targetNode].splice(indexToRemove, 1);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var arrayToCheck = this.graphContainer[fromNode];
  return arrayToCheck && arrayToCheck.indexOf(toNode) !== -1;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var arrayFromNode = this.graphContainer[fromNode];
  if (arrayFromNode && arrayFromNode.indexOf(toNode) === -1 && this.graphContainer[toNode]) {
    arrayFromNode.push(toNode);
    this.graphContainer[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var arrayFromNode = this.graphContainer[fromNode];
  var arrayToNode = this.graphContainer[toNode];
  if (!arrayFromNode) {
    return;
  }
  var indexToRemove = arrayFromNode.indexOf(toNode);
  if (indexToRemove !== -1 && arrayToNode) {
    arrayFromNode.splice(indexToRemove, 1);
    indexToRemove = arrayToNode.indexOf(fromNode);
    arrayToNode.splice(indexToRemove, 1);
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var keys in this.graphContainer) {
    cb(Number(keys));
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


