var createCounter = function(n) {
    
  let counter = n; // basically in JS it keeps the context of previous calls, remebering the value of counter in the prev calls in context to that specific paramenter
  return function() {
      return counter++;
  };
};

/** 
* const counter = createCounter(10)
* counter() // 10
* counter() // 11
* counter() // 12
*/