// include the Lo-Dash library
var _ = require("lodash");
    
var worker = function(cities){
    _.forEach(cities, function(city, idx, cities){
        if(city.population > 1){
            city.size = 'big';
        }else if(city.population < 1 && city.population > 0.5 ){
            city.size = 'med';
        } else if(city.population < 0.5 && city.population > 0){
            city.size = 'small';
        }
    });
    //  console.log(cities);
     return cities;
}
    


// export the worker function as a nodejs module
module.exports = worker;
