module.exports = function filterForNumbers(iterable) {
    // loop over iterable, adding numeric values to a new array
    // then return the new array of numbers
    var itr = iterable[Symbol.iterator]();
    let arr = [];
    for(itr of iterable){
        if(typeof (itr) == 'number'){
        arr.push(itr);
        }
    }

    return arr;
  }