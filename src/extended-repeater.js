const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options) {
  let a = "";
  let repeatTimes = options.repeatTimes;
  let separator = options.separator;
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator;
  if(typeof str != 'string') {str = String(str); }
  if (repeatTimes === undefined){ repeatTimes = 1;}
  if (separator === undefined){ separator = "+";}
  if (addition === undefined){ addition = "";} 
  if (additionRepeatTimes === undefined){additionRepeatTimes = 1;} 
  if (additionSeparator === undefined){ additionSeparator = "|";}

  for (let i = 0; i < additionRepeatTimes; i++){
    if (i == additionRepeatTimes-1){
      str += addition + separator;
    }else{
      str += addition + additionSeparator;
    }
  }
  for (let i = 0; i < repeatTimes; i++){
    if(i == repeatTimes - 1){
      a += str.substr(0, str.length-separator.length);
    }else{
      a += str;
    }
  }
  return a;
  };
