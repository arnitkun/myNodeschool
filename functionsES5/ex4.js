
function getShortMessages(messages) {
    // SOLUTION GOES HERE
    let list = [];
    
    messages.filter( function(elem){
        if(elem.message.length < 50){
            list.push(elem.message);
        }
    }); 
        return list;
  }
  
  module.exports = getShortMessages