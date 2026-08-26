const removeFromArray = function() {
  let arr = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    ind = arr.indexOf(arguments[i]);
    while (ind != -1) {
      arr.splice(ind, 1);
      ind = arr.indexOf(arguments[i]);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
