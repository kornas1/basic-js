const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  if (typeof sampleActivity!="string") {return false}
  let activity=Number(sampleActivity)
  if ((activity>0)&&(activity<MODERN_ACTIVITY)) {
    return Math.ceil(Math.log(MODERN_ACTIVITY/activity)*HALF_LIFE_PERIOD/0.693)
  }
     else {return false}
};

