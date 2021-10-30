const leapYears = function(possibleLeapYear) {
  if (possibleLeapYear % 4 == 0 && possibleLeapYear % 400 == 0 && possibleLeapYear % 100 == 0) {
    return true
  } else if (possibleLeapYear % 4 == 0 && possibleLeapYear % 100 == 0) {
    return false
  } else if (possibleLeapYear % 4 == 0 && possibleLeapYear % 100 != 0) {
    return true
  } else {
    return false
  }
};

// Do not edit below this line
module.exports = leapYears;
