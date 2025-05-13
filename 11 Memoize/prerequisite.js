function square(n){
  return n*n
}

function memoize(func){
  let cache = {}
  return function(...args){
    let n = args[0]
    if(n in cache){
      return cache[n]
    }
    else{
      cache[n] = func(n)
      return cache[n]
    }
  }
}

console.time()
let efficientResult = memoize(square)
console.log(efficientResult(5))
console.timeEnd()

console.time()
console.log(efficientResult(5))
console.timeEnd()

// Output (look at the time saved due to memoize)
// 25
// default: 6.577ms
// 25
// default: 0.22ms