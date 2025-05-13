function memoize(fn) {
    
    let cache = {};
    return function(...args) {

        let n = JSON.stringify(args)
        // Converts array of inputs into string like [2,2] => "22"
        if(n in cache){
            return cache[n]
        }
        else{
            cache[n] = fn(...args)
            // cache[n] = fn.apply(this, args)
            // returning value of fn after applying multiple args in it
            return cache[n]
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */