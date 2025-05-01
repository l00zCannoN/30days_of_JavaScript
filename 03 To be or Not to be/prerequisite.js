// Object is a collection of key value pairs and functions
// Two types of objects 1. created by Class or contructor 2. Object literals

// Object Literals, when making functions in it no need to write 'function'
var obj = {
  name: "Cannon",
  age: 20,

  greet(name) {
    console.log("GM " + name);
  }
}

console.log(obj);  // { name: 'Cannon', age: 20, greet: [Function: greet] }
obj.greet("Patrick"); // GM Patrick
console.log(obj.age); // 20

// Objects(with multiple functions) within function
function Calc(a){
  const obj = {
    add(b){
      var s1 = a + b
      return s1
    },
    sub(b){
      var s2 = a - b;
      return s2
    }
  }
  return obj;
} // return can be done directly while making obj just like func in func

console.log(Calc(5).add(2)) // 7
console.log(Calc(5).sub(2)) // 3

// if we want multiple functions within function we NEED an object, here is another way to write it

function math(...args){

  function avgofthree(){
    var avg = (args[0] + args[1] + args[2]) / 3;
    return avg;
  }
  function multiply(num){
    var m = args[0] * num;
    return m;
  }

  return obj = {
    avgofthree, multiply
  } 
  // 'obj =' is optional
}

console.log(math(5,20,5).avgofthree())
console.log(math(4).multiply(9))