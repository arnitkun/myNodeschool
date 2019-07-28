var _ = require("lodash");
    
var worker = function(cities) {
    // do work; return stuff
    let ob = {
        hot: [],
        warm: []
    }

    _.forEach(cities, function(temps, city){
    
        // console.log(temps, city);

        _.every(temps, temp => {
            if(temp > 19){
                ob.hot.push(city);
            }
        });
        
        if(isWarm(temps) && !ob.hot.includes(city)){
            ob.warm.push(city);
        }
     
        
    });

    
    
    return ob;
}

function isWarm(temps){

    return _.some(temps, temp => {
    if(temp > 19){
        return true;
    }else{
        return false;
    }});
} 


  

// export the worker function as a nodejs module
module.exports = worker;