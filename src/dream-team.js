const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let team=[]
  if(members==null){return false} 
for (let i=0;i<members.length;i++){   
  if (typeof members[i]=="string"){    
    team.push(members[i].replace(/ /g,"").slice(0,1).toUpperCase())
  }  
}
return team.sort().join("")
}
