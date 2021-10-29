const removeFromArray = function(givenArray, valueToRemove) {
  let myArray = givenArray;
  let index = myArray.indexOf(valueToRemove);
  myArray.splice(index, 1);
  return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
