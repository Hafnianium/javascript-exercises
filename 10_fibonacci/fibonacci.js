const fibonacci = function(x) {
  if (x < 0) {
    return "OOPS"
  }
  if (x == 1) {
    return 1
  } else if (x == 2) {
    return 1
  } else {
      let fibonacciSequence = [0, 1, 1]
      for (i = 3; i < x + 1; i++) {
        fibonacciSequence[i] = fibonacciSequence[i-1] + fibonacciSequence[i-2]
      }
    return fibonacciSequence[x]
  }
};

// Do not edit below this line
module.exports = fibonacci;
