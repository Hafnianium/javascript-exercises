const removeFromArray = function(givenArray, ...valuesToRemove) {
  let myArray = givenArray;
  let removeArray = valuesToRemove
  let indexes = []
  for (i = 0; i < removeArray.length; i++) {
    indexes.push(myArray.indexOf(removeArray[i]))
  }

  for (i = 0; i < indexes.length; i++) { //Checks there are no invalid indexes present
    if (indexes[i] == -1) {
      indexes.splice(i, 1)
    }
  }

  if (indexes != -1) {
    for (i = 0; i < indexes.length; i++) {
      myArray.splice(indexes[i], 1);
    }
  }
  
  return myArray;
  
};

// Do not edit below this line
module.exports = removeFromArray;
