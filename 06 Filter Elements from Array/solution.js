var filter = function(arr, fn) {
  var newArr = []
  for(let i = 0; i < arr.length; i++){
      if(fn(arr[i], i)){
          newArr.push(arr[i])
      }
  }
  return newArr
};