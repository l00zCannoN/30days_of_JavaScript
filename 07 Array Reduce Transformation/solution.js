var reduce = function(nums, fn, init) {
  var val = init
  for(let i = 0; i < nums.length; i++){
      val = fn(val, nums[i])
  }
  return val
};