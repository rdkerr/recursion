// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here  
  console.log(json);
  if (isArray(json)) {
    let result = [];
    if (json.length === 2) {
      return result;
    }

    return result;
  } else if (isObj(json)) {
    let result = {};
    if (json.length === 2) {
      return result;
    }
    let elements = json.slice(1, json.length - 1).split(',');
    for (let i = 0; i < elements.length; i ++) {
      let keyValue = elements[i].split(': ');
      result[parseJSON(keyValue[0])] = parseJSON(keyValue[1]);
    }
    return result;
  } else if (isNumber(json)) { 
    return +json;
  } else if (isString(json)) {
    return json.slice(1, json.length - 1);
  } else if (json === 'null') { 
    return null;
  } else if (json === 'false') { 
    return false;
  } else if (json === 'true') { 
    return true;
  } else if (json === 'undefined') { 
    return undefined;
  }
  throw new SyntaxError('Unexpected end of input');
};

var isString = function(str) {
  return str[0] === '"' && str[str.length - 1] === '"' || 
    str[0] === '\'' && str[str.length - 1] === '\''; 
};

var isNumber = function(num) {
  return !isNaN(num);
};

var isArray = function(array) {
  return array[0] === '[' && array[array.length - 1] === ']';
};

var isObj = function(obj) {
  return obj[0] === '{' && obj[obj.length - 1] === '}';
};