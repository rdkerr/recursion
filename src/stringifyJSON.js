// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {  
  if (obj === null) {
    return 'null';
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'number') {
    return obj.toString();
  } else if (typeof obj === 'boolean') {
    if (obj) {
      return 'true';
    } else {
      return 'false';
    }
  } else if (obj === undefined) {
    return '';
  } else if (typeof obj === 'funciton') {
    return '';
  } else if (Array.isArray(obj)) {
    let result = '[';
    let comma = false;
    for (let index = 0 ; index < obj.length ; index ++) {
      if (!comma) {
        comma = !comma;
      } else {
        result += ',';
      }
      result += stringifyJSON(obj[index]);
    }
    return result + ']';
  } else if (typeof obj === 'object') {
    let result = '{';
    let comma = false;
    for (let key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }
      if (!comma) {
        comma = !comma;
      } else {
        result += ',';
      }
      
      result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]); 
    }
    return result + '}';
  } else {
    return '';
  }
};
