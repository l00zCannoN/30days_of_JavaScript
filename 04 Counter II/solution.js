var createCounter = function(init) {
  let i = init
  return {
      increment(){
          return ++init;
      },
      decrement(){
          return --init;
      },
      reset() {
          init = i
          return init;
      }
  }
};

/**
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/