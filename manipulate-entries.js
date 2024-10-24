function filterEntries(obj, func) {
    const entries = Object.entries(obj);
    const filteredEntries = entries.filter(func);
    return Object.fromEntries(filteredEntries);
  }
  
  function mapEntries(obj, func) {
    const entries = Object.entries(obj);
    const mappedEntries = entries.map(function(entry) {
      const [key, value] = func(entry);
      return [key, value];
    });
    return Object.fromEntries(mappedEntries);
  }
  
  function reduceEntries(obj, func, start) {
    if (start === undefined) {
      return Object.entries(obj).reduce(function(acc, [key, value]) {
        return func(acc, [key, value]);
      }, {});
    } else {
      return Object.keys(obj).reduce(function(acc, key) {
        return func(acc, [key, obj[key]]);
      }, start);
    }
  }
  
  function totalCalories(obj) {
    return +reduceEntries(
      obj,
      function(prev, [key, value]) {
        return prev + (nutritionDB[key].calories / 100) * value;
      },
      0
    ).toFixed(1);
  }
  
  function lowCarbs(obj) {
    return filterEntries(obj, function([key, value]) {
      return (nutritionDB[key].carbs / 100) * value < 50;
    });
  }
  
  function cartTotal(obj) {
    return Object.fromEntries(
      Object.entries(obj).map(function([key, value]) {
        return [
          key,
          Object.fromEntries(
            Object.keys(nutritionDB[key]).map(function(prop) {
              return [
                prop,
                +((nutritionDB[key][prop] / 100) * value).toFixed(3)
              ];
            })
          )
        ];
      })
    );
  }
  