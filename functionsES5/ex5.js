function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) { //true if all submitted belong in goodlist 
      // SOLUTION GOES HERE
      return submittedUsers.every(function (submit){
          return goodUsers.some(function(good){
            return submit.id === good.id;
          
        });
      });
    }
}
  
  
  module.exports = checkUsersValid