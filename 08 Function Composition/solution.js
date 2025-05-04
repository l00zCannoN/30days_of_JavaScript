// Remember they are passing an array of functions not multiple functions like ...args

var compose = function(functions) {
    
  return function(x) {
      let n = functions.length
      for(let i = n-1; i >= 0; i--){
          x = functions[i](x)
      }
      return x
  }

//different write up same logic

//   return function(x) {
//     for(const fn of functions.reverse()) // traversing array
//     {
//         x = fn(x)
//     }
//     return x
// }
};

// using reduce() on functions array
// current value is actually a function as 'functions' is array of functions
// reduceRight executes functions in reverse order of array

// var compose = function(functions) {
    
//   var fn = (accumulator, currentval) => {
//       return currentval(accumulator)
//   }
//   return function(x) {
//       return functions.reduceRight(fn, x)
//   }
// };



