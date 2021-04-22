const keysMatch = function(obj1, obj2, keys) {

  for( let i = 0; i < keys.length; i ++ ) {
    let testKey = keys[i];

  
    if (obj1[testKey] !== obj2[testKey]) {
      return false; 
    } 

  }

  return true;
};    


console.log(keysMatch({a: 1, b: 2}, {a: 1}, ['a'])); // => true
console.log(keysMatch({a: 1, b: 2}, {a: 1}, ['a', 'c'])); // => true
console.log(keysMatch({a: 1, b: 2}, {a: 1}, ['a', 'b'])); // => false