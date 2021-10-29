const repeatString = function(x, y) {
let repeatedString = x
if (y == 0) {
  return ""
} else if (y < 0) {
  return "ERROR"
} else {
  for (i = 0; i < y -1; i++) {
    repeatedString = repeatedString.concat(x);
  }
  return repeatedString;
}
}
  

// Do not edit below this line
module.exports = repeatString;
