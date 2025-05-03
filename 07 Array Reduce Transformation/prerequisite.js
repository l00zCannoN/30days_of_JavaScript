let arr = [1, 2, 3, 4, 5]
let sum = arr.reduce(addNum)

function addNum(a,b){
  return a + b
}

console.log(sum) // 15

// reduce returns a single value
// Syntax : arr.reduce(function(total, currentValue, arrayIndex, arr))
// total and currentvalue of array index must, every time function returns it stores in total for next iteration
// by default total has arr[0]