// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function (json) {
  // your code goes here  
  console.log(json);
  json = json.trim();
  if (isArray(json)) {
    let result = [];
    if (json.length === 2) {
      return result;
    }
    let elements = json.slice(1, json.length - 1).split(',');
    //console.log("Before");
    //console.log(elements);
    result = elements.map(parseJSON);
    //console.log(result);
    return result;
  } else if (isObj(json)) {
    let result = {};
    if (json.length === 2) {
      return result;
    }
    let elements = json.slice(1, json.length - 1).split(',');
    console.log(elements);
    //let other = split(json.slice(1, json.length - 1), ',');
    //console.log(other);
    for (let i = 0; i < elements.length; i++) {
      let keyValue = elements[i].split(':');
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

var split = function (str, delim) {
  var result = [];
  if (str.indexOf(delim) < 0) {
    result.push(str);
  } else {
    let begin = 0;
    let end = 0;
    while (end < str.length) {
      let nextQuote = str.indexOf('"', end);
      let nextDelim = str.indexOf(delim, end);
      if (nextQuote < nextDelim) {
        while (nextQuote < nextDelim) {
          nextQuote = str.indexOf('"', nextQuote + 1);
        }
        nextDelim = str.indexOf(delim, nextQuote + 1);
      }
      result.push(str.slice(begin, nextDelim));
      begin = nextDelim + 1;
    }
    end = nextDelim + 1;
  }
  return result;
};

var isString = function (str) {
  return str[0] === '"' && str[str.length - 1] === '"' ||
    str[0] === '\'' && str[str.length - 1] === '\'';
};

var isNumber = function (num) {
  return !isNaN(num);
};

var isArray = function (array) {
  return array[0] === '[' && array[array.length - 1] === ']';
};

var isObj = function (obj) {
  return obj[0] === '{' && obj[obj.length - 1] === '}';
};

