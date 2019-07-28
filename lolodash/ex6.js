// include the Lo-Dash library
var _ = require("lodash");


var worker = function ( arguments ) {

     let list = [];
     var group = _.groupBy(arguments, function(argument){
          return argument.username;
     });

     _.forEach(group, function(comment, username){
          list.push({username: username, comment_count: _.size(comment)});
     });

     return list.reverse();

}

// export the worker function as a nodejs module
module.exports = worker

// const _ = require("lodash");
    
//     const commentcount = function (comments) {
    
//         var counted = [];
    
//         // Group by username
//         comments = _.groupBy(comments, "username");
    
//         _.forEach(comments, function (item, name) {
    
//             counted.push({
//                 username: name,
//                 comment_count: _.size(item)
//             });
//         });
    
//         return _.sortBy(counted, "comment_count").reverse();
//         // alternative with a sorted function
//         // return _.sortBy(counted, function(comment) { return -comment.comment_count; });
//     };
    
    
//     Alternative solution with use of 'chain':
    
//     var commentcount = function(comments) {
    
//         return _.chain(comments)
//         .groupBy("username")
//         .map(function(item, name) {
//             return {username: name, comment_count: _.size(item)};
//         })
//         .sortBy(function(counted) {
//             return -counted["comment_count"];
//         });
//     };
    


