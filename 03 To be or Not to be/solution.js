
var expect = function(val) {
  return {
      toBe(_val){
          if(val === _val) return true
          else throw new Error("Not Equal")
      },
      notToBe(_val){
          if(val !== _val) return true
          else throw new Error("Equal")
      }
  }
};

/**
* expect(5).toBe(5); // true
* expect(5).notToBe(5); // throws "Equal"
*/