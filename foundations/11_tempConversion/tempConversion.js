const convertToCelsius = function(temp) {
  let ret = (+temp - 32) / (9/5);
  if (Math.floor(ret) === ret) {
    return ret;
  }
  return +ret.toFixed(1);
};

const convertToFahrenheit = function(temp) {
  let ret = (+temp * 9 / 5) + 32;
  if (Math.floor(ret) === ret) {
    return ret;
  }
  return +ret.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
