
function myObject() {
    "use strict";
    
const MATCH_CONSTANTS = {
    E: 2.71828
};
    // Only change code below this line

    // Only change code above this line
    try {
        MATCH_CONSTANTS.E = 23;

    } catch(error) {

        console.log(error.message);
    }
    
   
    
    return MATCH_CONSTANTS.E;
}
const E = myObject();
     
       

module.exports = myObject;
  
