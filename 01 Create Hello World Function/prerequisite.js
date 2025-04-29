// functions = in-built(like console.log) or made by us

// normal function
function f(a,b){  // a,b are parameters
  const sum = a + b; // const once initialized cannot be changed,
  return sum;
}
console.log(f(2,4)); // 6 , here 2,4 are arguments

// Anonymous function 
let A = function(a,b){  // let scope in block, var scope is global
  const sum = a * b;
  return sum;
}
console.log(A(2,4)); // 8

// Immediate Invoke (calls functions as soon as defining it)
let B = function(a,b){
  let sum = a + b;
  return sum;
}(2,3)
console.log(B); // 5

// Arrow function (no need to write the 'function' key word)
let C = (a,b) => {
  const sum = a + b;
  return sum;
}
console.log(C(5,5)); // 10

// Function within Function (only in JS)
/*
function fun(c){
  return function(a,b){ // optional to name function within function
    return (a+b+c);
  }
}
var num = fun(5);
console.log(num(3,1)); // 9
*/

// another way to write it
function fun(c){
  function E(a,b){ // optional to name function within function
    return (a+b+c);
  }
  return E;
}
var num = fun(5);
console.log(num(3,1)); // 9

// Ommit Return (in case of single line functions)
let G = (a,b) => a+b;
console.log(G(3,4));

// ...args helps take in any number of input as array elements
function multiply(...args){
  const m = args[0] * args[1];
  return m;
}
console.log(multiply(5,3));
