const removeFromArray = function(givenArray, ...valuesToRemove) {
  let myArray = givenArray;
  for (let i = 0; i < valuesToRemove.length; i++) {
    let equalArrayElement = element => element === valuesToRemove[i];
    let indexOfValuesToRemove = myArray.findIndex(equalArrayElement);
    if (indexOfValuesToRemove != -1) {
      myArray.splice(indexOfValuesToRemove, 1);
    }
  }
  return myArray
};

// Do not edit below this line
module.exports = removeFromArray;
