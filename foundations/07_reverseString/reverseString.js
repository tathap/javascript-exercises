const reverseString = function(input) {
  ret = "";
  for (let i = input.length - 1; i >= 0; i--) {
     ret += input[i];
  }
  return ret; 
};

// Do not edit below this line
module.exports = reverseString;
