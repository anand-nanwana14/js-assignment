// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  const result = {};

  function recurse(obj, currentKey = '') {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = currentKey ? `${currentKey}.${key}` : key;

             if (typeof obj[key] === 'object' && obj[key] !== null) {
              recurse(obj[key], newKey);
          } else {
              result[newKey] = obj[key];
              }
          }
      }
  }

  
  recurse(unflatObject);
  return result;
  }