// Constructor Array
let a = new Array(2,3,"hello",5,false)
console.log(a) // [ 2, 3, 'hello', 5, false ]

let b = new Array(3) // size 3 array
b[0] = 1
b[1] = 2
b[2] = 3

// Array Traversal
for(let i = 0; i < b.length; i++){
  console.log(b[i])
}
  // 1
  // 2
  // 3

// In JS Arrays can store multiple data types at once, even objects
// Literal Array
let mixed = [4, 5, 6, true, null, {name:"Raj", age: 19}]

// Map in-built function
var num = [1,2,3,4,5]
var num2 = num.map(fun)

function fun(n){
  return n+1
}

// different way to write
// var num2 = num.map((n) => {
//   return n+1
// })
console.log(num2) // [ 2, 3, 4, 5, 6 ]

// map() function syntax -> array.map(function(currentvalue, index, arr))
// currentvalue (must) = value of current element of the operated array
// index (optional) = represents index of currentvalue


