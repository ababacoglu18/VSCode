/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var count = init;
  
    function increment() {
      count++;
      console.log(count);
    }
  
    function decrement() {
      count--;
      console.log(count);
    }
  
    function reset() {
      count = init;
      console.log(count);
    }
  
    return {
      increment: increment,
      decrement: decrement,
      reset: reset
    };
  };
  
  const counter = createCounter(5);
  counter.increment(); // 6
  counter.decrement(); // 5
  counter.reset(); // 5
  
   