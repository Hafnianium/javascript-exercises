const sumAll = function(firstNumber, secondNumber) {
  if (firstNumber == secondNumber) {
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
