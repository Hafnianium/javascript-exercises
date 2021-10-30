const sumAll = function(firstNumber, secondNumber) {
  if (typeof(firstNumber) != "number" || typeof(secondNumber) != "number") {
    return "ERROR"
  } else if (firstNumber < 0 || secondNumber < 0) {
    return "ERROR"
  } else if (firstNumber == secondNumber) {
    return firstNumber + secondNumber
  } else {
    let differenceBetween = Math.abs(firstNumber - secondNumber)
    let sequentialSum = 0
    for (i = 0; i < differenceBetween; i++) {
      sequentialSum += (differenceBetween - i)
    }
    sequentialSum += (firstNumber + secondNumber -1)
    return sequentialSum
  }
};

// Do not edit below this line
module.exports = sumAll;
