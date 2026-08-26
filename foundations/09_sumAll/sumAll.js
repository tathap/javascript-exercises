const sumAll = function(a, b) {
  if (typeof a != "number" || typeof b != "number") {
    return "ERROR";
  }

  if (a <= 0 || b <= 0 || Math.floor(a) != a || Math.floor(b) != b) {
    return "ERROR";
  }

  if (a > b) {
    let tem = a;
    a = b;
    b = tem;
  }

  let ans = (b + a) * (b - a + 1) / 2;
  return ans; 
};

// Do not edit below this line
module.exports = sumAll;
