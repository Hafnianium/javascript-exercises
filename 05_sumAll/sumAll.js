const sumAll = function(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    let differenceBetween = firstNumber - secondNumber
    let sequentialSum = 0
    for (i = 0; i < differenceBetween; i++) {
      sequentialSum += i
    }
    sequentialSum += firstNumber + secondNumber - 1
    return sequentialSum
  } else if (firstNumber < secondNumber) {
      let differenceBetween = secondNumber - firstNumber
      let sequentialSum = 0
      for (i = 0; i < differenceBetween + 1; i++) {
        sequentialSum += i
    }
    sequentialSum += firstNumber + secondNumber - 1
    return sequentialSum
  } else if (firstNumber = secondNumber) {
      let sequentialSum = 0
      sequentialSum += firstNumber + secondNumber
      return sequentialSum
  }
  
  
};

// Do not edit below this line
module.exports = sumAll;
