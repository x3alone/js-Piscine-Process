function pick(obj, arr) {
    const result = {};
    
    if (typeof arr === 'string'|| !Array.isArray(arr)) {
      arr = [arr];
    }
  
    for (let key of arr) {
      if (obj.hasOwnProperty(key)) {
        result[key] = obj[key];
      }
    }
  
    return result;
  }
  
  function omit(obj, arr) {
    const result = {};
  
    if (typeof arr === 'string' || !Array.isArray(arr)) {
      arr = [arr];
    }
  
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && !arr.includes(key)) {
        result[key] = obj[key];
      }
    }
  
    return result;
  }
//   console.log(pick({name: 'therealisbackthevillisbackflowbananasherenowpeelthis', song: 'port antonio', album: 'the fall off' }, ['song', 'album']))
// console.log(pick({name: 'therealisbackthevillisbackflowbananasherenowpeelthis', song: 'port antonio', album: 'the fall off' }, 'album'))
// console.log(omit({name: 'therealisbackthevillisbackflowbananasherenowpeelthis', song: 'port antonio', album: 'the fall off' }, 'album'))
// console.log(omit({name: 'therealisbackthevillisbackflowbananasherenowpeelthis', song: 'port antonio', album: 'the fall off' }, ['song','album']))
console.log(omit({ something: 5, __proto__: { d: 6 } }, 'something'), {}) // => {}