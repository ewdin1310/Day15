 
function checkVariableScope() {
    "use strict";
    // Only change code below this line

    let i= "function variable";

    if (true) {
        let i= "function variable";
         i= "block variable";
        
         console.log("Scope i is:", i);
    }
    console.log("Scope i is:", i);
    return i;
}

      // Only change code above this line
       


 
  checkVariableScope();

module.exports =checkVariableScope
  
