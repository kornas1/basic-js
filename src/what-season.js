const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) { 
    return 'Unable to determine the time of year!';
  }
  const x = Date.prototype.getMonth.call(date);
  if (x === 11 || x===1 || x==0) return 'winter';
  if (x <= 4 && x>=2) return 'spring';
  if (x <= 7 && x>=5) return 'summer';
  if (x <= 10 && x>=8) return 'autumn';
};
