var _ = require("lodash");
    
    var worker = function(freelancers) {
        // do work; return stuff
        let performers = {};
        var avg = 0;
        var underperform = [];
        var overperform = [];
        _.forEach(freelancers, function(freelancer){
            avg += freelancer.income;
        });
      
        avg = avg/freelancers.length;

        performers.average = avg;


        _.forEach(freelancers, function(freelancer){
            if(freelancer.income <= avg){
                underperform.push(freelancer);
            }else{
                overperform.push(freelancer);
            }
        });
        
        underperform.sort(function(a, b){
            return a.income - b.income;
        });

        overperform.sort(function(a, b){
            return a.income - b.income;
        });
        return {
                average: avg,
                underperform: underperform,
                overperform: overperform
        }

        
    };


    // const _ = require("lodash");
    
    // const analyze = function (item) {
    
    //     let average;
    //     let underperform;
    //     let overperform;
    
    //     // Sort
    //     item = _.sortBy(item, "income");
    
    //     // Sum of all incomes
    //     average = _.reduce(item, function(sum, num) {
    //         return sum + num.income;
    //     }, 0);
    
    //     // calculate average
    //     average = average / item.length;
    
    //     // filter underperformer
    //     underperform = _.filter(item, function (num) {
    //         return num.income <= average;
    //     });
    
    //     // filter overperformer
    //     overperform = _.filter(item, function (num) {
    //         return num.income > average;
    //     });
    
    //     return {
    //         average: average,
    //         underperform: underperform,
    //         overperform: overperform
    //     };
    
    // };
    

    
    // export the worker function as a nodejs module
    module.exports = worker;