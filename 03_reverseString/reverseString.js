const reverseString = function(str) {
  let stringList = str.split("")
  let stringArray = Array.from(stringList)
  let reversedArray = stringArray.reverse()
  let reversedString = reversedArray.join("")
  return reversedString
};

// Do not edit below this line
module.exports = reverseString;
