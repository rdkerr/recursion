// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// You should use document.body, element.childNodes, 
// and element.classList
var getElementsByClassName = function(className) {
  // your code here
  var result = [];
  if (className === null) {
    return result;
  }
  var nodes = [];
  nodes.push(document.body);
  while (nodes.length > 0) {
    let len = nodes.length;
    for (let i = 0; i < len; i ++) {
      let node = nodes.shift();
      if (node.classList[0] === className || node.classList[1] === className) {
        result.push(node);
      }
      for (let kid of node.children) {
        nodes.push(kid);
      }
    }
  }
  return result;
};
