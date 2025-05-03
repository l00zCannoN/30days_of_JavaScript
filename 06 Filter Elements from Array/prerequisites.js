const ages = [19, 12, 23, 21, 5]
const result = ages.filter(checkAdult)

function checkAdult(age){
  return age >= 18
}

console.log(result) // [ 19, 23, 21 ]

// filter() function syntax -> array.filter(function(currentvalue, index, arr))